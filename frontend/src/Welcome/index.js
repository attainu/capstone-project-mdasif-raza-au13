import { logDOM } from '@testing-library/react';
import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.png'
import './Welcome.css';



function Welcome() {
    return (
        <>
        <div>
            <p> Welcome to <h3 style={{color: "tomato"}}></h3></p>
            <img className="logo" src={logo} alt="Logo"/>

           
        </div>
        <h3> </h3> <li > <Link to={'/home'} className="nav_link" style={{ color: "black", fontSize: "large" }}> -----START-----  </Link></li>

        </>
    )
}

export default Welcome
