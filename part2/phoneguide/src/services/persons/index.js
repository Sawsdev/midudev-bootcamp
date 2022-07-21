import axios from 'axios';
export const getAllPersons = () => {
    return axios.get('http://localhost:3001/persons')
                .then(response => {
                    const {data} = response;
                    return data;
                }).catch((error) => {
                    console.error(error)
                });
}

export const createPerson = (person) => {
    if(!person) 
    {
        return false;
    }
    return axios.post('http://localhost:3001/persons', person)
         .then(response => {
            const {data} = response;
            return data;
         })
         .catch(error => {
            return error;
         })
}

export const deletePerson = (id) => {
    if(!id) return false;
    return axios.delete(`http://localhost:3001/persons/${id}`)
                .then(response => {
                    const {data} = response;
                    console.log(data);
                })
               
}

export const updatePerson = (person) => {
    if(!person) return false
    return axios.put(`http://localhost:3001/persons/${person.id}`, person)
                .then(response => {
                    console.log(response);
                    return getAllPersons();
                });
}