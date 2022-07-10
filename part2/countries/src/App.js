
import { Search } from './Search';
import {useEffect, useState} from 'react';
import {getAllCountries, filterCountries} from './countryService';
import { DisplayCountries } from './DisplayCountries';

function App() {

  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState('');
  const [showFilteredCountries, setShowFilteredCountries ] = useState(false);
  const [errorText, setErrorText] = useState('');
  
  useEffect(() => {
      getAllCountries().then( apiCountries => {
        setCountries(prevCountries => prevCountries.concat(apiCountries));
      });
  }, [])

  const filteredCountries = !showFilteredCountries ? countries : filterCountries(filterCountry, countries); 

  

  const handleChange = (event) => {
    const value = event.target.value;
    // if(validateCountryName(value))
    // {
      setFilterCountry(value);
      !value ? setShowFilteredCountries(false) : setShowFilteredCountries(true);
      setErrorText('');
    // }
    // else 
    // {
    //   setErrorText('Error en el filtro. Valide el texto ingresado.');
    // }
  }
  const handleClick = (event) => {

    const value = event.target.getAttribute('data-name');
    // const countryToShow = getCountry(value, countries);
    setFilterCountry(value);

  }

  return (
    <div className="App">
      <Search handleChange={handleChange} filterCountry={filterCountry} errorText ={errorText}/>
      <DisplayCountries countries={filteredCountries} handleClick={handleClick} />
    </div>
  );
}

export default App;
