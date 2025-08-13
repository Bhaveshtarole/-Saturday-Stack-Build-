# Tic Tac Toe - React

A Tic-tac-toe game built with React.js, converted from the original vanilla JavaScript version.

## Features

- Classic Tic-tac-toe gameplay
- Turn-based gameplay (O and X)
- Win detection for all possible winning combinations
- Draw detection
- Reset game functionality
- New game button after game ends
- Responsive design
- Smooth animations and hover effects

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Play

1. The game starts with player O
2. Click on any empty box to place your mark (O or X)
3. Players take turns until someone wins or the game ends in a draw
4. When the game ends, you can click "New Game" to start a new round
5. Use "Reset Game" to reset the current game at any time

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## Technologies Used

- React 18.2.0
- React DOM 18.2.0
- Create React App
- CSS3 for styling

## Project Structure

```
src/
├── App.js          # Main game component
├── App.css         # Game styles
├── index.js        # App entry point
└── index.css       # Global styles
public/
└── index.html      # HTML template
```

## Game Logic

The game includes:
- State management using React hooks (useState)
- Win pattern detection for all 8 possible winning combinations
- Draw detection when all boxes are filled
- Turn management between O and X players
- Game over state management
