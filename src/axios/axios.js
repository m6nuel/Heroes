import axios from "axios";
// import { useDispatch } from "react-redux";
// import { login } from "../actions/auth";

// export const autenticacion = async ( email, password ) => {
//     const dispatch = useDispatch();
//     try {
//         const peticion = await axios.post('http://challenge-react.alkemy.org/', {'email': email,'password': password});

//         const { token } = peticion.data;
//         if ( token ) {
//             localStorage.setItem( 'token', token )
//             dispatch( login( !!token ) )
//         }
//     } catch (error) {
//         console.log('Credenciales Incorrectas')
//     }
// }

export const getHeroes = async (name) => {
    return await axios(`https://superheroapi.com/api.php/10227697953733690/search/${name}`)
}