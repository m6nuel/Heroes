import { types } from "../types/types";

const initialState = {
    logueado: false,
    check: false
}

export const authenticated = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.login:
            return {
                logueado: action.payload.logueado,
                check: true
            }
        
        case types.check:
            return {
                check: false
            }
    
        case types.logout:
            return {
                check: false
            }

        default:
            return state;
    }
}