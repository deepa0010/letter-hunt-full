import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const buttonStyle = {
  padding: '8px 16px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#4F46E5',
  color: 'white',
  cursor: 'pointer',
  fontSize: '16px',
  margin: '4px'
};

const cardStyle = {
  border: '1px solid #E5E7EB',
  borderRadius: '8px',
  padding: '16px',
  marginBottom: '16px',
  backgroundColor: 'white',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12)'
};

const LetterHuntGame = () => {
  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [targetLetter, setTargetLetter] = useState('');
  const [letters, setLetters] = useState([]);
  const [progressData, setProgressData] = useState(() => {
    const saved = localStorage.getItem('letterHuntProgress');
    return saved ? JSON.parse(saved) : [];
  });

  const generateLetters = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newTarget = alphabet[Math.floor(Math.random() * alphabet.length)];
    setTargetLetter(newTarget);
    
    let newLetters = [];
    // Add target letter 3 times
    for (let i = 0; i < 3; i++) {
      newLetters.push({
        letter: newTarget,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        isTarget: true,
      });
    }
    
    // Add 7 random different letters
    for (let i = 0; i < 7; i++) {
      let randomLetter;
      do {
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      } while (randomLetter === newTarget);
      
      newLetters.push({
        letter: randomLetter,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        isTarget: false,
      });
    }
    
    setLetters(newLetters);
  };

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(60);
    generateLetters();
  };

  const handleLetterClick = (letter) => {
    if (gameState !== 'playing') return;
    
    if (letter.isTarget) {
      setScore(prev => prev + 10);
      generateLetters();
    } else {
      setScore(prev => Math.max(0, prev - 5));
    }
  };

  useEffect(() => {
    localStorage.setItem('letterHuntProgress', JSON.stringify(progressData));
  }, [progressData]);

  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('completed');
      const newProgress = {
        date: new Date().toLocaleDateString(),
        score: score
      };
      setProgressData(prev => [...prev, newProgress]);
    }
    return () => clearInterval(timer);
  }, [timeLeft, gameState, score]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '16px' }}>
      <div style={cardStyle}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Letter Hunt Game</h2>
        
        {gameState === 'menu' && (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Welcome to Letter Hunt!</h3>
            <button style={buttonStyle} onClick={startGame}>Start Game</button>
          </div>
        )}
        
        {gameState === 'playing' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div>Score: {score}</div>
              <div>Time Left: {timeLeft}s</div>
              <div>Find the letter: <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{targetLetter}</span></div>
            </div>
            
            <div style={{ position: 'relative', width: '100%', height: '400px', backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
              {letters.map((letter, index) => (
                <button
                  key={index}
                  style={{
                    ...buttonStyle,
                    position: 'absolute',
                    left: `${letter.x}%`,
                    top: `${letter.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onClick={() => handleLetterClick(letter)}
                >
                  {letter.letter}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {gameState === 'completed' && (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Game Over!</h3>
            <p>Your score: {score}</p>
            <button style={buttonStyle} onClick={startGame}>Play Again</button>
          </div>
        )}
      </div>

      <div style={cardStyle}>
        <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LetterHuntGame;
