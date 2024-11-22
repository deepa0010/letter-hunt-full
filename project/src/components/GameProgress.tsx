import React from 'react';
import { Star } from 'lucide-react';

interface GameProgressProps {
  level: number;
  subLevel: number;
  score: number;
}

export const GameProgress: React.FC<GameProgressProps> = ({ level, subLevel, score }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-purple-600">
          <div className="text-sm uppercase font-bold">Level</div>
          <div className="text-2xl font-comic">{level}-{subLevel}</div>
        </div>
        <div className="text-yellow-500">
          <div className="text-sm uppercase font-bold">Score</div>
          <div className="text-2xl font-comic flex items-center gap-1">
            {score}
            <Star className="w-4 h-4 fill-current" />
          </div>
        </div>
      </div>
    </div>
  );
};