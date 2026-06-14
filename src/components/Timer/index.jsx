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

    return (
        <div>
            <span>Time Left: {timeLeft} seconds</span>
        </div>
    );
}

export default Timer;