import { GameConfig, LearningDisorder } from '../types';
import {
  BookOpen,
  Calculator,
  Edit3,
  Move3d,
  MessageSquare,
  Ear,
  Eye,
  Users
} from 'lucide-react';

export const DISORDER_INFO: Record<LearningDisorder, {
  title: string;
  description: string;
  icon: any;
  color: string;
}> = {
  dyslexia: {
    title: 'Dyslexia',
    description: 'Reading and word recognition exercises',
    icon: BookOpen,
    color: 'bg-purple-500'
  },
  dyscalculia: {
    title: 'Dyscalculia',
    description: 'Number sense and math skills',
    icon: Calculator,
    color: 'bg-blue-500'
  },
  dysgraphia: {
    title: 'Dysgraphia',
    description: 'Writing and fine motor skills',
    icon: Edit3,
    color: 'bg-green-500'
  },
  dyspraxia: {
    title: 'Dyspraxia',
    description: 'Motor planning and coordination',
    icon: Move3d,
    color: 'bg-yellow-500'
  },
  dysphasia: {
    title: 'Dysphasia/Aphasia',
    description: 'Language and communication skills',
    icon: MessageSquare,
    color: 'bg-red-500'
  },
  auditory: {
    title: 'Auditory Processing',
    description: 'Sound recognition and processing',
    icon: Ear,
    color: 'bg-pink-500'
  },
  visual: {
    title: 'Visual Processing',
    description: 'Visual perception and memory',
    icon: Eye,
    color: 'bg-indigo-500'
  },
  nonverbal: {
    title: 'Nonverbal Learning',
    description: 'Social cues and spatial awareness',
    icon: Users,
    color: 'bg-orange-500'
  }
};

export const GAMES_LIST: GameConfig[] = [
  // Dyslexia Games
  {
    id: 'word-explorer',
    title: 'Word Explorer',
    description: 'Match spoken words with pictures',
    disorder: 'dyslexia',
    type: 'wordMatching',
    difficulty: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=300&h=200'
  },
  {
    id: 'rhyme-time',
    title: 'Rhyme Time',
    description: 'Find words that rhyme together',
    disorder: 'dyslexia',
    type: 'wordMatching',
    difficulty: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=300&h=200'
  },

  // Dyscalculia Games
  {
    id: 'number-patterns',
    title: 'Number Patterns',
    description: 'Identify and complete number sequences',
    disorder: 'dyscalculia',
    type: 'numberSequence',
    difficulty: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&h=200'
  },
  {
    id: 'shape-count',
    title: 'Shape Counter',
    description: 'Count shapes and match with numbers',
    disorder: 'dyscalculia',
    type: 'numberSequence',
    difficulty: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=300&h=200'
  },

  // Dysgraphia Games
  {
    id: 'letter-trace',
    title: 'Letter Tracer',
    description: 'Practice letter formation with guidance',
    disorder: 'dysgraphia',
    type: 'handwriting',
    difficulty: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=300&h=200'
  },
  {
    id: 'pattern-draw',
    title: 'Pattern Drawing',
    description: 'Draw patterns to improve motor control',
    disorder: 'dysgraphia',
    type: 'handwriting',
    difficulty: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?auto=format&fit=crop&w=300&h=200'
  },

  // Dyspraxia Games
  {
    id: 'rhythm-move',
    title: 'Rhythm & Movement',
    description: 'Follow movement patterns with music',
    disorder: 'dyspraxia',
    type: 'motorSkills',
    difficulty: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=300&h=200'
  },
  {
    id: 'space-navigator',
    title: 'Space Navigator',
    description: 'Navigate through spatial challenges',
    disorder: 'dyspraxia',
    type: 'motorSkills',
    difficulty: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=300&h=200'
  },

  // Dysphasia Games
  {
    id: 'word-builder',
    title: 'Word Builder',
    description: 'Construct words from syllables',
    disorder: 'dysphasia',
    type: 'speechPattern',
    difficulty: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&h=200'
  },
  {
    id: 'story-sequence',
    title: 'Story Sequencer',
    description: 'Arrange pictures to tell a story',
    disorder: 'dysphasia',
    type: 'speechPattern',
    difficulty: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=300&h=200'
  },

  // Auditory Processing Games
  {
    id: 'sound-match',
    title: 'Sound Matcher',
    description: 'Match similar sounds and patterns',
    disorder: 'auditory',
    type: 'soundDiscrimination',
    difficulty: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=300&h=200'
  },
  {
    id: 'rhythm-repeat',
    title: 'Rhythm Repeater',
    description: 'Remember and repeat sound patterns',
    disorder: 'auditory',
    type: 'soundDiscrimination',
    difficulty: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=300&h=200'
  },

  // Visual Processing Games
  {
    id: 'pattern-find',
    title: 'Pattern Finder',
    description: 'Identify patterns in visual sequences',
    disorder: 'visual',
    type: 'visualMemory',
    difficulty: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1509909756405-be0199881695?auto=format&fit=crop&w=300&h=200'
  },
  {
    id: 'visual-memory',
    title: 'Memory Master',
    description: 'Remember and match visual patterns',
    disorder: 'visual',
    type: 'visualMemory',
    difficulty: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=300&h=200'
  },

  // Nonverbal Learning Games
  {
    id: 'emotion-match',
    title: 'Emotion Matcher',
    description: 'Match facial expressions to emotions',
    disorder: 'nonverbal',
    type: 'socialCues',
    difficulty: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=300&h=200'
  },
  {
    id: 'social-scenes',
    title: 'Social Scene Explorer',
    description: 'Interpret social situations and cues',
    disorder: 'nonverbal',
    type: 'socialCues',
    difficulty: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=300&h=200'
  }
];