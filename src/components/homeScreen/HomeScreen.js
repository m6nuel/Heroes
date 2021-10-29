
import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modal';
import { ModalInfo } from '../modalInfo/ModalInfo';
import { SearchModal } from '../searchModal/SearchModal';
import { EquipoHeroes } from './EquipoHeroes';
import { NavBar } from './NavBar';

export const HomeScreen = () => {

    const dispatch = useDispatch();


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
            > Buscar Heroes </button>
            <div className=" col-6 ">
                <EquipoHeroes className="col-4" />

            </div>
            <div className="col-4">
                <h3> powerstats promedios del Equipo </h3>
            </div>

            <ModalInfo />
        </div>
    )
}
