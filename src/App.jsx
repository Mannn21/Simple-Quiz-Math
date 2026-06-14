import { useState } from 'react'
import './App.css'
import LoseLayout from './components/Layout/LoseLayout'
import QuisLayout from './components/Layout/QuisLayout'

function App() {
  const [lose, setLose] = useState(false)
  const [score, setScore] = useState(0)

  return (
    <div>
      {lose ? <LoseLayout setLose={setLose} setScore={setScore} score={score} /> : <QuisLayout setLose={setLose} score={score} setScore={setScore} />}
    </div>
  ) 
}

export default App
