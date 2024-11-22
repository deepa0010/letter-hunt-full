import React from 'react';
import { GameConfig, LearningDisorder } from '../types';
import { GAMES_LIST } from '../data/gamesConfig';

interface GamesListProps {
  disorder: LearningDisorder;
  onSelectGame: (game: GameConfig) => void;
}

export const GamesList: React.FC<GamesListProps> = ({ disorder, onSelectGame }) => {
  const games = GAMES_LIST.filter(game => game.disorder === disorder);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <button
          key={game.id}
          onClick={() => onSelectGame(game)}
          className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
        >
          <img
            src={game.imageUrl}
            alt={game.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{game.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{game.description}</p>
            <span className={`inline-block px-3 py-1 rounded-full text-sm 
              ${game.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                game.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'}`}>
              {game.difficulty}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};