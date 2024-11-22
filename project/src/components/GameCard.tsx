import React from 'react';
import { WordChoice } from '../types';

interface GameCardProps {
  choice: WordChoice;
  isSelected: boolean;
  onSelect: () => void;
  isCorrect: boolean | null;
}

export const GameCard: React.FC<GameCardProps> = ({
  choice,
  isSelected,
  onSelect,
  isCorrect,
}) => {
  const borderColor = isSelected
    ? isCorrect === null
      ? 'border-blue-400'
      : isCorrect
      ? 'border-green-400'
      : 'border-red-400'
    : 'border-transparent';

  return (
    <button
      onClick={onSelect}
      className={`relative p-4 rounded-xl ${borderColor} border-4 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300`}
      disabled={isCorrect !== null}
    >
      <div className="w-48 h-48 rounded-lg overflow-hidden">
        <img
          src={choice.imageUrl}
          alt={choice.word}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-2 text-xl font-comic text-center text-gray-700">
        {choice.word}
      </p>
    </button>
  );
};