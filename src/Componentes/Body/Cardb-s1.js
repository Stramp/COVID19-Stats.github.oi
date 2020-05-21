/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card, Col, Row, Form, Button, Container } from 'react-bootstrap'
import './c-body-style.css'

//const NavBar = new (RB.Navbar);
export default () => {

    return (
        <Card className="caixa">

            <Container>
                <Row>
                    <Col><Form.Label>Email address</Form.Label></Col>
                </Row>
                <Row>
                    <Col><Form.Control type="email" placeholder="Enter email" /></Col>

                    <Col md={3.5}><Button variant="primary" type="submit">Submit</Button></Col>
                </Row>
                <Row>
                    <Col><Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text></Col>
                </Row>
            </Container>

        </Card >


    )
}