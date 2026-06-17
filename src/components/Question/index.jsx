import React, { useState, useEffect } from 'react';

const Question = ({ level, onCorrectAnswer, questionIndex }) => {
    const [question, setQuestion] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);

    useEffect(() => {
        // Generate minimum number based on the level
        const min = Math.max(0, (level - 1) * 10);

        // Generate maximum number based on the level
        const max = level === 0 ? 10 : min + 20;

        // Generate random numbers for the question
        const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
        
        const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
        const operators = ['+', '-', 'x'];
        const operator = operators[Math.floor(Math.random() * operators.length)];

        // Generate a new question
        const questionString = `${num1} ${operator} ${num2}`;
        setQuestion(questionString);

        // Calculate the correct answer
        let answer;
        switch (operator) {
            case '+':
                answer = num1 + num2;
                break;
            case '-':
                answer = num1 - num2;
                break;
            case 'x':
                answer = num1 * num2;
                break;
        }
        setCorrectAnswer(answer);
    }, [questionIndex, level]);

    useEffect(() => {
        onCorrectAnswer(correctAnswer);
    }, [correctAnswer]);

    return (
        <div className="w-full text-center">
            <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-white">{question}</span>
        </div>
    )
}

export default Question;