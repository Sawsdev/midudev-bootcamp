const Total = ({exercises}) => {
    if(!Array.isArray(exercises)) return <></>
    if(exercises.length === 1) return <p>Number of exercises {exercises[0]}</p>
    const totalExcercises = exercises.reduce((count, exercise) => count + exercise, 0);
    return <p>Number of exercises {totalExcercises}</p>;
}

export default Total;