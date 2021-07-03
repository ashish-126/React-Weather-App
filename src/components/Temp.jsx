import React, { useEffect, useState } from 'react';

const Temp = ()=> {
    
    const [cityData, setCityData] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(()=>{
        const fetchApi = async()=>{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c50e5ced20f429cfd9d441769d6cbe2d`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setCityData(data.main);
            
        };
        fetchApi();
    },[search]);

    return (
    <>
        <div className="box">
            <div className = "inputData">
                <input 
                    type="search"
                    className = "inputfield"
                    onChange={(event)=>setSearch(event.target.value)}
                    value={search}
                />
            </div>

            {!cityData ? (<p> No Data Found </p>): (
                <div>
                <div className="info">
                <h2 className="location">
                    <i className="fas fa-street-view"></i>{search}
                </h2>
                <h1 className="temp">{cityData.temp} <sup>o</sup>Cel</h1>
                <h3 className="tempmin_max"> Min : {cityData.temp_min} <sup>o</sup>Cel | Max : {cityData.temp_max} <sup>o</sup>Cel</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
            )}

            
        </div>
    </>
  );
}

export default Temp;
