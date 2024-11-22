import React from 'react';
import { LearningDisorder } from '../types';
import { DISORDER_INFO } from '../data/gamesConfig';

interface DisorderSelectorProps {
  selectedDisorder: LearningDisorder;
  onSelect: (disorder: LearningDisorder) => void;
}

export const DisorderSelector: React.FC<DisorderSelectorProps> = ({
  selectedDisorder,
  onSelect,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {(Object.entries(DISORDER_INFO) as [LearningDisorder, typeof DISORDER_INFO.dyslexia][]).map(
        ([disorder, { title, description, icon: Icon, color }]) => (
          <button
            key={disorder}
            onClick={() => onSelect(disorder)}
            className={`flex flex-col items-center p-6 rounded-xl transition-all transform hover:scale-105 
              ${selectedDisorder === disorder ? color + ' text-white' : 'bg-white text-gray-700'}`}
          >
            <Icon className="w-12 h-12 mb-3" />
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p className="text-sm text-center opacity-90">{description}</p>
          </button>
        )
      )}
    </div>
  );
};