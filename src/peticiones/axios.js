import axios from "axios"


export const logueo = ( email, password ) => {
    try {
        const resp = axios.post( 'http://challenge-react.alkemy.org/', {'email': email, 'password': password} )
        const token = resp;
        console.log(token)
    } catch (error) {
        
    }
}

export const search = ( heroe ) => {
    try {
        const resp = axios.get( `https://superheroapi.com/api/10227697953733690/search/${ heroe }` );
        
    } catch (error) {
        
    }
}