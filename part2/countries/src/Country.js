import { CapitalWeather } from "./CapitalWeather";
import { getCountryCapitalWeather } from "./countryService";
import {useEffect, useState} from 'react';
export const Country = ({country}) => {

    const [weather, setWeather] = useState({})
 
    useEffect(() => {
          getCountryCapitalWeather(country.capital[0])
              .then(cityWeather => {
                  const {current} = cityWeather;
                  console.log(current)
                  setWeather(prevWeather => current)
                  
              })
    }, [country]);

    return(<div>
        <h1>{country.name.common}</h1>
        <p>
            Capital {country.capital}
            <br/>
            Population {country.population}
        </p>
        <h3>Languages</h3>
        <ul>
            {Object.values(country.languages).map((language) => {
                
                return <li key={language}>{language}</li>
            })}
        </ul>
        <img src={country.flags.png} alt={`${country.name.official} flag`}/>
        <CapitalWeather weather={weather} capitalCityName={country.capital} />
    </div>)
}