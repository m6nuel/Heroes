import React from 'react'
import { useDispatch } from 'react-redux';
import { agregarAlEquipo } from '../../actions/equipo';

export const HeroCard = ({id,connections,appearance,biography,image,name,powerstats,work}) => {

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

    const handleAgregar = () => {
        dispatch( agregarAlEquipo( heroe ) )
        console.log('Agregar al Equipo');
    }

    return (
        <>
            <div className="card mr-3 m-3 col-3">
                        <h5 className="card-title">{ name }</h5>
                    <img src={ image.url } className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">{biography.alignment}</p>
                        <button 
                            className="btn btn-primary"
                            onClick={ handleAgregar }
                        > Agregar al equipo </button>
                    </div>
            </div>
        </>
    )
}
