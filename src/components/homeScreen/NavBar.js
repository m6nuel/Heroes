import React from 'react'
import { useDispatch } from 'react-redux';
import { stratLogout } from '../../actions/auth';

export const NavBar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {

        dispatch( stratLogout() );
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand" href="#">Heroes App</span>
                        <button className="btn btn-danger text-end" onClick={ handleLogout }> Salir </button>
                </div>
            </nav>
        </>
    )
}
