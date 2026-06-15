import React from 'react';
import { useState, useEffect } from 'react';

const Answers = ({ correctAnswer, setCondition, setTrigger }) => {
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
        setAnswers(Array.from(newAnswers).sort(() => Math.random() - 0.5));
    }, [correctAnswer]);

    const checkAnswer = answer => {
        if (answer === correctAnswer) setTrigger(prev => prev + 1);
        else setCondition('gameover');
    }

    return (
        <div className="mt-6 w-full max-w-md sm:max-w-lg">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                {answers.map((answer, index) => (
                    <li key={index}>
                        <button 
                            onClick={() => checkAnswer(answer)} 
                            className="w-full bg-slate-800 hover:bg-indigo-500 border py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base border-slate-700 hover:border-indigo-500 text-white font-bold py-4 px-4 rounded-xl transition duration-300 hover:shadow-lg cursor-pointer"
                        >
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
)
}

export default Answers;