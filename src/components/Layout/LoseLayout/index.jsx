const LoseLayout = ({ setCondition, score, setScore }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-5xl font-bold text-red-500 mb-2">Game Over!</h1>
            <p className="text-slate-400 text-sm sm:text-lg mb-2">Final Score</p>
            <span className="text-4xl sm:text-6xl font-bold text-indigo-400 mb-8">{score}</span>
            <button 
                onClick={() => {
                    setCondition('game');
                    setScore(0);
                }}
                className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 cursor-pointer text-white font-bold py-3 px-10 rounded-xl transform transition-all duration-150 ease-out hover:scale-105 active:scale-95 active:translate-y-0.5 shadow-lg hover:shadow-xl active:shadow-inner"
            >
                Play Again
            </button>
        </div>
    )
}

export default LoseLayout;