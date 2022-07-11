export const Person = ({person, handleClick}) => {

    return (<p key={person.id}>
        <strong>{person.name}</strong> | {person.number} <button data-id={person.id} onClick={handleClick}>Delete</button>
        </p>);
}