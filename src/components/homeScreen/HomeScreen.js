import React from 'react';
import { SerachModal } from '../searchModal/SerachModal';
import { NavBar } from './NavBar';

export const HomeScreen = () => {


    return (
        <div>
            <NavBar />
            <SerachModal />

            <button className="btn btn-primary" > Buscar Heroes </button>
        </div>
    )
}
