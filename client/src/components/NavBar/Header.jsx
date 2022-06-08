import css from './Head.module.css'
import { Link } from "react-router-dom"
import homeNav from '../../img/HomePNG.webp'
import { useDispatch } from "react-redux";
import { changePage } from '../../redux/actions'

const Header = () => {
  const dispatch = useDispatch()
  const goToHome = e=>{
    dispatch(changePage(1))
  }
  return (
    <div className={css.containerBG}>
    <Link to='/home' onClick={goToHome}><img className={css.imgNav} src={homeNav} alt='Imagen NavBar'/></Link>
    </div>
  )
}

export default Header