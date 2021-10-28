import React from 'react'
import { useSelector } from 'react-redux'

export const EquipoHeroes = () => {

    const heroesEquipo = useSelector(state => state.equipo)
    localStorage.setItem( 'equipo', JSON.stringify( heroesEquipo ) )

    return (
        <>            
            {/* <div className="row row-cols-1 row-cols-md-4 justify-content-center">
                <div className="card mr-3 m-3 col-3">
                            <h5 className="card-title">{ name }</h5>
                        <img src={ image.url } className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">{biography.alignment}</p>
                        </div>
                            <button 
                                className="btn btn-primary m-3"
                            > En Construccion</button>
                </div>
            </div> */}
        </>
    )
}
