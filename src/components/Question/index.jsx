import React, { useState, useEffect } from 'react';

const Question = ({ onCorrectAnswer, questionIndex }) => {
    const [question, setQuestion] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);

    useEffect(() => {
        // Generate random numbers for the question
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1
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
    }, [questionIndex]);

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