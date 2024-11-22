import React from 'react';
import { GameCategory } from '../types';
import { Bird, Palette, Hash, Square, Pizza } from 'lucide-react';

interface CategorySelectorProps {
  selectedCategory: GameCategory;
  onSelect: (category: GameCategory) => void;
}

const CATEGORY_INFO = {
  animals: { icon: Bird, label: 'Animals', color: 'bg-green-500' },
  colors: { icon: Palette, label: 'Colors', color: 'bg-blue-500' },
  numbers: { icon: Hash, label: 'Numbers', color: 'bg-purple-500' },
  shapes: { icon: Square, label: 'Shapes', color: 'bg-yellow-500' },
  food: { icon: Pizza, label: 'Food', color: 'bg-red-500' }
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  onSelect,
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {(Object.entries(CATEGORY_INFO) as [GameCategory, typeof CATEGORY_INFO.animals][]).map(
        ([category, { icon: Icon, label, color }]) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`flex flex-col items-center p-4 rounded-xl transition-all transform hover:scale-105 
              ${selectedCategory === category ? color + ' text-white' : 'bg-white text-gray-700'}`}
          >
            <Icon className="w-8 h-8 mb-2" />
            <span className="font-comic text-sm">{label}</span>
          </button>
        )
      )}
    </div>
  );
};