import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { useEffect } from "react"
import { getDogID, killDogID, dogDelete } from "../../redux/actions"
import Header from '../NavBar/Header'
import css from './DogDetail.module.css'
import Loading from '../../img/Loading.webp'
import { useNavigate   } from "react-router-dom"

const DogDetail = () => {
    const {id}=useParams()

    const dogID = useSelector(state=>state.dogID)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getDogID(id))
        dispatch(killDogID())
    },[dispatch, id])

    

    const deleteDog = (e)=>{
        e.preventDefault()
        dispatch(dogDelete(dogID.id))
        navigate("/home")
    }

  return (
      <div>
        <Header/>
        <div className={css.containerDogDetail}>
        {dogID.id?
        <div className={css.bgDogDetail}>
        <img className={css.imgDogDetail} src={dogID.image} alt={`Imagen de ${dogID.name}`}/>
        <h1>{dogID.name}</h1>
        <div className={css.infoDogDetail}>
            <div className={css.displayFlexRow}>
            <div>
            <h4>Peso</h4>
            <div className={css.displayFlexRow}>
            <h3>Min: {dogID.weight_min} |   Max: {dogID.weight_max}</h3>
            </div>
        </div>
        <div>
            <h4>Altura</h4>
            <div className={css.displayFlexRow}>
            <h3>Min: {dogID.height_min} |   Max: {dogID.height_max}</h3>
            </div>
        </div>
            </div>
        <div>
            <h4>Temperamentos</h4>
            <h3>{dogID.temperament}</h3>
        </div>
        <div>
        <h4>Años de vida</h4>
        <h3>{typeof dogID.life_span === 'number' ? `${dogID.life_span} years` : dogID.life_span}</h3>
        </div>       
        </div>
        {typeof dogID.id === 'string' ? <input type='submit' onClick={deleteDog} value='Enviar'/> : <></>}
        </div>
        :<div className={css.bgDogDetailLoading}>
            <img className={css.loadingDogDetail} src={Loading} alt='Cargando'/>
        </div> 
        }
    </div>
      </div>

  )
}

export default DogDetail