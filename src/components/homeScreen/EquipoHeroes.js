import React from 'react'
import { useSelector } from 'react-redux'
import { HeroCardEquipo } from '../heroCard/HeroCardEquipo'

export const EquipoHeroes = () => {

    const {heroesEquipo} = useSelector(state => state.equipo)

    return (
        <>  <div className="container-sm">
                <div className="container-sm" >
                    <div className="row row-cols-1 row-cols-md-3 cards-columns">
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
