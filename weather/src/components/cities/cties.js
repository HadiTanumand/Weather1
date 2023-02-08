import React, { useState, useEffect } from "react";
import axios from "axios";

const Cities = (props) => {
  const [city, setCity] = useState({});
  const [list, setList] = useState();
  const [erorr, setErorr] = useState(false);
  useEffect(async () => {

      const response = await axios.get(
        `https://api.codebazan.ir/weather/?city=${props.cityName}`
      );
      if(response.data.Result==="The city or country is wrong"){
        setErorr(true)
      }else{
        let newCity = response.data.city;
        let newList = response.data.list;
        setCity(newCity);
        setList(newList[39].dt_txt);
       
      }
     
     
   
  }, []);
  return (
    <>
    {erorr ? <h1 className="bg-danger p-3 ">City Name Is Wrong MyFriend </h1> : 
      <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
            className="card-img-top"
            alt="Hollywood Sign on The Hill"
          />
          <div className="card-body">
            <h5 className="card-title">{city.name}</h5>
            <p className="card-text ">
              country : {city.country}
              <span className="bg-primary p-2"> Last Update: {list}</span>
            </p>
            <p className="card-text">sunrise : {city.sunrise}</p>
            <p className="card-text">sunset : {city.sunset}</p>
            <p className="card-text">timezone : {city.timezone}</p>
          </div>
        </div>
      </div>
    </div>}
    
    </>
  );
};

export default Cities;
