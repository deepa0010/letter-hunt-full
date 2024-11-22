import React from 'react';
import { Difficulty } from '../types';
import { Star } from 'lucide-react';

interface DifficultySelectorProps {
  selectedDifficulty: Difficulty;
  onSelect: (difficulty: Difficulty) => void;
}

const DIFFICULTY_INFO = {
  easy: { stars: 1, color: 'bg-green-500' },
  medium: { stars: 2, color: 'bg-yellow-500' },
  hard: { stars: 3, color: 'bg-red-500' }
};

export const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  selectedDifficulty,
  onSelect,
}) => {
  return (
    <div className="flex gap-4 justify-center mb-8">
      {(Object.entries(DIFFICULTY_INFO) as [Difficulty, typeof DIFFICULTY_INFO.easy][]).map(
        ([difficulty, { stars, color }]) => (
          <button
            key={difficulty}
            onClick={() => onSelect(difficulty)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all transform hover:scale-105
              ${selectedDifficulty === difficulty ? color + ' text-white' : 'bg-white text-gray-700'}`}
          >
            <span className="font-comic capitalize">{difficulty}</span>
            <div className="flex">
              {Array.from({ length: stars }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </button>
        )
      )}
    </div>
  );
};