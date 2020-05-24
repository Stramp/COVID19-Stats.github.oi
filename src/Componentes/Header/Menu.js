import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'


export default () => {
    return (
        <Nav className="ml-md-auto">
            <Nav.Link href="#home">Painel</Nav.Link>
            <Nav.Link href="#link">Sobre</Nav.Link>
            <Nav.Link href="#link">Desenvolvedor</Nav.Link>
        </Nav>
    )
}