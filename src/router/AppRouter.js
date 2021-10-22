import React, { useEffect } from 'react';
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
    
    const dispatch = useDispatch();
    
    const {check} = useSelector(state => state.logueado);
    useEffect(() => {

            const secion = localStorage.getItem('token');
            if ( secion ) {
                dispatch( login( !!secion ) );
            } 
    
    }, [dispatch])

    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute 
                            path="/login"
                            component={ LoginScreen }
                            isAuthenticated={ check }                            
                        />
                             
                        <PrivateRoute 
                            exact
                            isAuthenticated={ check }
                            path="/"
                            component={ HomeScreen }
                        />
                        <Redirect to="/login" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
