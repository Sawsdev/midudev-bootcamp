export const Search = ({handleChange, filterCountry, errorText}) => {
    return (<div>
            <input type="text" onChange={handleChange} value={filterCountry} placeholder="Put a country name here"/>
            <small>{errorText}</small>
        </div>)

} 