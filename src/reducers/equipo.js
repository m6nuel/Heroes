import { types } from "../types/types";


const initialState = {
    heroesEquipo: [],
}

export const equipo = ( state= initialState, action ) => {
    switch ( action.type ) {
        case types.equipo:
            return {
                ...state,
                heroesEquipo: [...state.heroesEquipo, action.payload.heroesEquipo]
            }
            

        default:
            return state;
    }
}