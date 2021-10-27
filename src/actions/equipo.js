import { types } from "../types/types";


export const agregarAlEquipo = ( hero ) => ({
    type: types.equipo,
    payload: {
        equipo: hero
    }
})