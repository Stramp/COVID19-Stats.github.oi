import React from 'react';
import './c-body-style.css';
// import Componentes
import CardT from './TCard-s1';
import CardB from './Cardb-s1';
import Lista from './List-s2';
import { Container, Row } from 'react-bootstrap';


export default (props) => {
    console.log("-[body]-", props.dados);

    const dataConvert = (et) => {
        const dataCase = new Date(et);
        return dataCase.toLocaleString();
    }
    const contCasos = () => {
        let casos = 0;
        props.dados.forEach((item, ind) => {
            console.log(item.cases)
            casos += parseInt(item.cases);

        })
        return casos;

    };

    const contMortes = () => {
        let mortes = 0;
        props.dados.forEach((item) => {
            console.log(item.deaths)
            mortes += parseInt(item.deaths);
        })
        return mortes;

    };
    const mortes = contMortes();
    const casos = contCasos();
    const dataAtualizacao = dataConvert(props.dados[0].datetime);






    return (
        <section>

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
                    <CardB dados={props.dados}></CardB>
                </Row>
            </Container>
            {/**  Fim Cards  */}

            {/**  Lista Estados  */}
            <Container >
                <Lista dataConvert={dataConvert} dados={props.dados} />
            </Container>
            {/** FIM Lista Estados  */}
        </section >
    );
}

