import React from 'react'
import { Link } from 'react-router-dom'
import BoxDog from '../BoxDog/BoxDog'
import FilterGET from '../FilterGET/FilterGET'
import FilterTemperaments from '../FilterTemperament/FilterTemperaments'
import NavBar from '../NavBar/NavBar'
import OrderABC from '../OrderABC/OrderABC'
import OrderWeight from '../OrderWeight/OrderWeight'
import Search from '../Search/Search'
import css from './Home.module.css'

const Home = () => {
  return (
    <div className={css.containerHome}>
    {/* <Link to='/createDog'>Crear perrito</Link>
    <Search/>
    <FilterTemperaments/>
    <OrderABC/>
    <OrderWeight/>
    <FilterGET/> */}
    <NavBar/>
    <BoxDog className={css.bg}/>
    </div>
  )
}

export default Home