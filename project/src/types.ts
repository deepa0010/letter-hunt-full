export type LearningDisorder = 
  | 'dyslexia'
  | 'dyscalculia'
  | 'dysgraphia'
  | 'dyspraxia'
  | 'dysphasia'
  | 'auditory'
  | 'visual'
  | 'nonverbal';

export type GameType = 
  | 'wordMatching'
  | 'numberSequence'
  | 'handwriting'
  | 'motorSkills'
  | 'speechPattern'
  | 'soundDiscrimination'
  | 'visualMemory'
  | 'socialCues';

export interface GameConfig {
  id: string;
  title: string;
  description: string;
  disorder: LearningDisorder;
  type: GameType;
  difficulty: Difficulty;
  imageUrl: string;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameState {
  selectedDisorder: LearningDisorder;
  selectedGame: GameConfig | null;
  difficulty: Difficulty;
  score: number;
  level: number;
  subLevel: number;
}