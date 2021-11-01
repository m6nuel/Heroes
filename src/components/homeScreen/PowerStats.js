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
            <div className="col-8 mt-4 animate__animated animate__backInDown">
                <ul className="list-group list-group-flush ">
                    <li className="list-group-item list-group list-group-item-action m-1 list-group-item-primary text-center"> Estadisticas de Poder </li>
                    <li className="list-group-item list-group list-group-item-action m-1 list-group-item-primary"> Inteligencia: { (sumaIntelligence/heroe.length).toFixed(2)} </li>
                    <li className="list-group-item list-group list-group-item-action m-1 list-group-item-primary"> Inteligencia: { (sumaIntelligence/heroe.length).toFixed(2)} </li>
                    <li className="list-group-item list-group list-group-item-action m-1 list-group-item-primary"> Fuerza      : { (sumaStreng/heroe.length).toFixed(2) } </li>
                    <li className="list-group-item list-group list-group-item-action m-1 list-group-item-primary"> Velocidad   : { (sumaSpeed/heroe.length).toFixed(2) } </li>
                    <li className="list-group-item list-group list-group-item-action m-1 list-group-item-primary"> Durabilidad : { (sumaDurab/heroe.length).toFixed(2) } </li>
                    <li className="list-group-item list-group list-group-item-action m-1 list-group-item-primary"> Poder       : { (sumaPower/heroe.length).toFixed(2) } </li>
                    <li className="list-group-item list-group list-group-item-action m-1 list-group-item-primary"> Combate     : { (sumaCombat/heroe.length).toFixed(2) } </li>
                </ul>
            </div>
        </>
    )
}
