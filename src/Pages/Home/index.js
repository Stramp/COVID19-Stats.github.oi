

// import Componentes
import Header from './../../Componentes/Header';
import Body from './../../Componentes/Body';
import Footer from './../../Componentes/Footer';
import './p-home-style.css'
import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap'



const Home = () => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);


  const getDados = async () => {
    try {
      const respostaData = await axios.get('https://covid19-brazil-api.now.sh/api/report/v1');
      setData(respostaData.data);
      setLoad(false);
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
      {load ? <Spinner animation="grow" /> : <Body data={data.data} />}
      <Footer />


    </main>
  );
}



export default Home;
