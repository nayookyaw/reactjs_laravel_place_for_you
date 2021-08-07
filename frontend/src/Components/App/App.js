import React from 'react';
import './App.css';

import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Sidebar from '../Shared/Sidebar';

class App extends React.Component {
  constructor () {
    super();
    this.state = 
      {
        test : "test"
      };
  }

  render () {

    return (
      <div>
        <Header/>
        <Sidebar/>
        
        {/* <Nav/> */}
        <Footer/>
      </div>
      
    );  

  }
}

export default App