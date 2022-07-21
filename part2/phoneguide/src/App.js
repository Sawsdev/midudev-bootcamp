import React, { useEffect, useState } from 'react'
import { PersonForm  } from './PersonForm';
import { Persons } from './Persons';
import { Filter } from './Filter';
import {Notification} from './Notification';
import { getAllPersons, createPerson, deletePerson, updatePerson } from './services/persons';
const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newPersonName, setNewPersonName ] = useState('');
  const [ showAllPersons, setShowAllPersons ] = useState(true);
  const [notification, setNotification] = useState({
    message:'',
    type:''
  });

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
    const foundPerson = persons.find((person)=>person.name.toLowerCase() === newName.toLowerCase());
    if(!foundPerson)
    {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }; 
      
      createPerson(newPerson).then(response => {
        setPersons(prevPersons => [...prevPersons, newPerson]);
        setNotification({
          message:`Added ${response.name}`,
          type:'success'
        });
        setTimeout(() => {
          setNotification({
            message: '',
            type: ''
          });
        }, 2500)
      });
      setNewName('');
      setNewNumber('');
    }
    else 
    {
      const doUpdate = window.confirm(`${foundPerson.name} is already on the phonebook, replace the old number with a new one?`);
      if(doUpdate)
      {
        foundPerson.number = newNumber;
        updatePerson(foundPerson).then(response => {
          setPersons(response);
          setNotification({
            message:`Updated ${foundPerson.name} information`,
            type:'success'
          });
          setTimeout(() => {
            setNotification({
              message: '',
              type: ''
            });
          }, 2500)
        }).catch(error => {
          console.log(error);
          setNotification({
            message:`Information of ${foundPerson.name} has already been removed from server`,
            type:'error'
          });
          setTimeout(() => {
            setNotification({
              message: '',
              type: ''
            });
          }, 2500)
        });

      }
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

  const handleDelete = (event) => {
    const id = Number(event.target.getAttribute('data-id'));
    const person = personsToShow.find((person) =>  person.id === id);
    const doDelete = window.confirm(`Delete ${person.name} ?`);
    console.log(doDelete)
    if(doDelete)
    {
      deletePerson(id).then(response => {
        setPersons(prevPersons => {
            return prevPersons.filter((prevPerson) => (prevPerson.name !== person.name));
        })
        setNotification({
          message:`${person.name} Ha sido eliminado`,
          type: 'success'
        });
      }).catch(error => {
        console.log(error);
        setNotification({
          message:`Information of ${person.name} has already been removed from server`,
          type:'error'
        });
        setTimeout(() => {
          setNotification({
            message: '',
            type: ''
          });
        }, 2500)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {notification} />
      <Filter handleSearch={handleSearch} personName={newPersonName} />
      <PersonForm handleChange={handleChange} 
                  handleNumberChange={handleNumberChange} 
                  handleSubmit={handleSubmit} 
                  newName={newName}
                  newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDelete={handleDelete}/>
    </div>
  )
}

export default App