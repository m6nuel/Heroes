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
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');


export const ModalInfo = () => {
    
    const {modalInfo} = useSelector(state => state.modalInfo)
    
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
                <h1>Modal Info</h1>
                <h1>Modal Info</h1>
                <h1>Modal Info</h1>
                <h1>Modal Info</h1>
                <h1>Modal Info</h1>
            </Modal>
        </>
    )
}
