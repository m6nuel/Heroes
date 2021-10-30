import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { agregarAlEquipo } from '../../actions/equipo';
import { closeModal } from '../../actions/modal';

export const HeroCard = ({id,connections,appearance,biography,image,name,powerstats,work}) => {

    // const {heroesEquipo} = useSelector(state => state.equipo)
    // const heroesBuenos = heroesEquipo.filter( heroe => heroe.biography.alignment === "good" );
    // const heroesMalos = heroesEquipo.filter( heroe => heroe.biography.alignment === "bad" );



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
            dispatch( closeModal() )
    }

    return (
        <>
            <div className="card mr-3 m-3 col-3">
                        <h5 className="card-title">{ name }</h5>
                    <img src={ image.url } className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">{biography.alignment}</p>
                    </div>
                        <button 
                            className="btn btn-primary m-3"
                            onClick={ handleAgregar }
                        >
                            Agregar al equipo 
                        </button>
            </div>
        </>
    )
}
