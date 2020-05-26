/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Navbar, Image } from 'react-bootstrap'

//const NavBar = new (RB.Navbar);
export default () => {
    return (
        <>
            <Navbar.Brand href="#home">

                <Image className="logo" src="./assets/logo.png" alt="Logo" />

            </Navbar.Brand>
            <h1 >Saúde</h1>
        </>
    )
}