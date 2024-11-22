import React, { useState } from 'react';
import { DisorderSelector } from './components/DisorderSelector';
import { GamesList } from './components/GamesList';
import { GameContainer } from './components/games/GameContainer';
import { GameState, LearningDisorder, GameConfig } from './types';
import { DISORDER_INFO } from './data/gamesConfig';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    selectedDisorder: 'dyslexia',
    selectedGame: null,
    difficulty: 'easy',
    score: 0,
    level: 1,
    subLevel: 1
  });

  const handleDisorderSelect = (disorder: LearningDisorder) => {
    setGameState(prev => ({
      ...prev,
      selectedDisorder: disorder,
      selectedGame: null
    }));
  };

  const handleGameSelect = (game: GameConfig) => {
    setGameState(prev => ({
      ...prev,
      selectedGame: game
    }));
  };

  const handleBackToGames = () => {
    setGameState(prev => ({
      ...prev,
      selectedGame: null
    }));
  };

  if (gameState.selectedGame) {
    return (
      <GameContainer
        game={gameState.selectedGame}
        onBack={handleBackToGames}
      />
    );
  }

  const { title, description, color } = DISORDER_INFO[gameState.selectedDisorder];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-comic font-bold text-gray-800 mb-4">
            Learning Games
          </h1>
          <p className="text-xl font-comic text-gray-600">
            Choose a learning area to start playing!
          </p>
        </header>

        <DisorderSelector
          selectedDisorder={gameState.selectedDisorder}
          onSelect={handleDisorderSelect}
        />

        <div className={`${color} bg-opacity-10 rounded-2xl p-8 mb-8`}>
          <h2 className="text-3xl font-comic font-bold mb-2">{title}</h2>
          <p className="text-lg font-comic text-gray-600 mb-6">{description}</p>

          <GamesList
            disorder={gameState.selectedDisorder}
            onSelectGame={handleGameSelect}
          />
        </div>
      </div>
    </div>
  );
}

export default App;