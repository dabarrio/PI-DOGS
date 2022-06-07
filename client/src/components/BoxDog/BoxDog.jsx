import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {getAllDogs, killDogID} from '../../redux/actions'
import CardDog from '../CardDog/CardDog'
import { Link } from "react-router-dom";
import Paginado from '../Paginado/Paginado';
import css from './BoxDog.module.css'
import Loading from '../../img/Loading.webp'


const BoxDog = () => {
    let dogs = useSelector(state=>state.dogsFilter)
    const page = useSelector(state=>state.page)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(killDogID())
    }, [dispatch])

    const porPage = 8
    const start = (page-1)*porPage;
    const end = start + porPage
    const max = Math.ceil(dogs.length/porPage)

    dogs = dogs.slice(start, end)

    console.log(dogs)
  return (
    <div>
        {dogs.length?
            <div className={css.containerBox}>
            {typeof dogs[0]!== 'string' || dogs[0]===undefined ? <Paginado max={max}/> : <></>}
            {typeof dogs[0]!== 'string' ? 
            dogs.map(dog=>{
                const route = `/${dog.id}`
                return(
                    <Link className={css.linkDogs} to={route} key={dog.id}>
                        <div>
                        {/* { name, id, image, temperament, weight_min, weight_max} */}
                        <CardDog
                        name={dog.name}
                        id={dog.id}
                        image={dog.image}
                        temperament={dog.temperament}
                        weight_min={dog.weight_min}
                        weight_max={dog.weight_max}/>
                        </div>
                        </Link>
            )}) 
            : <h1>No se encontraron perros!</h1>}
            {typeof dogs[0]!== 'string' ? <Paginado max={max}/> : <></>}
        </div>
        :   <div className={css.containerBox}>
            <img className={css.loadingDogDetail} src={Loading} alt='Cargando'/>
            </div>}
    </div>
  )
}

export default BoxDog