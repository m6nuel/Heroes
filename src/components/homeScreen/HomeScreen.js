import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modal';
import { SerachModal } from '../searchModal/SerachModal';
import { NavBar } from './NavBar';

export const HomeScreen = () => {

    const dispatch = useDispatch();


    const handleModal = () => {
        dispatch( openModal() );
    }


    return (
        <div>
            <NavBar />
            <SerachModal />

            <button 
                className="btn btn-primary" 
                onClick={ handleModal }
            > Buscar Heroes </button>
        </div>
    )
}
