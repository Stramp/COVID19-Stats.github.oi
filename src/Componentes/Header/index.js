import React from 'react';
import './c-header-style.css';
// import Componentes
import Logo from './Logo';
import { Navbar, Container } from 'react-bootstrap'



export default () => {

    return (
        <header>
            <Container>
                <Navbar className="menu p-0">
                    <Logo />

                </Navbar>
            </Container>
        </header>


    );
}


