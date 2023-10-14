import './App.css';
import './css/boostrap.css'
import Header from './components/Header'
import Catog from './components/Catog';
import React from 'react';
import Banner from './components/Banner';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row head'>
       <Header/>
       
      </div>
      <Catog/>
      <Banner/>
      <Searchbar/>

    </div>
    </>
  );
}

export default App;