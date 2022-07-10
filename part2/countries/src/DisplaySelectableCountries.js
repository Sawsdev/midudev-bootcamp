export const DisplaySelectableCountries = ({countries, handleClick}) => {
    return(<div>
            {countries.map((country) => {
                return (<p key={country.name.common}>{country.name.common} <button onClick={handleClick} data-name={country.name.common}>Show</button></p>)
            })}
    </div>)
}