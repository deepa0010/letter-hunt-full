const mongoose = require('mongoose');

const gameSessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  lettersFound: {
    type: Number,
    required: true
  },
  mistakes: {
    type: Number,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'easy'
  },
  completedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('GameSession', gameSessionSchema);
