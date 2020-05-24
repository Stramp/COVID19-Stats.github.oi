import React from 'react';
import './c-body-style.css';
// import Componentes
import CardT from './TCard-s1';
import CardB from './Cardb-s1';
import { Container, Card, Table } from 'react-bootstrap';


export default (props) => {
    console.log("-[body]-", props.dados);

    function dataConvert(et) {
        const dataCase = new Date(et);
        return dataCase.toLocaleString();
    }







    return (
        <section>

            {/**  cabeçalho  */}
            < Container className="mw-100 pl-5 pr-5 mt-3" >
                <p className="m-0">COVID19</p>
                <h1 className="m-0"><b>Painel</b> Coronavírus</h1>
                <p className="m-0">Atualizado em:19/05/2020 19:20</p>
            </Container >
            {/**  fim cabeçalho  */}

            {/**  Cards  */}
            <Container className="mw-100 pl-5 pr-5 mt-4 mb-3 ml-0 mr-0">
                <div className="cards-group">
                    <CardT dados={['0', 'teste2']}></CardT>
                    <CardT dados={['0', 'teste5']}></CardT>
                    <CardB dados={['0', 'teste5']}></CardB>
                </div>
            </Container >
            {/**  Fim Cards  */}

            {/**  Lista Estados  */}
            <Container className="mw-100 pl-5 pr-5">
                <Card>
                    <Table responsive bordered hover>
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

                            {props.dados.map((item, ind) =>

                                < tr key={ind} >
                                    <td>{ind}</td>
                                    <td>{item.state}</td>
                                    <td>{item.cases}</td>
                                    <td>{item.deaths}</td>
                                    <td>{dataConvert(item.datetime)}</td>
                                </tr >

                            )}

                        </tbody>
                    </Table>
                </Card>
            </Container>
            {/** FIM Lista Estados  */}
        </section>
    );
}

