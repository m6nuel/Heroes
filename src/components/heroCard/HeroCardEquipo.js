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
        dispatch( openModalInfo( heroe ) );
        localStorage.setItem('heroeDetalle', JSON.stringify( heroe ) )
    }
    const handleEliminar = () => {
        const eliminar = heroe.id;
        dispatch( eliminarHeroes( eliminar ) )
    }

    return (
        <>

                <div className="card me-md-2 mt-1 bg-dark">
                    <div className="col-12 justify-content-center">
                        <span className="card-title col-12 bg-dark"> { name } </span>
                            <img src={ image.url } className="card-img" alt={ name } />
                        <div className="col-md-12">
                                <div className="card-text"> intelligence: { powerstats.intelligence } </div>     
                                <div className="card-text"> Strength:     { powerstats.strength } </div>
                                <div className="card-text"> Speed:        { powerstats.speed } </div>
                                <div className="card-text"> Durability:   { powerstats.durability } </div>
                                <div className="card-text"> Power:        { powerstats.power } </div>
                                <div className="card-text"> Combat:       { powerstats.combat } </div>
                        <button 
                            className="btn btn-primary col-6"
                            onClick={ handleInfo }
                            >
                            Detalles 
                        </button>
                        <button 
                            className="btn btn-danger col-6"
                            onClick={ handleEliminar }
                            >
                            Eliminar 
                        </button>
                        </div>
                    </div>
                </div>


        </>
    )
}
