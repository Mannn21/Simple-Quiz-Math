import { useState, useEffect } from 'react'
import Question from '../../Question'
import Answers from '../../Answers'
import Timer from '../../Timer'

const QuisLayout = ({ setLose, score, setScore }) => {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState(null)

    useEffect(() => {
        setScore(questionIndex)
    }, [questionIndex])

    return (
    <div>
        <div>Score: {score}</div>
        <div>
            <Question onCorrectAnswer={setCorrectAnswer} questionIndex={questionIndex} />
        </div>
        <Timer duration={10} trigger={questionIndex} onTimeUp={() => setLose(true)} />
        <Answers setTrigger={setQuestionIndex} isLose={setLose} correctAnswer={correctAnswer} />
    </div>
  )
}

export default QuisLayout;