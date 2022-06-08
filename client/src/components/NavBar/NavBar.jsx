import { Link } from "react-router-dom"
import css from './NavBar.module.css'
import Search from '../Search/Search'
import OrderABC from '../OrderABC/OrderABC'
import OrderWeight from '../OrderWeight/OrderWeight'
import FilterGet from '../FilterGET/FilterGET'
import FilterTemperament from '../FilterTemperament/FilterTemperaments'
import reload from '../../img/reload.webp'
import Header from "./Header"
import { useDispatch } from "react-redux"
import { resetDog } from "../../redux/actions"

const NavBar = () => {

  const dispatch = useDispatch()

  const resetClick=e=>{
    e.preventDefault()
    dispatch(resetDog())
  }

  return (
      //Head
    <div className={css.containerNavBar}>
      <Header/>
      <div className={css.containerFilter}>
        <OrderABC/>
        <OrderWeight/>
        <FilterGet/>
        <FilterTemperament/>
        {/* <img className={css.reloadNav} src={reload} alt='Recargar perros' onClick={resetClick}/> */}
        <Link className={css.linkCreate} to='/Create-Dog'>Crear un perrito</Link>
        <Search />
      </div>
    </div>

  )
}

export default NavBar