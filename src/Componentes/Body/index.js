import React from 'react';
import './c-body-style.css';
// import Componentes
import CardT from './TCard-s1';
import { Container } from 'react-bootstrap';




export default () => {


    return (
        <section className="caixa-pai">
            <CardT dados={['teste1', 'teste2']}></CardT>
            <CardT dados={['teste4', 'teste5']}></CardT>
            <CardT dados={['teste4', 'teste5']}></CardT>
        </section >


    );
}


