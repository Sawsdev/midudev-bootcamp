export const Filter = ({handleSearch, personName}) => {
    return (<div>
            filter shown with <input value={personName} onChange={handleSearch}/>
    </div>)
}