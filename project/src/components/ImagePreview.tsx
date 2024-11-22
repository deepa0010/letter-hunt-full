import React from 'react';
import { X } from 'lucide-react';

interface ImagePreviewProps {
  imageUrl: string;
  onRemove: () => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl, onRemove }) => {
  return (
    <div className="relative rounded-lg border border-gray-200 p-2">
      <button
        onClick={onRemove}
        className="absolute -right-2 -top-2 rounded-full bg-white p-1 shadow-md hover:bg-gray-100"
      >
        <X className="h-4 w-4 text-gray-500" />
      </button>
      <img
        src={imageUrl}
        alt="EEG Signal"
        className="h-full w-full rounded object-contain"
      />
    </div>
  );
};