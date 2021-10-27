import { types } from "../types/types";

const initialState = {
    heroe: []
}

export const selectHeroe = ( state= initialState, action ) => {
    switch ( action.type ) {
        case types.equipo:
            return {
                heroe: action.payload.heroe
            }
            

        default:
            return state;
    }
}