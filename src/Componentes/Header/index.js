import React from 'react';
import './c-header-style.css';
// import Componentes
import Logo from './Logo';
import Menu from './Menu';
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


