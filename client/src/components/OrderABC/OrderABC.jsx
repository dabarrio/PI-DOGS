import { useDispatch } from "react-redux";
import { changePage, sortABC } from "../../redux/actions";
import { ASCENDENTE, DESCENDENTE, SORT_ABC } from "../../redux/types_actions/types";
import css from './OrderABC.module.css'

const OrderABC = () => {
    const dispatch = useDispatch()

    const onChangeOrder=(e)=>{
        dispatch(sortABC(e.target.value))
        dispatch(changePage(1))
    }

  return (
    <div>
      <select onChange={onChangeOrder} className={css.selectABC}>
        <option value={SORT_ABC}>Ordena por peso</option>
        <option value={ASCENDENTE}>A-Z</option>
        <option value={DESCENDENTE}>Z-A</option>
      </select>
    </div>
  );
};

export default OrderABC;
