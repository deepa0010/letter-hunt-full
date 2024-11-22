import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { FileUpload } from './components/FileUpload';
import { ImagePreview } from './components/ImagePreview';
import { ResultCard } from './components/ResultCard';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ emotion: string; confidence: number } | null>(null);

  const handleFileSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
      analyzeImage();
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    // Simulate API call to your Python backend
    setTimeout(() => {
      const mockResults = [
        { emotion: 'Positive', confidence: 0.85 },
        { emotion: 'Neutral', confidence: 0.75 },
        { emotion: 'Negative', confidence: 0.92 }
      ];
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setResult(randomResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="rounded-full bg-blue-100 p-3">
              <Brain className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
            EEG Emotion Analyzer
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Upload your EEG signal image to analyze emotional patterns
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-gray-900">
                Upload EEG Signal
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Supported formats: PNG, JPG, JPEG
              </p>
              <div className="mt-4">
                {selectedImage ? (
                  <ImagePreview
                    imageUrl={selectedImage}
                    onRemove={() => {
                      setSelectedImage(null);
                      setResult(null);
                    }}
                  />
                ) : (
                  <FileUpload onFileSelect={handleFileSelect} />
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900">
                How it works
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                    1
                  </span>
                  <span className="text-gray-700">
                    Upload your EEG signal image
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                    2
                  </span>
                  <span className="text-gray-700">
                    Our AI model analyzes the signal patterns
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                    3
                  </span>
                  <span className="text-gray-700">
                    Get instant emotion prediction results
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="sticky top-6 space-y-6">
              {(isAnalyzing || result) && (
                <ResultCard
                  emotion={result?.emotion || ''}
                  confidence={result?.confidence || 0}
                  isLoading={isAnalyzing}
                />
              )}

              {/* Sample Results */}
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900">
                  About the Model
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Our deep learning model analyzes EEG signals to detect three primary emotional states:
                </p>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="rounded-lg bg-green-50 p-3 text-center">
                    <span className="text-sm font-medium text-green-800">
                      Positive
                    </span>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-3 text-center">
                    <span className="text-sm font-medium text-blue-800">
                      Neutral
                    </span>
                  </div>
                  <div className="rounded-lg bg-red-50 p-3 text-center">
                    <span className="text-sm font-medium text-red-800">
                      Negative
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;