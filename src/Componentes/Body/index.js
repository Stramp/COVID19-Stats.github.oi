import React from 'react';
import './c-body-style.css';
// import Componentes
import CardT from './TCard-s1';
import { Container, Card, Table, Form, Button } from 'react-bootstrap';




export default (props) => {


    return (
        <section>
            <Container className="mw-100 pl-5 pr-5 mt-3">
                <p className="m-0">COVID19</p>
                <h1 className="m-0"><b>Painel</b> Coronavírus</h1>
                <p className="m-0">Atualizado em:19/05/2020 19:20</p>
            </Container>




            <Container className="mw-100 pl-5 pr-5 mt-4 mb-3 ml-0 mr-0">
                <div className="teste">

                    <CardT dados={['0', 'teste2']}></CardT>


                    <CardT dados={['0', 'teste5']}></CardT>


                    <CardT dados={['0', 'teste5']}></CardT>

                </div>
            </Container >


            <Container className="mw-100 pl-5 pr-5">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>



            <Container className="mw-100 pl-5 pr-5">
                <Card>

                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Estado</th>
                                <th>Casos</th>
                                <th>Mortes</th>
                                <th>Atualizado:</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Ind</td>
                                <td>varEstado</td>
                                <td>varCasos</td>
                                <td>varMortes</td>
                                <td>dd/mm/aaaa</td>


                            </tr>

                        </tbody>
                    </Table>

                </Card>
            </Container>
        </section>


    );
}


