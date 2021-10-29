
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
        <div>
            <NavBar />
            <SearchModal />

            <button 
                className="btn btn-primary" 
                onClick={ handleModal }
            > Buscar Heroes </button>
            <div className=" col-8 ">
                <EquipoHeroes className="col-8" />

            </div>
            <div className="col-4">

            </div>

            <ModalInfo />
        </div>
    )
}
