require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const GameSession = require('./models/GameSession');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/sessions', async (req, res) => {
  try {
    const gameSession = new GameSession(req.body);
    await gameSession.save();
    res.status(201).json(gameSession);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/sessions/:userId', async (req, res) => {
  try {
    const sessions = await GameSession.find({ userId: req.params.userId })
      .sort({ completedAt: -1 });
    res.json(sessions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/sessions/:userId/stats', async (req, res) => {
  try {
    const stats = await GameSession.aggregate([
      { $match: { userId: mongoose.Types.ObjectId(req.params.userId) } },
      { 
        $group: {
          _id: null,
          avgScore: { $avg: '$score' },
          maxScore: { $max: '$score' },
          totalGames: { $sum: 1 },
          totalLettersFound: { $sum: '$lettersFound' }
        }
      }
    ]);
    res.json(stats[0] || {});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
