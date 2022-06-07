const { default: axios } = require('axios');
const { Router } = require('express');
const router = Router();
const {Temperament} = require('../db')

router.get('', async (req,res,next)=>{
    try {
        const getAPI = await axios('https://api.thedogapi.com/v1/breeds')
        const getTemperament = getAPI.data.map(dog=>dog.temperament)

        const temperaments = []

        getTemperament.join(', ').split(', ').map(t=>{if(!temperaments.includes(t) && t!=='') temperaments.push(t)})
        temperaments.push('No tiene temperamentos')
        temperaments.sort()

        temperaments.map(t=>{
            Temperament.findOrCreate({where : {name:t}})
        })

        res.send(temperaments)
    } catch (error) {
        next(error)
    }
})

module.exports = router;
