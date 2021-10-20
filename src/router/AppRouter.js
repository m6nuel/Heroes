import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { HomeScreen } from '../components/homeScreen/HomeScreen';
import { LoginScreen } from '../components/LoginScreen/LoginScreen';

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route 
                            path="/login"
                            component={ LoginScreen }
                        />
                             
                        <Route 
                            path="/"
                            exact
                            component={ HomeScreen }
                        />
                        <Redirect to="/login" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
