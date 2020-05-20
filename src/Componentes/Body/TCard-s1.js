/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card } from 'react-bootstrap'

//const NavBar = new (RB.Navbar);
export default ({ dados }) => {
    console.log(dados)
    return (
        <Card>{dados[0]}</Card>


    )
}