import { Field, Form, Formik } from 'formik';
import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../actions/modal';

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
    const dispatch = useDispatch();

    const {openModal} = useSelector(state => state.modal)

    const closeeModal = () =>{
        dispatch( closeModal() );
    }


    return (
        <Modal
            isOpen={ openModal }
            onRequestClose={ closeeModal }
            style={customStyles}
            closeTimeoutMS={ 200 }
            className="modal bg-dark"
            overlayClassName="modal-fondo"
        >
            <Formik
                initialValues={{
                    heroe:''
                }}
                onSubmit={( heroe )=>{
                    console.log( heroe )
                }}
            >
                {()=> (
                    <div>
                        <Form>
                            <div className="form-group input-group mb-3">
                                <button type="submit" className="input-group-text btn btn-primary"> Buscar Heroes </button>
                            <Field 
                                type="text" 
                                className="form-control"
                                placeholder="Buscar Heroe"
                                name="heroe"
                                autoComplete="off"
                            />
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </Modal>
    )
}
