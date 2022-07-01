import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const MostVotedAnecdote = ({anecdotes, points}) => {
  const maxVoteQty = Math.max(...points);
  const anecdoteIndex = points.findIndex((point) => point === maxVoteQty);
  const anecdote = anecdotes[anecdoteIndex];
  return (<div>
          <h1>Anecdote with most votes</h1>
          <p>{anecdote}</p>
          <p>
            Has <strong>{maxVoteQty}</strong> votes
          </p>
         </div>)
}
const App = (props) => {
  const initialState = {
    position: 0,
    points: Array(anecdotes.length).fill(0)
  }
  const [selected, setSelected] = useState(initialState)

  const handleClick = () => {
    const randomPos = Math.floor(Math.random() * anecdotes.length);
    setSelected(prevSelected => {
      return {
        ...prevSelected,
        position: randomPos
      }
    });
  }
  const handleVote = () => {
    setSelected( prevSelected => {
      const newPoints = [...prevSelected.points];
      newPoints[prevSelected.position] = newPoints[prevSelected.position]+1;
      return {
        ...prevSelected,
        points: newPoints
        };
    })
  }


  return (
    <div>
      <p>
        {props.anecdotes[selected.position]}
      </p>
      <p>
        Has <strong>{selected.points[selected.position]}</strong> votes
      </p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next anecdote</button>
      <MostVotedAnecdote points={selected.points} anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)