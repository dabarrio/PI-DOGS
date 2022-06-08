import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import { changePage, filterTemperament, getAllTemperaments, killResetDog, resetDog } from '../../redux/actions'
import { ALL } from '../../redux/types_actions/types'
import css from './FilterTemperaments.module.css'

const FilterTemperaments = () => {
    const temperament = useSelector(state=>state.temperaments)
    const reset = useSelector(state=>state.reset)
    const dispatch = useDispatch()

    const [value, setValue]=useState(ALL)

    useEffect(()=>{
        dispatch(getAllTemperaments())
    },[dispatch])

    const handleTemperament = (e)=>{
        const temp = e.target.value
        setValue(temp)
        dispatch(filterTemperament(temp))
        dispatch(changePage(1))
    }

    const resetTemp = ()=>{
        dispatch(killResetDog())
    }

    if(reset){
        dispatch(killResetDog())
        setValue(ALL)
    }

  return (
    <div>
        <select onChange={handleTemperament} className={css.filterTemp} value={value}>
            <option value={ALL} >Selecciona un temperamento</option>
            {temperament.map(e=>{
                return <option key={e} name={e}>{e}</option>
            })}
        </select>

    </div>
  )
}

export default FilterTemperaments