/* eslint-disable jsx-a11y/anchor-is-valid */
import './c-body-style.css'



import React, { useState } from 'react';
import { Card, Col, Row, Form, Button, Table } from 'react-bootstrap'



export default (props) => {



    const [estado, setEstado] = useState('');
    const [casos, setCasos] = useState('');
    const [mortes, setMortes] = useState('');
    const [dateup, setDateup] = useState('');

    const dataConvert = (et) => {
        const dataCase = new Date(et);
        return dataCase.toLocaleDateString();
    }
    function capitalize(s) {
        return s[0].toUpperCase() + s.slice(1);
    }
    function ouvidorClick(e) {
        pesquisaEstado(estado);
    }

    function pesquisaEstado(c) {
        props.dados.forEach((item) => {
            if (String(item.state).toLowerCase() === c.toLowerCase()) {
                setCasos(item.cases);
                setMortes(item.deaths);
                setDateup(dataConvert(item.datetime));
            }
        })

    }


    return (
        <Card id="BCard" style={{ width: '45%', justifyContent: 'center', textAlign: 'center', borderRadius: '0.5rem', margin: '1rem' }}>

            <Row>
                <Col><Form.Label className="mt-2"><h4>Pesquise por seu estado</h4></Form.Label></Col>
            </Row>
            <Row style={{ justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                <Form.Control className="input" style={{ width: '70%', margin: '5px' }}
                    type="busca"
                    placeholder="Digite aqui o nome de sua estado"
                    value={estado}
                    onChange={e => setEstado(e.target.value)} />

                <Button id="botao" style={{ color: '#000', width: '20%', textAlign: 'center', verticalAlign: 'unset', background: 'rgb(243, 201, 44,0.9)', borderColor: 'rgb(243, 201, 44,0.9)' }}
                    variant="primary"
                    onClick={e => ouvidorClick(e.target)}>Buscar</Button>

            </Row>
            <Row>
                <Col>
                    <Table className="tabelaCard" striped hover style={{ margin: '10px', width: '-webkit-fill-available' }}>
                        <thead>
                            <tr id="tit" style={{ fontSize: 'small' }}>
                                <th>Estado</th>
                                <th>Casos</th>
                                <th>Mortes</th>
                                <th style={{ textAlign: 'end' }}>Atualizado:</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <td>{(estado === "") ? "estado" : capitalize(estado)}</td>
                                <td>{(estado === "") ? "Casos" : casos}</td>
                                <td>{(estado === "") ? "Mortes" : mortes}</td>
                                <td style={{ textAlign: 'end' }}>{(estado === "") ? "updated" : dateup}</td>
                            </tr>
                        </thead>
                    </Table>
                </Col>
            </Row>

        </Card >
    )
}