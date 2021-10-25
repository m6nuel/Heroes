
import React from 'react';
import { getHeroes } from '../../axios/axios';
import { NavBar } from './NavBar';

export const HomeScreen = () => {
    // url= 'http://superheroapi.com/api.php/10227697953733690/${id}'



getHeroes('spider').then( heroe => console.log(heroe))


    return (
        <>
            <NavBar />

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col">
                            2 of 3
                        </div>
                        <div className="col">
                            3 of 3
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col">
                            2 of 3
                        </div>
                        <div className="col">
                            3 of 3
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
