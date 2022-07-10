import { Country } from "./Country";
import { DisplaySelectableCountries } from "./DisplaySelectableCountries";


export const DisplayCountries = ({countries, handleClick}) => {

    return (<div>
            { countries.length > 0 && countries.length <= 10 ?
                countries.length === 1 ? 
                <Country country={countries[0]}/>
                    : <DisplaySelectableCountries countries={countries} handleClick={handleClick} />
                : <p>Too many matches. Specify another filter</p>  }    
        </div>)
}