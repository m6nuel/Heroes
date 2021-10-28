// import { useState } from "react";
import { types } from "../types/types";

// const [heroes, setHeroes] = useState([])

const initialState = {
    heroesEquipo: [],
}

export const equipo = ( state= initialState, action ) => {
    switch ( action.type ) {
        case types.equipo:
            return {
                ...state,
                heroesEquipo: action.payload.heroesEquipo,
            }
            

        default:
            return state;
    }
}