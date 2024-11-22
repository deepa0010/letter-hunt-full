import React from 'react';
import { Activity } from 'lucide-react';

interface EngagementMeterProps {
  level: number;
}

export const EngagementMeter: React.FC<EngagementMeterProps> = ({ level }) => {
  const getColor = () => {
    if (level > 80) return 'text-green-500';
    if (level > 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="flex items-center gap-2">
      <Activity className={`w-6 h-6 ${getColor()}`} />
      <div className="w-32 h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${getColor()} bg-current transition-all duration-500`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};