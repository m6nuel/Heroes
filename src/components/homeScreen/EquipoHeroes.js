import React from 'react'
import { useSelector } from 'react-redux'
import { HeroCardEquipo } from '../heroCard/HeroCardEquipo'

export const EquipoHeroes = () => {

    const {heroesEquipo} = useSelector(state => state.equipo)

    return (
        <>  
        <div className="container">            
        <h3 className="text-center animate__animated animate__slideInDown"> Heroes del Equipo </h3>
            <div className="row row-cols-1 row-cols-md-2  justify-content-center cards-columns animate__animated animate__fadeIn">
                    {
                        heroesEquipo.map( (heroe) => {
                            return  <HeroCardEquipo
                            className="container-sm"
                            key={ heroe.id }
                            {...heroe}
                            />
                        })
                    }
            </div>
        </div>
        </>
    )
}
