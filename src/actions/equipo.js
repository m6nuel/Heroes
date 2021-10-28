import { types } from "../types/types";


export const agregarAlEquipo = ( hero ) => {
    
    return{
        type: types.equipo,
        payload: {
            heroesEquipo: hero
        }
    }
}