import React from 'react'
import { useSelector } from 'react-redux'
import { HeroCard } from '../heroCard/HeroCard'

export const EquipoHeroes = () => {

    const {heroesEquipo} = useSelector(state => state.equipo)
    console.log(heroesEquipo)

    return (
        <>  <div className="container">
                <div >
                    <h3 className="justify-text-center">Elige 6 Heroes para el equipo</h3>
                    <div className="row row-cols-1 row-cols-md-4 justify-content-center">
                        {
                            heroesEquipo.map( (heroe) => {
                                console.log(heroe)
                                return  <HeroCard 
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
