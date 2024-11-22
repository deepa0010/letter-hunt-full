import { WordChoice, GameCategory, Difficulty } from '../types';

export const WORDS_BY_CATEGORY: Record<GameCategory, WordChoice[]> = {
  animals: [
    {
      word: 'Cat',
      imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&h=400',
      audioUrl: 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/cat--_us_1.mp3',
      category: 'animals',
      difficulty: 'easy'
    },
    {
      word: 'Dog',
      imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&h=400',
      audioUrl: 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/dog--_us_1.mp3',
      category: 'animals',
      difficulty: 'easy'
    },
    {
      word: 'Elephant',
      imageUrl: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=400&h=400',
      audioUrl: 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/elephant--_us_1.mp3',
      category: 'animals',
      difficulty: 'medium'
    },
    {
      word: 'Penguin',
      imageUrl: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?auto=format&fit=crop&w=400&h=400',
      audioUrl: 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/penguin--_us_1.mp3',
      category: 'animals',
      difficulty: 'medium'
    },
    {
      word: 'Rhinoceros',
      imageUrl: 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?auto=format&fit=crop&w=400&h=400',
      audioUrl: 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/rhinoceros--_us_1.mp3',
      category: 'animals',
      difficulty: 'hard'
    }
  ],
  colors: [
    {
      word: 'Red',
      imageUrl: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&w=400&h=400',
      audioUrl: 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/red--_us_1.mp3',
      category: 'colors',
      difficulty: 'easy'
    },
    {
      word: 'Blue',
      imageUrl: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=400&h=400',
      audioUrl: 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/blue--_us_1.mp3',
      category: 'colors',
      difficulty: 'easy'
    },
    {
      word: 'Purple',
      imageUrl: 'https://images.unsplash.com/photo-1557682260-96773eb01377?auto=format&fit=crop&w=400&h=400',
      audioUrl: 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/purple--_us_1.mp3',
      category: 'colors',
      difficulty: 'medium'
    }
  ],
  numbers: [
    {
      word: 'One',
      imageUrl: 'https://images.unsplash.com/photo-1557682260-96773eb01377?auto=format&fit=crop&w=400&h=400',
      audioUrl: 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/one--_us_1.mp3',
      category: 'numbers',
      difficulty: 'easy'
    }
  ],
  shapes: [
    {
      word: 'Circle',
      imageUrl: 'https://images.unsplash.com/photo-1557682260-96773eb01377?auto=format&fit=crop&w=400&h=400',
      audioUrl: 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/circle--_us_1.mp3',
      category: 'shapes',
      difficulty: 'easy'
    }
  ],
  food: [
    {
      word: 'Apple',
      imageUrl: 'https://images.unsplash.com/photo-1557682260-96773eb01377?auto=format&fit=crop&w=400&h=400',
      audioUrl: 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/apple--_us_1.mp3',
      category: 'food',
      difficulty: 'easy'
    }
  ]
};

export const DIFFICULTY_CONFIG = {
  easy: {
    choices: 3,
    timeLimit: 0,
    points: 1
  },
  medium: {
    choices: 4,
    timeLimit: 15,
    points: 2
  },
  hard: {
    choices: 5,
    timeLimit: 10,
    points: 3
  }
};