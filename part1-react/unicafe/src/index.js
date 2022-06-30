import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {
  const total = good + bad + neutral;
  const avg = total>0 ? (good - bad)/total : 0;
  const positivePercentage = total>0 ? (good / total) *100 : 0;

  return <>
    <h1>statistics</h1>
    <table>
      <tbody>

      <Statistic text={"good"} value={good}/>
      <Statistic text={"neutral"} value={neutral}/>
      <Statistic text={"bad"} value={bad}/>
      <Statistic text={"total"} value={total}/>
      <Statistic text={"average"} value={avg}/>
      <Statistic text={"positive"} value={positivePercentage}/>
      
      </tbody>
    </table>
  </>
}

const Button = ({text, handleClick}) => {
  return <button onClick={handleClick}>{text}</button>;
}

const Statistic = ({text, value}) => {
  return <tr>
  <td>{text}</td>
  <td>{value}</td>
</tr> ;
}

const NoStatistics = () => {
    return (<>
      <p>
        No feedback given
      </p>
    </>);
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
      setGood(prevGoodValue => {
        return prevGoodValue + 1;
      });
  }

  const handleNeutral = () => {
    setNeutral(prevNeutralValue => {
      return prevNeutralValue + 1;
    });
  }
  const handleBad = () => {
    setBad(prevBadValue => {
      return prevBadValue + 1;
    });
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <p>
        <Button handleClick={handleGood} text="Good"/>
        <Button handleClick={handleNeutral} text="Neutral"/>
        <Button handleClick={handleBad} text="Bad"/>
      </p>
      {good+bad+neutral <=0 ?
      <NoStatistics /> :  <Statistics good={good} bad={bad} neutral ={neutral} />}
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)