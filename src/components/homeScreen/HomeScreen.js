<<<<<<< HEAD

import React from 'react';
import { getHeroes } from '../../axios/axios';
=======
import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modal';
import { ModalInfo } from '../modalInfo/ModalInfo';
import { SearchModal } from '../searchModal/SearchModal';
import { EquipoHeroes } from './EquipoHeroes';
>>>>>>> rama3
import { NavBar } from './NavBar';

export const HomeScreen = () => {
    // url= 'http://superheroapi.com/api.php/10227697953733690/${id}'



<<<<<<< HEAD
getHeroes('spider').then( heroe => console.log(heroe))


    return (
        <>
            <NavBar />

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col">
                            2 of 3
                        </div>
                        <div className="col">
                            3 of 3
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col">
                            2 of 3
                        </div>
                        <div className="col">
                            3 of 3
                        </div>
                    </div>
                </div>
            </div>
        </>
=======
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
>>>>>>> rama3
    )
}
