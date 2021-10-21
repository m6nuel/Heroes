import { types } from "../types/types";

// {
//     logueado: 
// }

export const authenticated = ( state = {}, action ) => {
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