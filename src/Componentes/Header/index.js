import React from 'react';
import './c-header-style.css';
// import Componentes
import Logo from './Logo';
import Menu from './Menu';
import { Navbar } from 'react-bootstrap'



export default () => {


    return (
        <header>
            <Navbar className="teste2">
                <Logo />
                <Menu />
            </Navbar>
        </header>


    );
}


