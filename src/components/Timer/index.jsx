import React, { useState, useEffect } from 'react'

const Timer = ({ duration, trigger, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        setTimeLeft(duration);
    }, [trigger, duration]);

    useEffect(() => {
        if (timeLeft === 0) {
            onTimeUp();
            return;
        }

        const timerId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft, onTimeUp]);

    const timerColor = timeLeft <= 3 ? 'bg-red-500' : timeLeft <= 6 ? 'bg-yellow-700' : 'bg-green-500'

    return (
        <div className={`${timerColor} text-white font-bold text-sm sm:text-xl px-4 sm:px-6 py-1.5 sm:py-2 rounded-full transition-colors duration-300`}>
            {timeLeft}s
        </div>
    );
}

export default Timer;