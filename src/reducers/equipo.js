
import { types } from "../types/types";



const initialState = {
    heroesEquipo: []
}

export const equipo = ( state= initialState, action ) => {
    


    switch ( action.type ) {
        case types.equipo:
            return {
                ...state,
                heroesEquipo: [ ...state.heroesEquipo, action.payload.heroesEquipo ]
            }
        
        case types.eliminar:
            return {
                heroesEquipo: state.heroesEquipo.filter( heroe => heroe.id !== action.payload.heroesEquipo )
                
            }
            
        default:
            return state;
    }
}