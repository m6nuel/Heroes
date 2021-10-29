import { types } from "../types/types";

const initialState = {
    modalInfo: false
}

export const modalInfo = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.openModalInfo:
            return {
                modalInfo: true
            }
        
        case types.closeModalInfo:
            return {
                modalInfo: false
            }            
    
        default:
            return state;
    }
}