import { getHeroes } from "../peticiones/axios";
import { types } from "../types/types";

export const startSearch = (heroe) => {
    return async ( dispatch ) => {
        try {
            getHeroes(heroe).then(heroes => {
                const {results} = heroes.data;
                dispatch( searchHeroe(results) );
                localStorage.setItem( 'heroes', JSON.stringify( results ) );
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export const searchHeroe = ( name ) => ({
    type: types.searchHeroes,
    payload: {
        heroes: name
    }
})