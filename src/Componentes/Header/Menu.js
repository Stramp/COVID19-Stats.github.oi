import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'


export default () => {
    return (
        <Navbar className="menu">
            <Nav>
                <Nav.Link href="#home">Painel</Nav.Link>
                <Nav.Link href="#link">Sobre</Nav.Link>
                <Nav.Link href="#link">Desenvolvedor</Nav.Link>
            </Nav>
        </Navbar>
    )
}