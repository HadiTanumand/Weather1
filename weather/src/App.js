import React, { useState } from 'react';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Cities from './components/cities/cties';
import Nav from './components/navbar/nav';
import Search from './components/search/search';


const App =()=> {
  const [showCity , setShowCity] = useState(false);
  const [cityName , setCityName] = useState(null);
  const goSearch = (cityName)=>{
    if(cityName!==''){
      setShowCity(true);
      setCityName(cityName);
    }else{
      alert('please write the name of city')
    }

  }

    return (
     
       <>
        <BrowserRouter>
        <Nav />
        {showCity?<Cities cityName ={cityName} /> : <></> }
        <Routes>
        {showCity? <></>: <Route path='/' element={<Search goSearch={goSearch} />} /> }
        <Route path='/TopCities' element={<Search />} />
        </Routes>   
        </BrowserRouter>
       
       </> 
   
    );
  }

 
export default App;