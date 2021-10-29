import Swal from "sweetalert2";
import { getHeroes } from "../peticiones/axios";
import { types } from "../types/types";

export const startSearch = (heroe) => {
    return async ( dispatch ) => {
        try {
            getHeroes(heroe).then(heroes => {
                const {results} = heroes.data;
                if (results) {
                    dispatch( searchHeroe(results) );
                    localStorage.setItem( 'heroes', JSON.stringify( results ) );
                } else {
                    Swal.fire('Heroe No encontrado') 
                }
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