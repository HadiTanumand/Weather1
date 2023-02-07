import React, { Component } from 'react';
import Cities from './components/cities/cties';
import Nav from './components/navbar/nav';

class App extends Component {
 
  render() { 
    return (
      <>
      <Nav />
      <Cities />
      </>
    );
  }
}
 
export default App;