import css from './Head.module.css'
import { Link } from "react-router-dom"
import homeNav from '../../img/HomePNG.webp'

const Header = () => {
  return (
    <div className={css.containerBG}>
    <Link to='/home'><img className={css.imgNav} src={homeNav} alt='Imagen NavBar'/></Link>
    </div>
  )
}

export default Header