import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { changePage, nextPage, prevPage } from '../../redux/actions'
import css from './Paginado.module.css'

const Paginado = ({max}) => {
    const page = useSelector(state=>state.page)
    const [input,setInput]= useState(page)
    const dispatch = useDispatch()

    useEffect(() => {
        setInput(page)
      }, [dispatch,page])
      
    const handleNextPage = (e)=>{
        e.preventDefault()
        dispatch(nextPage())
    }
    const handlePrevPage = (e)=>{
        e.preventDefault()
        dispatch(prevPage())
    }

    // FUNCION PARA MODIFICAR LA PAGINA
    const handlePage = (e)=>{
        setInput(e.target.value)
    }
    const keyDown = (e)=>{
        if(e.keyCode===13){
            const number = parseInt(e.target.value)
            if(number < 1 || number > Math.ceil(max) ||isNaN(number))
            {dispatch(changePage(1))
            setInput(1)
            }
            else{dispatch(changePage(number))}
        }
    }

  return (
    <div className={css.containerPaginado}>
        <input disabled={page<=1?true:false}
        className={css.buttonPaginado}
        type='submit' value='🢀' onClick={handlePrevPage} />
        <div><input className={css.pagePaginado} type='number' value={input} onChange={handlePage} onKeyDown={keyDown}/><span className={css.spanPage}>de {max}</span></div>
        <input disabled={page>=max?true:false}
        className={css.buttonPaginado}
        type='submit' value='🢂' onClick={handleNextPage}/>
    </div>
  )
}

export default Paginado