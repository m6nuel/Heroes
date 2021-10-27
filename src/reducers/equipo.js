import { types } from "../types/types";

const initialState = {
    equipo: []
}

export const equipo = ( state= initialState, action ) => {
    switch ( action.type ) {
        case types.equipo:
            return {
                heroe: action.payload.equipo,
                ...equipo
            }
            

        default:
            return state;
    }
}