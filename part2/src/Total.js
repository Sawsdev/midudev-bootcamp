const Total = ({parts}) => {
    if(!Array.isArray(parts)) return <></>
    if(parts.length === 1) return <p>Number of exercises {parts[0].excercises}</p>
    const totalExcercises = parts.reduce((count, part) => count + part.exercises, 0);
    return <p><strong>Total of {totalExcercises} exercises</strong></p>;
}

export default Total;