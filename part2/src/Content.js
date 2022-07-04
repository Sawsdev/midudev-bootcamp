import Part from "./Part.js";
const Content = ({parts}) => {
    
    return  (
        <ul>
            {parts.map((part) => {
                return <li key={part.id}><Part name={part.name} exercises={part.exercises}/></li>
            })}
        </ul>
        );
}

export default Content