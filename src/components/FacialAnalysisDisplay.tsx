
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, Minus, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface FacialAnalysisDisplayProps {
  analysisData: any;
  isAnalyzing: boolean;
  faceDetected: boolean;
}

const FacialAnalysisDisplay: React.FC<FacialAnalysisDisplayProps> = ({ 
  analysisData, 
  isAnalyzing,
  faceDetected 
}) => {
  const getEmotionColor = (emotion: string) => {
    switch (emotion) {
      case 'neutral': return 'bg-gray-500 text-white';
      case 'interested': return 'bg-blue-500 text-white';
      case 'engagement': return 'bg-green-500 text-white';
      case 'confusion': return 'bg-yellow-500 text-gray-900';
      default: return 'bg-purple-500 text-white';
    }
  };
  
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />;
      case 'decreasing': return <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-400" />;
      default: return <Minus className="h-4 w-4 text-gray-600 dark:text-gray-400" />;
    }
  };

  return (
    <Card className="bg-white/90 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-gray-800 dark:text-white">
          <span>Analysis</span>
          {isAnalyzing && (
            <Loader2 className="h-4 w-4 animate-spin text-blue-600 dark:text-blue-400" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!faceDetected && !analysisData ? (
          <div className="text-center py-8 text-gray-600 dark:text-gray-300">
            <p>Waiting for analysis to begin...</p>
            <p className="text-sm mt-2">Start the camera or upload a video to continue</p>
          </div>
        ) : isAnalyzing ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Analyzing facial expressions</span>
              </div>
              <Progress value={45} className="h-2 bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Processing gestures</span>
              </div>
              <Progress value={30} className="h-2 bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Generating insights</span>
              </div>
              <Progress value={15} className="h-2 bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        ) : analysisData ? (
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Detected Emotions</span>
                <span className="text-gray-800 dark:text-gray-200">{(analysisData.emotions.confidence * 100).toFixed(0)}% confidence</span>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <Badge className={cn("px-3 py-1", getEmotionColor(analysisData.emotions.primary))}>
                  {analysisData.emotions.primary}
                </Badge>
                <Badge variant="outline" className="px-3 py-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                  {analysisData.emotions.secondary}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Engagement Level</span>
                <div className="flex items-center">
                  <span className="text-gray-800 dark:text-gray-200 mr-1">
                    {(analysisData.engagement.score * 100).toFixed(0)}%
                  </span>
                  {getTrendIcon(analysisData.engagement.trend)}
                </div>
              </div>
              <Progress 
                value={analysisData.engagement.score * 100} 
                className="h-2 bg-gray-200 dark:bg-gray-700" 
              />
            </div>
            
            <div className="text-xs text-gray-500 dark:text-gray-400 pt-2 text-right">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default FacialAnalysisDisplay;
