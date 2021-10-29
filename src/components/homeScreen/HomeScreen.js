
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../actions/modal';
import { ModalInfo } from '../modalInfo/ModalInfo';
import { SearchModal } from '../searchModal/SearchModal';
import { EquipoHeroes } from './EquipoHeroes';
import { NavBar } from './NavBar';
import { PowerStats } from './PowerStats';

export const HomeScreen = () => {

    const dispatch = useDispatch();

    const {heroesEquipo} = useSelector(state => state.equipo)
    console.log(heroesEquipo.length)

    const handleModal = () => {
        dispatch( openModal() );
    }

    return (
        <div className="row">
            <NavBar />
            <SearchModal />

            <button 
                className="btn btn-primary col-1" 
                onClick={ handleModal }
            >
                Buscar Heroes 
            </button>
            
            <div className=" col-6 ">

                {
                    ( heroesEquipo.length <= 6 ) 
                    ? 
                    <EquipoHeroes className="col" />
                    :
                    alert( 'Solo son 6 heroes' )
                }

            </div>
            <div className="col-3">
                <h3> powerstats promedios del Equipo </h3>
                <PowerStats />
            </div>

            <ModalInfo />
        </div>
    )
}
