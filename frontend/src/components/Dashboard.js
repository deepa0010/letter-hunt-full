import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = ({ userId }) => {
  const [stats, setStats] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, sessionsRes] = await Promise.all([
          axios.get(`http://localhost:3000/api/sessions/${userId}/stats`),
          axios.get(`http://localhost:3000/api/sessions/${userId}`)
        ]);
        
        setStats(statsRes.data);
        setSessions(sessionsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <div className="stats-cards">
        <div className="stat-card">
          <h3>Average Score</h3>
          <p>{stats?.avgScore?.toFixed(2) || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Highest Score</h3>
          <p>{stats?.maxScore || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Total Games</h3>
          <p>{stats?.totalGames || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Letters Found</h3>
          <p>{stats?.totalLettersFound || 0}</p>
        </div>
      </div>

      <div className="progress-chart">
        <h3>Score Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sessions}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="completedAt" 
              tickFormatter={(date) => new Date(date).toLocaleDateString()}
            />
            <YAxis />
            <Tooltip 
              labelFormatter={(date) => new Date(date).toLocaleString()}
            />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke="#8884d8" 
              name="Score"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
