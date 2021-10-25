import React from 'react'
import Modal from 'react-modal';

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

export const SerachModal = () => {

    const closeModal = () =>{

    }


    return (
        <Modal
            isOpen={true}
            // onAfterOpen={afterOpenModal}
            onRequestClose={ closeModal }
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h1>Modal</h1>
            <hr/>
            <h2>Hola Modal</h2>
        </Modal>
    )
}
