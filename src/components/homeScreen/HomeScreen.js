import React from 'react';
import { ModalInfo } from '../modalInfo/ModalInfo';
import { SearchModal } from '../searchModal/SearchModal';
import { Buscador } from './Buscador';
import { EquipoHeroes } from './EquipoHeroes';
import { NavBar } from './NavBar';
import { PowerStats } from './PowerStats';

export const HomeScreen = () => {

    return (
        <div className="row">
            <NavBar />
            <SearchModal />
            <div className="col-1">
                <Buscador />

            </div>
            
            <div className=" col-6 ">
                    <EquipoHeroes className="col" />   
            </div>

            <div className="col-4">
                <h3> powerstats promedios del Equipo </h3>
                <PowerStats />
            </div>

            <ModalInfo />
        </div>
    )
}
