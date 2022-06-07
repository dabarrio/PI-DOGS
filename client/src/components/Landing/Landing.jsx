import { NavLink } from "react-router-dom"
import css from './Landing.module.css'

const Landing = () => {
  return (
    <div className={css.bg}>
      <div className={css.container}>
      <div className={css.titleLanding}>
        <h1 className={css.h1Title}>PI Dogs | <span className={css.spanTitle}>Henry</span></h1>
      </div>
      <div className={css.textLanding}>
        <p>La idea general es crear una aplicación en la cual se puedan ver distintas razas de perro junto con información relevante de las mismas utilizando una api externa y a partir de ella poder, entre otras cosas:</p>
        <ul className={css.ulText}>
          <li className={css.liText}>Buscar perros</li>
          <li className={css.liText}>Filtrarlos / Ordenarlos</li>
          <li className={css.liText}>Agregar nuevos perros</li>
        </ul>
      </div>
      <div className={css.linkLanding}>
      <NavLink to='/home'>{<button className={css.pLanding}>Ingresar</button>}</NavLink>
      </div>
      </div>
    </div>
  )
}

export default Landing