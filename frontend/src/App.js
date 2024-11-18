// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';
import LetterHuntGame from './components/LetterHuntGame';
import Dashboard from './components/Dashboard';
import GameStats from './components/GameStats';
import './App.css';

function App() {
  const [currentGame, setCurrentGame] = useState(null);
  const [userId] = useState('dummy-user-id'); // Replace with actual auth

  const handleGameComplete = async (gameData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/sessions', {
        userId,
        ...gameData,
      });
      setCurrentGame(response.data);
    } catch (error) {
      console.error('Error saving game session:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Letter Hunt Game</h1>
      </header>
      <main>
        <LetterHuntGame onGameComplete={handleGameComplete} />
        {currentGame && <GameStats currentGame={currentGame} />}
        <Dashboard userId={userId} />
      </main>
    </div>
  );
}

export default App;
