import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './requests';

function App() {

  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <Row title={'Netplix Originals'} request={requests.fetchNetflixOriginals} background={'poster'}/>
        <Row title={'Trending'} request={requests.fetchTrending}/>
        <Row title={'Top Rated'} request={requests.fetchTopRated}/>
        <Row title={'Action'} request={requests.fetchAction}/>
        <Row title={'Comedy'} request={requests.fetchComedy}/>
        <Row title={'Romance'} request={requests.fetchRomance}/>
        <Row title={'Horror'} request={requests.fetchHorror}/>
    </div>
  );
}

export default App;
