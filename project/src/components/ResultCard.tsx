import React from 'react';
import { Brain, Activity, AlertCircle } from 'lucide-react';

interface ResultCardProps {
  emotion: string;
  confidence: number;
  isLoading?: boolean;
}

export const ResultCard: React.FC<ResultCardProps> = ({ 
  emotion, 
  confidence,
  isLoading = false 
}) => {
  const getEmotionColor = () => {
    switch (emotion.toLowerCase()) {
      case 'positive':
        return 'bg-green-100 text-green-800';
      case 'negative':
        return 'bg-red-100 text-red-800';
      case 'neutral':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="animate-pulse rounded-lg bg-white p-6 shadow-lg">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-4">
            <div className="h-4 w-3/4 rounded bg-gray-200"></div>
            <div className="h-4 w-1/2 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-gray-100 p-3">
            <Brain className="h-6 w-6 text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Detected Emotion
            </h3>
            <div className={`mt-1 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getEmotionColor()}`}>
              {emotion}
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Confidence</p>
          <p className="text-2xl font-bold text-gray-900">
            {(confidence * 100).toFixed(1)}%
          </p>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-500">Signal Quality</span>
          </div>
          <span className="text-sm font-medium text-gray-900">Good</span>
        </div>
        
        <div className="mt-4 flex items-center space-x-2">
          <AlertCircle className="h-4 w-4 text-yellow-500" />
          <p className="text-sm text-gray-500">
            This is a demonstration. For production use, connect to your deployed model API.
          </p>
        </div>
      </div>
    </div>
  );
};