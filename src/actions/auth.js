import axios from "axios"
import { types } from "../types/types"


export const startLogin = ( email, password ) => {
    return async (diskpatch) => {

        try {
            const peticion = await axios.post('http://challenge-react.alkemy.org/', {'email': email,'password': password});
            const resp = peticion;
            console.log(resp)
            const { token } = peticion.data;
            if ( token ) {
                localStorage.setItem( 'token', token )
            }
            console.log( !!token )
            diskpatch( login( !!token ) )
        } catch (error) {
            // console.log(error)
        }
    }
}

export const login = ( token ) => ({
    type: types.login,
    payload: {
        logueado: token
    }
})

export const stratLogout = () => {
    return ( dispatch ) => {
        localStorage.clear();
        dispatch( logout() )
    }
}

export const logout = () => ({
    type: types.logout 
})