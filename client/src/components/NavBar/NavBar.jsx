import { Link } from "react-router-dom"
import css from './NavBar.module.css'
import Search from '../Search/Search'
import OrderABC from '../OrderABC/OrderABC'
import OrderWeight from '../OrderWeight/OrderWeight'
import FilterGet from '../FilterGET/FilterGET'
import FilterTemperament from '../FilterTemperament/FilterTemperaments'
import reload from '../../img/reload.webp'
import Header from "./Header"

const NavBar = () => {
  return (
      //Head
    <div className={css.containerNavBar}>
      {/* <div className={css.containerBG}>
        <Link to='/'><img className={css.imgNav} src={homeNav} alt='Imagen NavBar'/></Link>
      </div> */}
      <Header/>
      <div className={css.containerFilter}>
        <OrderABC/>
        <OrderWeight/>
        <FilterGet/>
        <FilterTemperament/>
        <img className={css.reloadNav} src={reload} alt='Recargar perros'/>
        <Link className={css.linkCreate} to='/Create-Dog'>Crear un perrito</Link>
        <Search />
      </div>
    </div>

  )
}

export default NavBar