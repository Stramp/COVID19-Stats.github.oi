import React from 'react';
import './../Footer/c-footer-style.css';
// import Componentes
import Logo from './../Header/Logo';
import { Navbar } from 'react-bootstrap'



export default () => {


    return (
        <footer>
            <Navbar expand="lg" className="navcont">
                <Logo />

            </Navbar>
        </footer>


    );
}


