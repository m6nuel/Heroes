import React from 'react'

export const HeroCardEquipo = ({id,connections,appearance,biography,image,name,powerstats,work}) => {

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
        console.log(heroe)
    }
    const handleEliminar = () => {
        console.log('heroe borrado')
    }

    return (
        <>
            <div className="card m-2 col-3">
                    <h5 className="card-title m-2 bg-dark">{ name }</h5>
                <img src={ image.url } className="card-img-center m-2" alt="..."/>

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
