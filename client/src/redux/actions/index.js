import axios from 'axios'
import { CHANGE_PAGE, CREATE_DOG, FILTER_GET, FILTER_TEMPERAMENT, GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, GET_DOG, GET_DOG_NAME, GET_KILL_DOG, NEXT_PAGE, PREV_PAGE, SORT_ABC, SORT_WEIGHT, RESET_DOG, KILL_RESET_DOG, ALL} from "../types_actions/types"

//Traer todos los perros
export const getAllDogs = ()=>{
    return (dispatch)=>{
        axios('/app/dogs')
        .then(dogs=>{
            return dispatch({
                type:GET_ALL_DOGS,
                payload:dogs.data
            })
        })
    }
}
//Traer todos los temperamentos
export const getAllTemperaments = ()=>{
    return(dispatch)=>{
        axios('/app/temperament')
        .then(temp=>{
            return dispatch({
                type:GET_ALL_TEMPERAMENTS,
                payload:temp.data
            })
        })
    }
}
// Traer perro por id y matarlo
export const getDogID = (id)=>{
    return (dispatch)=>{
        axios(`/app/dogs/${id}`)
        .then(dog=>{
            console.log(dog.data)
            return dispatch({
                type: GET_DOG,
                payload:dog.data
            })
        })
    }
}
export const killDogID = ()=>{
    return {
        type: GET_KILL_DOG
    }
}

// Ordenar alfabeticamente
export const sortABC = (order)=>{
    return{
        type : SORT_ABC,
        payload : order
    }
}
//Ordenar por peso
export const sortWeight = (order)=>{
    return{
        type : SORT_WEIGHT,
        payload : order
    }
}

// Filtro API/DB
export const filterGET = (order)=>{
    return{
        type : FILTER_GET,
        payload : order
    }
}
// Filtro Temperament
export const filterTemperament = (temperament)=>{
    return{
        type : FILTER_TEMPERAMENT,
        payload : temperament
    }
}

// Buscar por name
export const getDogName = (name)=>{
    return (dispatch)=>{
        axios(`/app/dogs?name=${name}`)
        .then(dog=>{
            return dispatch({
                type: GET_DOG_NAME,
                payload : dog.data
            })
        })
    }

}

// Siguiente pag
export const nextPage = ()=>{
    return {
        type: NEXT_PAGE
    }
}
// Previo pag
export const prevPage = ()=>{
    return {
        type: PREV_PAGE
    }
}
// Setear pag
export const changePage = (page)=>{
    return{
        type: CHANGE_PAGE,
        payload : page
    }
}

//Crear perro
export const createDog = (newDog)=>{
    return dispatch=>{
        axios.post('/app/dogs/dog', newDog)
        .then(dogNew=>{
            return dispatch({
                type: CREATE_DOG,
                payload: dogNew.data
            })
        })
    }
}

// Reset
export const resetDog = ()=>{
    return{
        type : RESET_DOG,
        payload: true
    }
}
export const killResetDog = ()=>{
    return{
        type : KILL_RESET_DOG,
        payload: false
    }
}