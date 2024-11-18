import React from 'react';

const GameStats = ({ currentGame }) => {
  const calculateAccuracy = () => {
    const total = currentGame.lettersFound + currentGame.mistakes;
    return total === 0 ? 0 : ((currentGame.lettersFound / total) * 100).toFixed(1);
  };

  return (
    <div className="game-stats">
      <div className="stat">
        <label>Score:</label>
        <span>{currentGame.score}</span>
      </div>
      <div className="stat">
        <label>Letters Found:</label>
        <span>{currentGame.lettersFound}</span>
      </div>
      <div className="stat">
        <label>Accuracy:</label>
        <span>{calculateAccuracy()}%</span>
      </div>
      <div className="stat">
        <label>Time:</label>
        <span>{currentGame.duration}s</span>
      </div>
    </div>
  );
};

export default GameStats;
