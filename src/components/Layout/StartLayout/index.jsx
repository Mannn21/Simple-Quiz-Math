import React, { useState } from 'react'

const StartLayout = ( { setCondition } ) => {
    const handleStart = () => {
        setCondition('game');
    }

    return (
        <div className='flex flex-col items-center justify-center text-center px-4'>
            <h1 className="text-3xl sm:text-5xl font-bold text-red-500 tracking-wide mb-4">Math Quiz</h1>
            <p className="text-slate-400 text-sm sm:text-lg mb-8">Test your math skills and see how far you can go!</p>
            <button 
                onClick={handleStart} 
                className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 cursor-pointer text-white font-bold py-3 px-6 sm:px-10 text-sm sm:text-base rounded-xl transform transition-all duration-150 ease-out hover:scale-105 active:scale-95 active:translate-y-0.5 shadow-lg hover:shadow-xl active:shadow-inner"
            >
                Start Game
            </button>
        </div>
    )
}

export default StartLayout;