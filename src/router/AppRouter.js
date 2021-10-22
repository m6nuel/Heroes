import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { login } from '../actions/auth';
import { HomeScreen } from '../components/homeScreen/HomeScreen';
import { LoginScreen } from '../components/LoginScreen/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const {logueado} = useSelector(state => state.logueado)
    
    const [isOpen, setIsOpen] = useState(logueado)
    const dispatch = useDispatch();


    useEffect(() => {
        const secion = localStorage.getItem('token');
        if ( secion ) {
            dispatch( login( !!secion ) );
            setIsOpen( true )
        } else {
            setIsOpen(false)
            console.log('secion inactiva')
        }
    }, [dispatch, isOpen])


    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute 
                            path="/login"
                            component={ LoginScreen }
                            isAuthenticated={ isOpen }                            
                        />
                             
                        <PrivateRoute 
                            path="/"
                            exact
                            component={ HomeScreen }
                            isAuthenticated={ isOpen }
                        />
                        <Redirect to="/login" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
