import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_KEY;
const API_URL = `http://api.weatherstack.com/current?access_key=${API_KEY}`;

export const getAllCountries = () => {
    return axios.get('https://restcountries.com/v3.1/all')
                .then(response => {
                    const {data} = response;
                    return data;
                })
                .catch(error => { return {error:error}});
}

export const filterCountries = (countryName, countries) => {
    return countries.filter((country) => {
        return country.name.common.toLowerCase().includes(countryName.toLowerCase());
    });
}

export const validateCountryName = (countryName) => {
    const regex = /^\w+/g;
    return regex.test(countryName);
}

export const getCountry = (countryName, countries) => {
    const result = countries.find((country) =>  country.name.common.toLowerCase() === countryName.toLowerCase());
    return [].concat(result);
}

export const getCountryCapitalWeather = (countryCapital) => {
    const fullUrl = `${API_URL}&query=${countryCapital}`;
    return axios.get(fullUrl)
                .then(response => {
                    const {data} = response;
                    return data;
                })
    

}

