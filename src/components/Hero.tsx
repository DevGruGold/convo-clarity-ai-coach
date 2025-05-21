
import React from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Sparkles, Activity, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <div className="py-12 md:py-20 text-center">
      <div className="inline-flex items-center justify-center p-1 mb-6 rounded-full bg-gradient-to-r from-negoti8-primary/20 to-negoti8-accent/20 text-negoti8-text">
        <div className="px-3 py-1 text-sm font-medium flex items-center">
          <Sparkles className="h-4 w-4 mr-2 text-negoti8-accent" /> 
          Powered by Gemini 2.5 Pro
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-negoti8-primary via-negoti8-secondary to-negoti8-accent bg-clip-text text-transparent">
        Master Nonverbal Communication
      </h1>
      
      <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300">
        Negoti8 analyzes facial expressions, body language, and vocal tones in real-time to help you read between the lines and navigate difficult conversations.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-negoti8-primary/50 transition-all">
          <div className="bg-negoti8-primary/20 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <Brain className="h-6 w-6 text-negoti8-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
          <p className="text-gray-400">Leverage advanced AI to decode subtle facial expressions and gestures</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-negoti8-secondary/50 transition-all">
          <div className="bg-negoti8-secondary/20 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <Activity className="h-6 w-6 text-negoti8-secondary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Real-Time Feedback</h3>
          <p className="text-gray-400">Get instant insights during video calls or from uploaded recordings</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-negoti8-accent/50 transition-all">
          <div className="bg-negoti8-accent/20 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-negoti8-accent" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Improve Your Skills</h3>
          <p className="text-gray-400">Enhance your communication effectiveness with actionable suggestions</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
