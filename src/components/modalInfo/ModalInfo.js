import React from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux';
import { closeModalInfo } from '../../actions/modal';

const customStyles = {
    content: {
        color: 'black',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
    },
};
Modal.setAppElement('#root');


export const ModalInfo = () => {
    
    const {modalInfo} = useSelector(state => state.modalInfo);
        
    const heroeDetalle = localStorage.getItem( 'heroeDetalle' )
    const dataHero = JSON.parse(heroeDetalle)

    const dispatch = useDispatch();

    const closeeModalInfo = () => {
        dispatch( closeModalInfo() )
    }

    return (
        <>
            <Modal
                isOpen={ modalInfo }
                onRequestClose={ closeeModalInfo }
                style={customStyles}
                closeTimeoutMS={ 200 }
                className="modal-info bg-ligth"
                overlayClassName="modal-fondo"
            >
                {
                    (dataHero) &&
                        <div className="row g-0">
                            <h1>Informacion del Heroe</h1>
                            <div className="col-md-6">
                                <img src={ dataHero.image.url } className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <p className="card-text">Nombre:           { dataHero.name } </p>
                                    <p className="card-text">Peso:             { dataHero.appearance.weight[1] }</p>
                                    <p className="card-text">Altura:           { dataHero.appearance.height[1] }  </p>
                                    <p className="card-text">Alias:            { dataHero.biography.aliases[0] }</p>
                                    <p className="card-text">Lugar de Trabajo: { dataHero.work.occupation }</p>
                                </div>
                            </div>
                        </div>
                }
            </Modal>
        </>
    )
}
// 
// { dataHero.height }
// 
// { dataHero. }
// { dataHero. }
// { dataHero. }