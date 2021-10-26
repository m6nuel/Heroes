import { types } from "../types/types";


const initialState = {
    heroes: []
}

export const search = ( state= initialState, action ) => {
    switch ( action.type ) {
        case types.searchHeroes:
            return {
                heroes: action.payload.heroes
            }
                        
    
        default:
            return state;
    }

}