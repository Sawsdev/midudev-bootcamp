
export const CapitalWeather = ({weather, capitalCityName}) => {
  
    if(Object.keys(weather).length === 0)
    {
        return(<div></div>);
    }
    return (<div>
        <h2>Weather in {capitalCityName}</h2>
        <p><strong>temperature: </strong>{weather && weather.temperature} Celsius</p>
        <img src={weather && weather.weather_icons[0]} alt="weather icon" />
        <p><strong>Wind: </strong>{weather && weather.wind_speed} direction {weather && weather.wind_dir}</p>
        
        
    </div>)

}