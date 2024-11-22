import React, { useState } from 'react';
import { WordExplorer } from './WordExplorer';
import { GameConfig } from '../../types';

interface GameContainerProps {
  game: GameConfig;
  onBack: () => void;
}

export const GameContainer: React.FC<GameContainerProps> = ({ game, onBack }) => {
  const [gameState, setGameState] = useState({
    level: 1,
    subLevel: 1,
    score: 0
  });

  const handleGameComplete = (score: number) => {
    setGameState(prev => ({
      ...prev,
      score: prev.score + score,
      subLevel: prev.subLevel + 1
    }));
  };

  const renderGame = () => {
    switch (game.id) {
      case 'word-explorer':
        return (
          <WordExplorer
            difficulty={game.difficulty}
            level={gameState.level}
            subLevel={gameState.subLevel}
            onComplete={handleGameComplete}
          />
        );
      // Add other game components here
      default:
        return <div>Game not implemented yet</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-6 px-4 py-2 text-purple-600 font-comic hover:text-purple-700 transition-colors"
        >
          ← Back to Games
        </button>
        {renderGame()}
      </div>
    </div>
  );
};