export const Persons = ({persons}) => {
    if(!Array.isArray(persons))
    {
        return (<div>
                <p>Something went wrong</p>
        </div>)
    } 
    return (<div>
       
            {
                persons.map((person) => {
                    return (<p key={person.name}>
                            <strong>{person.name}</strong><br/>
                            {person.number}
                            </p>);
                })
            }   
    </div>)

}