import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../actions/modal';
import { startSearch } from '../../actions/search';
import { HeroCard } from '../heroCard/HeroCard';
import 'animate.css';

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

export const SearchModal = () => {

    const dispatch = useDispatch();

    const {openModal} = useSelector(state => state.modal);

    const {heroes} = useSelector(state => state.search);

    const closeeModal = () =>{
        dispatch( closeModal() );
    }


    return (
        <Modal
            isOpen={ openModal }
            onRequestClose={ closeeModal }
            style={customStyles}
            closeTimeoutMS={ 200 }
            className="modal bg-dark justify-content-center"
            overlayClassName="modal-fondo"
        >
            <Formik
                initialValues={{
                    heroe:''
                }}
                validate={ (values) => {
                    const errors = {};
                    if ( !values.heroe ) {
                        errors.heroe = 'Ingrese el heroe a buscar'
                    } else if( values.heroe ){
                    }
                    return errors;
                }}
                onSubmit={( {heroe} )=>{
                    dispatch( startSearch( heroe ) );
                }}
            >
                {()=> (
                    <div>
                        <Form>
                            <div className="container form-group input-group mb-3 g-4">
                                <button type="submit" className="input-group-text btn btn-primary"> Buscar Heroes </button>
                            <Field 
                                type="text" 
                                className="form-control"
                                placeholder="Buscar Heroe"
                                name="heroe"
                                autoComplete="off"
                            />
                            </div>
                                <ErrorMessage
                                    className="alert alert-danger"
                                    name="heroe"
                                    component="div"
                                />
                        </Form>
                            
                            
                    </div>
                )}
            </Formik>
            <div className="row row-cols-1 row-cols-md-4 justify-content-center animate__animated animate__pulse">
                {
                    heroes.map( (heroe) => {
                        return  <HeroCard 
                                    key={ heroe.id }
                                    {...heroe}
                                />
                    })
                }
            </div>
        </Modal>
    )
}
