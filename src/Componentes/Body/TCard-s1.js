/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import './c-body-style.css'

//const NavBar = new (RB.Navbar);
export default ({ dados }) => {
    console.log(dados)
    return (
        <Card id="TCard" style={{ width: '45%', justifyContent: 'space-around', textAlign: 'center', borderRadius: '0.5rem', margin: '1rem' }}>
            <h1>Painel</h1>
            <Card.Subtitle className="text-muted m-0 p-0">{dados[2]}</Card.Subtitle>
            <Row className="m-0 p-0">
                <Col id="dadosPainel2" style={{ background: 'rgb(31,187,135)', marginLeft: '0.5rem', marginRight: '0.5rem', borderRadius: '0.5rem', height: '100%' }}>
                    <Card.Title className="count" style={{ fontSize: '3rem', fontWeight: '700', margin: '0' }}>{dados[0]}</Card.Title>
                    <Card.Subtitle className="text-muted mb-2">Casos</Card.Subtitle>
                </Col>
                <Col className="dadosPainel" style={{ background: 'rgb(255, 0, 0,0.9)', marginLeft: '0.5rem', marginRight: '0.5rem', borderRadius: '0.5rem', height: '100%' }}>
                    <Card.Title className="count" style={{ fontSize: '3rem', fontWeight: '700', margin: '0' }}>{dados[1]}</Card.Title>
                    <Card.Subtitle className="text-muted mb-2">Mortes</Card.Subtitle>
                </Col>
            </Row>

        </Card >
    )
}