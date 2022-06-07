import { useDispatch } from "react-redux";
import { changePage, filterGET } from "../../redux/actions";
import { FILTER_GET, API, DB } from "../../redux/types_actions/types";
import css from './FilterGet.module.css'

const FilterGET = () => {
    const dispatch = useDispatch()

    const onChangeFilter=(e)=>{
        dispatch(filterGET(e.target.value))
        dispatch(changePage(1))
    }

  return (
    <div>
    <select onChange={onChangeFilter} className={css.filterGet}>
      <option value={FILTER_GET}>Selecciona un filtro</option>
      <option value={API}>API</option>
      <option value={DB}>DB</option>
    </select>
  </div>
  )
}

export default FilterGET