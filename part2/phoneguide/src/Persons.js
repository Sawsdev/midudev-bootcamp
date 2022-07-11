import { Person } from "./Person"
export const Persons = ({persons, handleDelete}) => {
    if(!Array.isArray(persons))
    {
        return (<div>
                <p>Something went wrong</p>
        </div>)
    } 
    return (<div>
       
            {
                persons.map((person) => {
                        return (<Person person={person} handleClick={handleDelete} />)
                })
            }   
    </div>)

}