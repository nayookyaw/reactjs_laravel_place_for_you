import React from 'react';
import './App.css';

import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

import Nav from '../Nav/Nav';

class App extends React.Component {
  constructor () {
    super();
    this.state = 
      {
        color : "red"
      };
  }

  render () {

    return (
      <div>
        <Header/>
        <Nav/>
        <Footer/>
      </div>
      
    );  

  }
}

export default App