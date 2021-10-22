import axios from "axios"


export const logueo = ( email, password ) => {
    try {
        const resp = axios.post( 'http://challenge-react.alkemy.org/', {'email': email, 'password': password} )
        const token = resp;
        console.log(token)
    } catch (error) {
        
    }
}