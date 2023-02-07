import React , {useState , useEffect} from 'react';
import axios from 'axios';

const Cities =()=> {
  const[city , setCity] = useState({});
  useEffect(async()=>{
                                           
    const response =await axios.get('https://api.codebazan.ir/weather/?city=%D8%B3%D8%A7%D8%B1%DB%8C')
    let newCity = response.data.city;
    console.log(response.data);
    setCity(newCity);
  },[])
    return (
      <>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top"
              alt="Hollywood Sign on The Hill" />
            <div className="card-body">
              <h5 className="card-title">{city.name}</h5>
              <p className="card-text">
               country : {city.country}
              </p>
              <p className="card-text">
                sunrise : {city.sunrise}
              </p>
              <p className="card-text">
                sunset : {city.sunset}
              </p>
              <p className="card-text">
                timezone : {city.timezone}
              </p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  
}
 
export default Cities;