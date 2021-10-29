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
                className="modal-info bg-dark"
                overlayClassName="modal-fondo"
            >
                <div className="row" >
                    <div className="col-6">
                    </div>
                    <div className="col-6">
                        <h1>Modal Info</h1>
                        <h1>Modal Info</h1>
                        <h1>Modal Info</h1>
                    </div>
                </div>
            </Modal>
        </>
    )
}
