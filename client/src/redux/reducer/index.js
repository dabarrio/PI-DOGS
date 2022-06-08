import {
  GET_ALL_DOGS,
  GET_ALL_TEMPERAMENTS,
  GET_DOG,
  GET_KILL_DOG,
  SORT_ABC,
  ASCENDENTE,
  SORT_WEIGHT,
  MENOR,
  FILTER_GET,
  API,
  DB,
  FILTER_TEMPERAMENT,
  ALL,
  GET_DOG_NAME,
  NEXT_PAGE,
  PREV_PAGE,
  CHANGE_PAGE,
  CREATE_DOG,
  RESET_DOG,
  KILL_RESET_DOG
} from "../types_actions/types";

const initialState = {
  dogs: [],
  dogsFilter: [],
  temperaments: [],
  dogID: [],
  page: 1,
  newDog : [],
  findDB: [],
  reset: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
        dogsFilter: action.payload,
      };
    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case GET_DOG:
      return {
        ...state,
        dogID: action.payload,
      };
    case GET_KILL_DOG:
      return {
        ...state,
        dogID: [],
        dogsFilter:[...state.dogs]
      };
    case SORT_ABC:
        let arrSortABC = [...state.dogsFilter];
      if(action.payload!==SORT_ABC){
        arrSortABC = arrSortABC.sort((a, b) => {
            if (a.name < b.name) {
              return action.payload === ASCENDENTE ? -1 : 1;
            }
            if (a.name > b.name) {
              return action.payload === ASCENDENTE ? 1 : -1;
            }
            return 0;
          });
      }else{
          arrSortABC =[...state.dogs]
      }
      return {
        ...state,
        dogsFilter: arrSortABC,
      };
    case SORT_WEIGHT:
        let arrSortWeight = [...state.dogsFilter]
            arrSortWeight = arrSortWeight.sort((a,b)=>{
                if(a.weight_min<b.weight_min){return action.payload===MENOR ? -1 : 1}
                if(a.weight_min>b.weight_min){return action.payload===MENOR ? 1 : -1}
                if(action.payload===SORT_WEIGHT){return 0}
            })
            if(action.payload===SORT_WEIGHT){
                arrSortWeight=[...state.dogs]
            }
        return{
            ...state,
            dogsFilter : arrSortWeight
          };
    case FILTER_GET:
        let arrFilterGet = [...state.dogs]
        arrFilterGet= arrFilterGet.filter(e=>{
            if(action.payload===API){
                return typeof e.id ==='number'
            }else if(action.payload===DB){
                return typeof e.id==='string'
            }else{
                return e
            }
        })
        return{
            ...state,
            dogsFilter: arrFilterGet,
            findDB: arrFilterGet
          }
    case FILTER_TEMPERAMENT:
      let filterTemperament
      state.findDB.length>0 ? filterTemperament=[...state.findDB] : filterTemperament = [...state.dogs]
      let sendFilter = []
      filterTemperament.map(e=>{
        if(e.temperament.includes(action.payload)){
          return sendFilter.push(e)}
      })
      if(action.payload===ALL){sendFilter=[...state.dogs]}
      return{
        ...state,
        dogsFilter: sendFilter
      }
      case GET_DOG_NAME:
        return{
          ...state,
          dogsFilter: action.payload
        }
      case NEXT_PAGE:
        return{
          ...state,
          page: state.page+1
        }
      case PREV_PAGE:
        return{
          ...state,
          page: state.page-1
        }
      case CHANGE_PAGE:
        return{
          ...state,
          page: action.payload
        }
      case CREATE_DOG:
        return{
          ...state,
          newDog : action.payload
        }
        case RESET_DOG:
          return{
            ...state,
            dogsFilter:state.dogs,
            reset:action.payload
          }
        case KILL_RESET_DOG:
          return{
            ...state,
            reset:action.payload
          }
      default:
      return state;
  }
};

export default reducer;
