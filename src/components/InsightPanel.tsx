
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, ChevronRight, Loader2 } from 'lucide-react';

interface InsightPanelProps {
  insights: string[];
  isAnalyzing: boolean;
}

const InsightPanel: React.FC<InsightPanelProps> = ({ insights, isAnalyzing }) => {
  return (
    <Card className="bg-white/90 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-gray-800 dark:text-white">
          <span>Communication Insights</span>
          {isAnalyzing && (
            <Loader2 className="h-4 w-4 animate-spin text-blue-600 dark:text-blue-400" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isAnalyzing ? (
          <div className="flex items-center justify-center h-48">
            <div className="text-center text-gray-600 dark:text-gray-300">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <p>Generating insights...</p>
            </div>
          </div>
        ) : insights && insights.length > 0 ? (
          <ul className="space-y-3">
            {insights.map((insight, index) => (
              <li 
                key={index} 
                className="flex items-start p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-2 flex-shrink-0">
                  <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-gray-800 dark:text-gray-200 text-sm">{insight}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center h-48">
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>No insights available yet</p>
              <p className="text-sm mt-2">Start the analysis to receive communication insights</p>
            </div>
          </div>
        )}
        
        {insights && insights.length > 0 && (
          <div className="mt-6">
            <button className="w-full flex items-center justify-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <span>View detailed analysis</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InsightPanel;
