export const PersonForm = ({handleSubmit, handleChange, handleNumberChange, newName, newNumber}) => {
    return (<form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>)
}