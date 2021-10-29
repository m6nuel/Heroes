import React from 'react'
import { useDispatch } from 'react-redux'
import { eliminarHeroes } from '../../actions/equipo';
import { openModalInfo } from '../../actions/modal';

export const HeroCardEquipo = ({id,connections,appearance,biography,image,name,powerstats,work}) => {

    const dispatch = useDispatch();

    const heroe = {
        id,
        connections,
        appearance,
        biography,
        image,
        name,
        powerstats,
        work
    }

    const handleInfo = () => {
        dispatch( openModalInfo() )
    }
    const handleEliminar = () => {
        const eliminar = heroe.id;
        dispatch( eliminarHeroes( eliminar ) )
    }

    return (
        <>
            <div className="card m-2 col-3">
                    <h5 className="card-title m-2 bg-dark">{ name }</h5>
                <img src={ image.url } className="card-img-center m-2" alt="..."/>
                <span className="bg-dark"> { id } </span>
                <div className="d-grid gap-2 m-2 col-12 mx-auto">
                    <button 
                        className="btn btn-primary btn-lg"
                        onClick={ handleInfo }
                        >
                        Detalles 
                    </button>
                    <button 
                        className="btn btn-danger btn-lg"
                        onClick={ handleEliminar }
                        >
                        Eliminar 
                    </button>
                </div>
            </div>
        </>
    )
}
