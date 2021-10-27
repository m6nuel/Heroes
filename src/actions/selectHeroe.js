import { types } from "../types/types";


export const selectHeroe = ( heroe ) => ({
    type: types.equipo,
    payload: {
        heroe: heroe
    }
})