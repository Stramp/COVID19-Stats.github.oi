

// import Componentes
import Header from './../../Componentes/Header';
import Body from './../../Componentes/Body';
import Footer from './../../Componentes/Footer';

import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap'



const Home = () => {
  const [load, setLoad] = useState(false);
  const [dados, setDados] = useState([]);


  const getDados = async () => {
    try {
      await axios.get('https://covid19-brazil-api.now.sh/api/report/v1')
        .then(async (et) => {
          setDados(et.data.data);

          setLoad(true);

        });
    } catch (e) {
      console.log('nada', e);
    }
  }



  useEffect(() => {
    getDados();

  }, [])


  return (
    <main >
      <Header />
      {load ? <Body dados={dados} /> : <Spinner animation="grow" />}
      <Footer />


    </main>
  );
}



export default Home;
