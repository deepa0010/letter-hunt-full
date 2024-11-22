import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { Volume2, Star, Heart } from 'lucide-react';
import { GameProgress } from '../GameProgress';
import { EngagementMeter } from '../EngagementMeter';
import { WORDS_BY_CATEGORY } from '../../data/gameData';

interface WordExplorerProps {
  onComplete: (score: number) => void;
  difficulty: 'easy' | 'medium' | 'hard';
  level: number;
  subLevel: number;
}

export const WordExplorer: React.FC<WordExplorerProps> = ({
  onComplete,
  difficulty,
  level,
  subLevel
}) => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentWord, setCurrentWord] = useState(WORDS_BY_CATEGORY.animals[0]);
  const [choices, setChoices] = useState(WORDS_BY_CATEGORY.animals.slice(0, 3));
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [engagement, setEngagement] = useState(100);

  const [playCorrect] = useSound('/sounds/correct.mp3');
  const [playWrong] = useSound('/sounds/wrong.mp3');
  const [playWord] = useSound(currentWord.audioUrl);

  useEffect(() => {
    // Simulate engagement changes
    const interval = setInterval(() => {
      setEngagement(prev => Math.max(0, Math.min(100, prev + Math.random() * 20 - 10)));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWordPlay = () => {
    playWord();
  };

  const handleChoiceSelect = (word: string) => {
    setSelectedChoice(word);
    
    if (word === currentWord.word) {
      playCorrect();
      setIsCorrect(true);
      setScore(prev => prev + 1);
      setTimeout(nextWord, 1500);
    } else {
      playWrong();
      setIsCorrect(false);
      setLives(prev => prev - 1);
      if (lives <= 1) {
        onComplete(score);
      }
    }
  };

  const nextWord = () => {
    // Logic to select next word based on difficulty and progress
    setSelectedChoice(null);
    setIsCorrect(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <GameProgress level={level} subLevel={subLevel} score={score} />
        <div className="flex items-center gap-4">
          <EngagementMeter level={engagement} />
          <div className="flex">
            {Array.from({ length: lives }).map((_, i) => (
              <Heart key={i} className="w-6 h-6 text-red-500 fill-current" />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-comic mb-4">Listen and Choose!</h2>
          <button
            onClick={handleWordPlay}
            className="bg-purple-500 text-white rounded-full p-4 hover:bg-purple-600 transition-colors"
          >
            <Volume2 className="w-8 h-8" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {choices.map((choice) => (
            <button
              key={choice.word}
              onClick={() => handleChoiceSelect(choice.word)}
              disabled={selectedChoice !== null}
              className={`relative p-4 rounded-xl border-4 transition-all transform hover:scale-105
                ${selectedChoice === choice.word
                  ? isCorrect === null
                    ? 'border-blue-400'
                    : isCorrect
                    ? 'border-green-400'
                    : 'border-red-400'
                  : 'border-transparent'
                }
              `}
            >
              <div className="w-full aspect-square rounded-lg overflow-hidden">
                <img
                  src={choice.imageUrl}
                  alt={choice.word}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-2xl font-comic text-center text-gray-700">
                {choice.word}
              </p>
              {selectedChoice === choice.word && isCorrect && (
                <Star className="absolute top-2 right-2 w-8 h-8 text-yellow-500 fill-current" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};