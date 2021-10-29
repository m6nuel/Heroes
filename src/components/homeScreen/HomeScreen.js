
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
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

            {
                (heroesEquipo.length <= 6 ) 
                ?
                    <button 
                        className="btn btn-primary col-1" 
                        onClick={ handleModal }
                    >
                        Buscar Heroes 
                    </button>
                :
                Swal.fire('Solo son 6 Heroes por equipo')

            }

            
            <div className=" col-6 ">
                    <EquipoHeroes className="col" />   
            </div>

            <div className="col-3">
                <h3> powerstats promedios del Equipo </h3>
                <PowerStats />
            </div>

            <ModalInfo />
        </div>
    )
}
