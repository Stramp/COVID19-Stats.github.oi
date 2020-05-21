/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap'
import './c-body-style.css'

//const NavBar = new (RB.Navbar);
export default ({ dados }) => {

    return (
        <Card className="caixa">
            <Container className="m-0">
                <Row>
                    <Col>
                        <Container className="m-0">
                            <Row><h3>Teste texto</h3></Row>
                            <Row>
                                <Col><h4>0</h4><p>56.321</p></Col>
                                <Col><h4>0</h4><p>56.321</p></Col>
                                <Col><h4>0</h4><p>56.321</p></Col>
                            </Row>
                            <Row>
                                <Col><h4>0</h4><p>56.321</p></Col>
                                <Col><h4>0</h4><p>56.321</p></Col>
                                <Col><h4>0</h4><p>56.321</p></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Card >


    )
}