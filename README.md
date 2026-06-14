# Simple Quiz Math

A simple endless math quiz game built with React. Answer as many questions as you can before time runs out or you get one wrong!

## Features

- Random math question generator (addition, subtraction, multiplication)
- 3 multiple choice answers per question
- 10 second countdown timer per question
- Endless mode — keep going as long as you answer correctly
- Game over on wrong answer or time up
- Score tracking

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Mannn21/simple-quiz-math.git
   cd simple-quiz-math
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── QuisLayout.jsx   # Main quiz screen
│   │   └── LoseLayout.jsx   # Game over screen
│   ├── Question.jsx          # Question generator
│   ├── Answers.jsx           # Answer choices
│   └── Timer.jsx             # Countdown timer
└── App.jsx                   # Root component
```

## How to Play

1. A math question appears on screen
2. Choose the correct answer from 3 options before time runs out
3. Correct answer → next question, timer resets
4. Wrong answer or time up → game over
5. Try to beat your high score!

## License

MIT