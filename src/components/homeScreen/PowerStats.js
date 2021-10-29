import React from 'react'
import { useSelector } from 'react-redux'

export const PowerStats = () => {

    const heroe = useSelector(state => state.equipo.heroesEquipo);

    const intelligence = heroe.map( x => x.powerstats.intelligence )
    const intel = intelligence.map( x => Number(x) )
    const sumaIntelligence = intel.reduceRight( (acc,el) => acc + el, 0 );

    const strength = heroe.map( x => x.powerstats.strength )
    const stren = strength.map( x => Number(x) )
    const sumaStreng = stren.reduceRight( (acc,el) => acc + el, 0 );
    
    const speed = heroe.map( x => x.powerstats.speed )
    const sp = speed.map( x => Number(x) )
    const sumaSpeed = sp.reduceRight( (acc,el) => acc + el, 0 );

    const durability = heroe.map( x => x.powerstats.durability )
    const dura = durability.map( x => Number(x) )
    const sumaDurab = dura.reduceRight( (acc,el) => acc + el, 0 );

    const power = heroe.map( x => x.powerstats.power )
    const pow = power.map( x => Number(x) )
    const sumaPower = pow.reduceRight( (acc,el) => acc + el, 0 );

    const combat = heroe.map( x => x.powerstats.combat )
    const comb = combat.map( x => Number(x) )
    const sumaCombat = comb.reduceRight( (acc,el) => acc + el, 0 );


    return (
        <>
            <div className="col-md-12 m-5">
                <div className="powerStats">Intelligence:  { sumaIntelligence/heroe.length } </div>
                <div className="card-text"> Strength:      { sumaStreng/heroe.length } </div>
                <div className="card-text"> Speed:         { sumaSpeed/heroe.length } </div>
                <div className="card-text"> Durability:    { sumaDurab/heroe.length } </div>
                <div className="card-text"> Power:         { sumaPower/heroe.length } </div>
                <div className="card-text"> Combat:        { sumaCombat/heroe.length } </div>
            </div>
        </>
    )
}
