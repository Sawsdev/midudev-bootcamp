import React, { useState } from 'react'
import { PersonForm  } from './PersonForm';
import { Persons } from './Persons';
import { Filter } from './Filter';
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newPersonName, setNewPersonName ] = useState('');
  const [ showAllPersons, setShowAllPersons ] = useState(true);

  const personsToShow = showAllPersons ? persons : persons.filter((person) =>{
      console.log(person.name.toLowerCase().includes( newPersonName.toLowerCase()));
    return  person.name.toLowerCase().includes( newPersonName.toLowerCase())});
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!persons.find((person)=>person.name === newName))
    {
      setPersons([...persons, 
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