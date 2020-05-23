import React from 'react';
import './../Header/c-header-style.css';
// import Componentes
import Logo from './../Header/Logo';
import Menu from './../Header/Menu';
import { Navbar } from 'react-bootstrap'



export default () => {


    return (
        <header>
            <Navbar expand="lg" className="navcont">
                <Logo />
                <Menu />
            </Navbar>
        </header>


    );
}


