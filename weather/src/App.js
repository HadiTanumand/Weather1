import React, { Component } from 'react';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Cities from './components/cities/cties';
import Nav from './components/navbar/nav';
import Search from './components/search/search';


const App =()=> {
 
    return (
     
       <>
        <BrowserRouter>
        <Nav />
        <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/TopCities' element={<Search />} />
        </Routes>   
        </BrowserRouter>
       
       </> 
   
    );
  }

 
export default App;