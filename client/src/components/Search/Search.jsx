import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { getDogName } from '../../redux/actions'
import css from './Search.module.css'
import lupa from '../../img/search.webp'

const Search = () => {
    const [search, setSearch]=useState('')
    const dispatch = useDispatch()

    const handleSearch = (e)=>{
        e.preventDefault()
        setSearch(e.target.value)
    }


    const onSubmit = (e)=>{
        e.preventDefault()
        dispatch(getDogName(search))
        setSearch('')
    }

  return (
    <div>
        <form onSubmit={onSubmit} className={css.containerSearch}>
            <input className={css.inputSearch}
            type="text" 
            placeholder='Busca tu raza' 
            value={search}
            onChange={handleSearch}/>
            <img className={css.imgSearch} onClick={onSubmit} src={lupa} alt="Buscar" />
        </form>
    </div>
  )
}

export default Search