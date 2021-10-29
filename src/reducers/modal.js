import { types } from "../types/types";

const initialState = {
    openModal: false
}

export const modal = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.openModal:
            return {
                openModal: true
            }
        
        case types.closeModal:
            return {
                openModal: false
            }

        default:
            return state;
    }
}