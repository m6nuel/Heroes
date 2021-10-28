import React from 'react'
import { useSelector } from 'react-redux'
import { HeroCardEquipo } from '../heroCard/HeroCardEquipo'

export const EquipoHeroes = () => {

    const {heroesEquipo} = useSelector(state => state.equipo)

    return (
        <>  <div className="container-sm">
                <div className="container-sm" >
                    <h3 className="justify-text-center">Elige 6 Heroes para el equipo</h3>
                    <div className="row row-cols-1 row-cols-md-4 justify-content-center">
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
            </div>          
        </>
    )
}
