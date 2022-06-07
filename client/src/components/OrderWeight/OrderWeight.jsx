import { useDispatch } from "react-redux";
import { changePage, sortWeight } from "../../redux/actions";
import { MENOR, MAYOR, SORT_WEIGHT } from "../../redux/types_actions/types";
import css from './OrderWeight.module.css'

const OrderWeight = () => {
    const dispatch = useDispatch()
    const onChangeOrder = (e)=>{
        dispatch(sortWeight(e.target.value))
        dispatch(changePage(1))
    }

  return (
    <div>
    <select onChange={onChangeOrder} className={css.orderW}>
      <option value={SORT_WEIGHT}>Selecciona un ordenamiento</option>
      <option value={MENOR}>Menor a mayor</option>
      <option value={MAYOR}>Mayor a menor</option>
  </select>
    </div>
  )
}

export default OrderWeight