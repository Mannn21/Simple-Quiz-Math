import { useState } from 'react'
import './App.css'
import StartLayout from './components/Layout/StartLayout'
import LoseLayout from './components/Layout/LoseLayout'
import QuisLayout from './components/Layout/QuisLayout'

function App() {
  const [quizCondition, setQuizCondition] = useState('start')
  const [score, setScore] = useState(0)


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-xl">
        {quizCondition === 'start' ? <StartLayout setCondition={setQuizCondition} /> : quizCondition === 'gameover' ? <LoseLayout setCondition={setQuizCondition} setScore={setScore} score={score} /> : <QuisLayout setCondition={setQuizCondition} score={score} setScore=  {setScore} />}
      </div>
    </div>
  ) 
}

export default App
