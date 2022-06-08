const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Dog, Temperament } = require("../db");

router.get('', async (req, res,next)=>{
    try {
        const {name} = req.query
        console.log(name)
        const getAPI = await axios.get('https://api.thedogapi.com/v1/breeds/')
        const allGetAPI = getAPI.data.map(dog=>{
            let weight = dog.weight.metric
            weight = typeof weight !== 'string' ? 0 : weight
            weight = weight === 0 ? 0 : weight.split(' - ')
  
            const weight_min = parseInt(weight[0]) || 0
            const weight_max = parseInt(weight[1]) || 0
  
            let height = dog.height.metric
            height = typeof height !== 'string' ? 0 : height
            height = height === 0 ? 0 : height.split(' - ')
  
            const height_min = parseInt(height[0]) || 0
            const height_max = parseInt(height[1]) || 0
  
  
              return{
              id: dog.id,
              name: dog.name,
              height_min: height_min,
              height_max: height_max,
              weight_min: weight_min,
              weight_max: weight_max,
              life_span: dog.life_span,
              image: dog.image.url,
              temperament : dog.temperament || 'No tiene temperamentos'
            }
        })

        const getDB = await Dog.findAll({include: Temperament})
        const allGetDB= getDB.map(dog=>{
            const temperament = dog.temperaments;
            const temperaments = temperament.map((e) => {return e.name})
          
            return{
              id:dog.id,
              name:dog.name,
              height_min:dog.min_height,
              height_max:dog.max_height,
              weight_min: dog.min_weight,
              weight_max: dog.min_weight,
              life_span: dog.life_span,
              image: dog.image,
              temperament : temperaments.join(', ') || 'No tiene temperamentos'
            }
        })

        const allDogs = [...allGetDB, ...allGetAPI]

        if(name){
            let filterName= allDogs.map(dog=>{
              const nameDog = dog.name.toLowerCase()
              const nameSearch = name.toLowerCase()
              if(nameDog.includes(nameSearch)){return dog}})
              filterName = filterName.filter(e=>e!==undefined)
            console.log(filterName)
            if(filterName[0]){res.status(201).send(filterName)}
            else  res.status(210).json('No se encontraron perros con ese nombre')
        }
        if(!name){
            res.status(201).send(allDogs)
        }
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async(req,res,next)=>{
    try {
        const {id}=req.params

        const getAPI = await axios.get('https://api.thedogapi.com/v1/breeds/')
        const allGetAPI = getAPI.data.map(dog=>{
            let weight = dog.weight.metric
            weight = typeof weight !== 'string' ? 0 : weight
            weight = weight === 0 ? 0 : weight.split(' - ')
  
            const weight_min = parseInt(weight[0]) || 0
            const weight_max = parseInt(weight[1]) || 0
  
            let height = dog.height.metric
            height = typeof height !== 'string' ? 0 : height
            height = height === 0 ? 0 : height.split(' - ')
  
            const height_min = parseInt(height[0]) || 0
            const height_max = parseInt(height[1]) || 0
  
  
              return{
              id: dog.id,
              name: dog.name,
              height_min: height_min,
              height_max: height_max,
              weight_min: weight_min,
              weight_max: weight_max,
              life_span: dog.life_span,
              image: dog.image.url,
              temperament : dog.temperament || 'No tiene temperamentos'
            }
        })
        const getDB = await Dog.findAll({include: Temperament})
        const allGetDB= getDB.map(dog=>{
            const temperament = dog.temperaments;
            const temperaments = temperament.map((e) => {return e.name})
  
            return{
              id:dog.id,
              name:dog.name,
              height_min:dog.min_height,
              height_max:dog.max_height,
              weight_min: dog.min_weight,
              weight_max: dog.min_weight,
              life_span: dog.life_span,
              image: dog.image,
              temperament : temperaments.join(', ') || 'No tiene temperamentos'
            }
        })
        const allDogs = [...allGetDB, ...allGetAPI]

        const findID = allDogs.find(dog=>{return dog.id==id})
        if(findID){res.status(201).send(findID)}
        if(!findID){res.status(404).json('No se encuentra ese perro')}

    } catch (error) {
        next(error)
    }
})

router.delete('/delete/:id', async(req,res,next)=>{
  const {id}=req.params
  try {
    const dog = await Dog.findOne({where:{id:id}})

    if(dog){
      await Dog.destroy({where:{id:id}})
    res.status(201).send('Perrito borrado')
    }
    if(!dog){
      res.status(404).send('Ese perrito no existe')
    }

  } catch (error) {
    next(error)
  }
})

router.post("/dog", async (req, res, next) => {
    try {
      const { name, min_height, max_height, min_weight, max_weight,life_span,image,temperament } = req.body;
  
      const newDog = await Dog.create({
        name,
        min_height,
        max_height,
        min_weight,
        max_weight,
        life_span,
        image,
      })
      newDog.addTemperament(temperament)
  
      res.status(201).json(newDog);
    } catch (error) {
      next(error);
    }
  });



module.exports = router;
