import React from 'react';
import './c-body-style.css';
// import Componentes
import CardT from './TCard-s1';
import CardB from './Cardb-s1';
import Lista from './List-s2';
import { Container, Row } from 'react-bootstrap';


export default ({ data }) => {
    console.log("-[body]-", data);

    const dataConvert = (et) => {
        const dataCase = new Date(et);
        return dataCase.toLocaleString();
    }

    const mortes = data.reduce((accumulator, currentElem) => accumulator + parseInt(currentElem.deaths), 0);
    const casos = data.reduce((accumulator, currentElem) => accumulator + parseInt(currentElem.cases), 0);
    const dataAtualizacao = dataConvert(data[0].datetime);






    return (
        <section className="box">

            {/**  cabeçalho  */}
            <Container id="cabec" className="pt-3">
                <Row className="pt-0">COVID19</Row>
                <Row className="pt-0"><h1><b>Painel</b> Coronavírus</h1></Row>
                <Row className="pt-0"><p>{dataAtualizacao}</p></Row>
            </Container>
            {/**  fim cabeçalho  */}

            {/**  Cards  */}
            <Container>
                <Row style={{ justifyContent: 'center' }}>
                    <CardT dados={[casos, mortes, dataAtualizacao]}></CardT>
                    <CardB dados={data}></CardB>
                </Row>
            </Container>
            {/**  Fim Cards  */}

            {/**  Lista Estados  */}
            <Container >
                <Lista dataConvert={dataConvert} dados={data} />
            </Container>
            {/** FIM Lista Estados  */}
        </section >
    );
}

