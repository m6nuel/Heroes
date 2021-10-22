import { types } from "../types/types";

const initialState = {
    logueado: false
}

export const authenticated = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.login:
            return {
                logueado: action.payload.logueado
            }
    
        case types.logout:
            return {}

        default:
            return state;
    }
}