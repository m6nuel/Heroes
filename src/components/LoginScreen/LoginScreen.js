import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';


export const LoginScreen = () => {

    const dispatch = useDispatch();

    return (
        <>
            <Formik
                initialValues = {{
                    email: '',
                    password: ''
                }}
                validate={(values)=>{
                    let errors = {};
                    
                    if ( !values.email ) {
                        errors.email = 'Email Requerido';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    if ( !values.password ) {
                        errors.password = 'contraseña Requerida';
                    } else if (!/[A-Za-z\d$@$!%*?&]{4,6}/i.test(values.password)) {
                        errors.password = 'La clave debe ser tener mas de 4 caracteres';
                    }

                    return errors;
                }}
                onSubmit={({ email,password }) => {  
                }}
            >
                {( { errors } ) => (
                    <div className="modal-dialog text-center">
                        <div className="col-sm-8 main-seccion ">
                            <div className="modal-content shadow-lg p-3 mb-5 bg-body rounded">
                                <div className="col-12 shadow-sm p-1 mb-1 bg-body rounded">
                                    <h2 className="shadow-sm p-3 mb-1 bg-dark text-primary rounded"> Ingresar </h2>
                                </div>
                                <Form 
                                    className="col-12"
                                >
                                    <div className="form-group m-4">
                                        <Field 
                                            type="email" 
                                            className="form-control shadow-lg p-2 mb-0 bg-body rounded" 
                                            placeholder="Email" 
                                            name="email"
                                        />

                                        <ErrorMessage name="email" component={() =>(
                                            <div className="text-start text-danger" > {errors.email} </div>)
                                        } 
                                        />

                                    </div>
                                    
                                    <div className="form-group m-4">
                                        <Field 
                                            type="password" 
                                            className="form-control shadow-lg p-2 mt-5 mb-0 bg-body rounded" 
                                            placeholder="Contraseña" 
                                            name="password"
                                        />
                                        
                                        <ErrorMessage name="password" component={() =>(
                                            <div className="text-start text-danger" > {errors.password} </div>)
                                        } 
                                        />
                                        
                                    </div>
                                    
                                    <div className="form-group m-4">
                                        <button type="submit" className="btn btn-primary mt-5 shadow-p-3 rounded col-8" > Ingresar </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    )
}
