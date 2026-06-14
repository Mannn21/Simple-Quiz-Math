import React from 'react';
import { useState, useEffect } from 'react';

const Answers = ({ correctAnswer, isLose, setTrigger }) => {
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if (correctAnswer === null) return;

        // Generate random answers
        const newAnswers = new Set();
        newAnswers.add(correctAnswer);

        
        while (newAnswers.size < 3) {
            // Generate a random operator for creating a random answer
            const operators = ['+', '-'];
            const operator = operators[Math.floor(Math.random() * operators.length)];

            // Generate a random answer within a reasonable range
            let randomAnswer;
            switch (operator) {
                case '+':
                    randomAnswer = correctAnswer + Math.floor(Math.random() * 10) + 1;
                    break;
                case '-':
                    randomAnswer = correctAnswer - Math.floor(Math.random() * 10) - 1;
                    break;
            }
            newAnswers.add(randomAnswer);
        }
        setAnswers(Array.from(newAnswers));
    }, [correctAnswer]);

    const checkAnswer = answer => {
        if (answer === correctAnswer) setTrigger(prev => prev + 1);
        else isLose(true);
    }

    return (
        <div>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>
                        <button onClick={() => checkAnswer(answer)}>{answer}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Answers;