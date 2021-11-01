import React from 'react';
import { ModalInfo } from '../modalInfo/ModalInfo';
import { SearchModal } from '../searchModal/SearchModal';
import { EquipoHeroes } from './EquipoHeroes';
import { NavBar } from './NavBar';
import { PowerStats } from './PowerStats';

export const HomeScreen = () => {

    return (
        <div className="container-fluid row">
            <NavBar />
            <SearchModal />
            
            <div className="col-8">
                    <EquipoHeroes />   
            </div>

            <div className="col-4">
                <PowerStats />
            </div>

            <ModalInfo />
        </div>
    )
}
