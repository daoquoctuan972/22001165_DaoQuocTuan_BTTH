import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [invest, setInvest] = useState(0)
  const [rate, setRate] = useState(0)
  const [goal, setGoal] = useState(0)
  const [rows, setRows] = useState([]);

  const handleChangeInvest = event => {
      setInvest(event.target.value)
      console.log(invest)
  }
  const handleChangeRate = event => {
    setRate(event.target.value)
  }
  const handleChangeGoal = event => {
    setGoal(event.target.value)
  }

  const addRow = () =>{
    setRows([])
    let crntAmount = parseFloat(invest)
    const grRate = parseFloat(rate)/100
    const target = parseFloat(goal)
    const newRows = []
    let year = new Date().getFullYear() - 1;

    while(crntAmount < target){
      year++;
      let oldAmount = crntAmount
      crntAmount = crntAmount + crntAmount * grRate
      newRows.push({
        year,
        oldAmount,
        rate,
        invest: crntAmount.toFixed(2)
      });
    }
        
    setRows(newRows)
  }

  return (
    <>
      <div>
        <div id='line'>
          <span>Invest</span>
          <input type="text" onChange={handleChangeInvest}/>
        </div>
        <div id='line'>
          <span>Rate</span>
          <input type="text" onChange={handleChangeRate}/>
        </div>
        <div id='line'>
          <span>Goal</span>
          <input type="text" onChange={handleChangeGoal}/>
        </div>
        <button id='btn' onClick={addRow}>Calculate</button>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Invest</th>
              <th>Rate</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{row.oldAmount}</td>
                <td>{row.rate}</td>
                <td>{row.invest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
      
  )
}

export default App
