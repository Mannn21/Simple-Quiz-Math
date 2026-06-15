import { useState, useEffect } from 'react'
import Question from '../../Question'
import Answers from '../../Answers'
import Timer from '../../Timer'

const QuisLayout = ({ setCondition, score, setScore }) => {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState(null)

    useEffect(() => {
        setScore(questionIndex)
    }, [questionIndex])

    return (
    <div className='flex flex-col items-center justify-center w-full px-4'>
        <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-4">Score: {score}</div>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-md sm:max-w-lg mb-6">
            <Question onCorrectAnswer={setCorrectAnswer} questionIndex={questionIndex} />
        </div>
        <Timer duration={10} trigger={questionIndex} onTimeUp={() => setCondition('gameover')} />
        <div className="w-full max-w-md sm:max-w-lg">
            <Answers setTrigger={setQuestionIndex} setCondition={setCondition} correctAnswer={correctAnswer} />
        </div>
    </div>
  )
}

export default QuisLayout;