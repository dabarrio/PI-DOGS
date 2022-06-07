import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { changePage, filterTemperament, getAllTemperaments } from '../../redux/actions'
import { ALL } from '../../redux/types_actions/types'
import css from './FilterTemperaments.module.css'

const FilterTemperaments = () => {
    const temperament = useSelector(state=>state.temperaments)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllTemperaments())
    },[dispatch])

    const handleTemperament = (e)=>{
        dispatch(filterTemperament(e.target.value))
        dispatch(changePage(1))
    }

  return (
    <div>
        <select onChange={handleTemperament} className={css.filterTemp}>
            <option value={ALL}>Selecciona un temperamento</option>
            {temperament.map(e=>{
                return <option key={e} name={e}>{e}</option>
            })}
        </select>
    </div>
  )
}

export default FilterTemperaments