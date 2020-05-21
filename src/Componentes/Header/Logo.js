/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Navbar, Image } from 'react-bootstrap'

//const NavBar = new (RB.Navbar);
export default () => {
    return (

        <Navbar.Brand href="#home" className="slogan">
            <Image src="./assets/logo.png" alt="Logo" id="teste22" />
            <div className="divisor"></div>
            <h1>Saúde</h1>
        </Navbar.Brand>

    )
}