import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { openModal } from '../../actions/modal';

export const Buscador = () => {

    const dispatch = useDispatch();

    const handleModal = () => {
        dispatch( openModal() );
    }
    const {heroesEquipo} = useSelector(state => state.equipo)

    if ( heroesEquipo.length === 6) {
        Swal.fire('Equipo completo')
    }
        


    return (
        <>
            {
                ( heroesEquipo.length <= 5 ) 
                ?
                <button 
                     className="btn btn-primary" 
                     onClick={ handleModal }
                 >
                     Buscar Heroes 
                </button>
                :
                <button 
                    disabled
                    className="btn btn-primary" 
                    onClick={ handleModal }
                 >
                     Buscar Heroes
                </button>
            }
        </>
    )
}
