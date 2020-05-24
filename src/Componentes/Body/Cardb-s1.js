/* eslint-disable jsx-a11y/anchor-is-valid */
import './c-body-style.css'



import React, { useState } from 'react';
import { Card, Col, Row, Form, Button, Container, Table } from 'react-bootstrap'



export default () => {



    const [cidade, setCidade] = useState('');
    const [casos, setCasos] = useState('');
    const [mortes, setMortes] = useState('');
    const [dateup, setDateup] = useState('');

    function ouvidor(e) {
        console.log(e)
    }


    return (
        <Card>
            <Container>
                <Row>
                    <Col><Form.Label>Pesquise por sua cidade</Form.Label></Col>
                </Row>
                <Row>
                    <Col><Form.Control
                        type="email"
                        placeholder="Digite aqui o nome de sua cidade"
                        value={cidade}
                        onChange={e => setCidade(e.target.value)} />
                    </Col>
                    <Col md={3.5}><Button
                        variant="primary"
                        onClick={e => ouvidor(e.target.value)}>Buscar</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <td>{(cidade === "") ? "Cidade" : cidade}</td>
                                    <td>{(casos === "") ? "Casos" : casos}</td>
                                    <td>{(mortes === "") ? "Mortes" : mortes}</td>
                                    <td>{(dateup === "") ? "update" : dateup}:</td>
                                </tr>
                            </thead>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </Card >
    )
}