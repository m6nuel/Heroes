import axios from "axios";


export const autenticacion = async ( email, password ) => {
    try {
        const peticion = await axios.post('http://challenge-react.alkemy.org/', {'email': email,'password': password});

        const { token } = peticion.data;
        if ( token ) {
            localStorage.setItem( 'token', token )
        }
        diskpatch( login( !!token ) )
    } catch (error) {
        console.log('Credenciales Incorrectas')
    }
}