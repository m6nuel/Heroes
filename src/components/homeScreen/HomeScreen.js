import React from 'react'
import { useDispatch } from 'react-redux'
import { stratLogout } from '../../actions/auth';

export const HomeScreen = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {

        dispatch( stratLogout() );
    }

    return (
        <div>
            <h1>HomeScreen</h1>
            <button className="btn btn-danger" onClick={ handleLogout }> Salir </button>
        </div>
    )
}
