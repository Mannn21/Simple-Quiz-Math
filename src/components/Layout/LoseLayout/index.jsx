const LoseLayout = ({ setLose, score, setScore }) => {
    return (
        <div>
            <h1>Game Over!</h1>
            <p>Final Score: {score}</p>
            <button onClick={() => {
                setLose(false);
                setScore(0);
            }}>
                Play Again
            </button>
        </div>
    )
}

export default LoseLayout;