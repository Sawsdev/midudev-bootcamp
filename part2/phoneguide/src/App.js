import React, { useEffect, useState } from 'react'
import { PersonForm  } from './PersonForm';
import { Persons } from './Persons';
import { Filter } from './Filter';
import { getAllPersons } from './services/persons';
const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newPersonName, setNewPersonName ] = useState('');
  const [ showAllPersons, setShowAllPersons ] = useState(true);

  useEffect(() => {
    console.log("effect")
    getAllPersons().then(persons => {
      setPersons(prevPersons => prevPersons.concat(persons));
    });
  }, [])

  const allPersons = [...persons];
  const personsToShow = showAllPersons ? allPersons : allPersons.filter((person) =>{
    return  person.name.toLowerCase().includes( newPersonName.toLowerCase())});
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("im here")
    if(!persons.find((person)=>person.name === newName))
    {
      setPersons(prevPersons => [...prevPersons, 
                  {
                    name: newName,
                    number: newNumber
                  }]);
      setNewName('');
      setNewNumber('');
    }
    else 
    {
      alert(`${newName} already added`);
    }
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setNewName(value);
  }

  const handleNumberChange = (event) => {
    const value = event.target.value;
    setNewNumber(value);
  }
  const handleSearch = (event) => {
    const value = event.target.value;
    
    setNewPersonName(prevValue =>value);
    value !== "" ? setShowAllPersons(false) : setShowAllPersons(true);
    
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} personName={newPersonName} />
      <PersonForm handleChange={handleChange} 
                  handleNumberChange={handleNumberChange} 
                  handleSubmit={handleSubmit} 
                  newName={newName}
                  newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  )
}

export default App