import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { VideoIcon, StopCircle, Camera, Loader2, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface AnalysisSessionProps {
  onClose: () => void;
}

interface AnalysisResult {
  confidence: number;
  emotions: string[];
  engagement: number;
  nonverbalCues: string[];
  insights: string[];
  timestamp: number;
}

const AnalysisSession: React.FC<AnalysisSessionProps> = ({ onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentAnalysis, setCurrentAnalysis] = useState<AnalysisResult | null>(null);
  const [sessionData, setSessionData] = useState<AnalysisResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  const { toast } = useToast();

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const startCamera = useCallback(async () => {
    try {
      setError(null);
      
      // Request rear-facing camera first, fallback to default
      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: { ideal: 'environment' }, // Rear-facing camera
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      };

      let stream: MediaStream;
      
      try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
      } catch (err) {
        // Fallback to default camera if rear-facing not available
        console.log('Rear camera not available, using default camera');
        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false
        });
      }

      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      
      setIsRecording(true);
      toast({
        title: "Camera Started",
        description: "XMRT Vision analysis session is now active"
      });
      
      // Start analysis interval
      startAnalysis();
      
    } catch (err) {
      console.error('Error accessing camera:', err);
      setError('Unable to access camera. Please check permissions.');
      toast({
        title: "Camera Error",
        description: "Unable to access camera. Please check permissions.",
        variant: "destructive"
      });
    }
  }, [toast]);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setIsRecording(false);
    setIsAnalyzing(false);
    
    toast({
      title: "Analysis Complete",
      description: `Session completed with ${sessionData.length + (currentAnalysis ? 1 : 0)} analyses`
    });
  }, [sessionData.length, currentAnalysis, toast]);

  const captureFrame = useCallback((): string | null => {
    if (!videoRef.current || !canvasRef.current) return null;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return null;
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    
    return canvas.toDataURL('image/jpeg', 0.8);
  }, []);

  const analyzeFrame = useCallback(async (imageData: string) => {
    try {
      setIsAnalyzing(true);
      
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      
      // Convert base64 to proper format for Gemini
      const base64Data = imageData.split(',')[1];
      
      const prompt = `Analyze this image for nonverbal communication cues and provide insights for XMRT Vision smart glasses. Focus on:

1. Facial expressions and emotions
2. Body language and posture
3. Engagement level (0-100%)
4. Key nonverbal cues
5. Communication insights

Respond in JSON format:
{
  "confidence": number (0-100),
  "emotions": ["emotion1", "emotion2"],
  "engagement": number (0-100),
  "nonverbalCues": ["cue1", "cue2"],
  "insights": ["insight1", "insight2"]
}`;

      const result = await model.generateContent([
        prompt,
        {
          inlineData: {
            data: base64Data,
            mimeType: 'image/jpeg'
          }
        }
      ]);
      
      const response = await result.response;
      const text = response.text();
      
      // Parse JSON response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const analysisData = JSON.parse(jsonMatch[0]);
        const newAnalysis: AnalysisResult = {
          ...analysisData,
          timestamp: Date.now()
        };
        
        setCurrentAnalysis(newAnalysis);
        setSessionData(prev => [...prev, newAnalysis]);
      }
      
    } catch (err) {
      console.error('Analysis error:', err);
      setError('Analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  }, [genAI]);

  const startAnalysis = useCallback(() => {
    intervalRef.current = setInterval(() => {
      if (videoRef.current && !isAnalyzing) {
        const frame = captureFrame();
        if (frame) {
          analyzeFrame(frame);
        }
      }
    }, 3000); // Analyze every 3 seconds
  }, [captureFrame, analyzeFrame, isAnalyzing]);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-6 w-6" />
              XMRT Vision Analysis Session
            </CardTitle>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Camera Feed */}
          <div className="relative bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-64 object-cover"
              playsInline
              muted
            />
            <canvas ref={canvasRef} className="hidden" />
            
            {/* Recording Status */}
            {isRecording && (
              <div className="absolute top-4 left-4">
                <Badge variant="destructive" className="animate-pulse">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                  Recording
                </Badge>
              </div>
            )}
            
            {/* Analysis Status */}
            {isAnalyzing && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-600">
                  <Loader2 className="w-3 h-3 mr-2 animate-spin" />
                  Analyzing
                </Badge>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4">
            {!isRecording ? (
              <Button onClick={startCamera} className="bg-green-600 hover:bg-green-700">
                <VideoIcon className="mr-2 h-4 w-4" />
                Start Analysis
              </Button>
            ) : (
              <Button onClick={stopCamera} variant="destructive">
                <StopCircle className="mr-2 h-4 w-4" />
                Stop Analysis
              </Button>
            )}
          </div>

          {/* Error Display */}
          {error && (
            <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <span className="text-red-700 dark:text-red-300">{error}</span>
            </div>
          )}

          {/* Current Analysis */}
          {currentAnalysis && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Real-time Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Engagement Level</h4>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${currentAnalysis.engagement}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {currentAnalysis.engagement}%
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Confidence</h4>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-green-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${currentAnalysis.confidence}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {currentAnalysis.confidence}%
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Detected Emotions</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentAnalysis.emotions.map((emotion, index) => (
                      <Badge key={index} variant="secondary">
                        {emotion}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Nonverbal Cues</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {currentAnalysis.nonverbalCues.map((cue, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300">
                        {cue}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Key Insights</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {currentAnalysis.insights.map((insight, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300">
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Session Summary */}
          {sessionData.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Session Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      {sessionData.length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Analyses
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {Math.round(sessionData.reduce((acc, curr) => acc + curr.engagement, 0) / sessionData.length)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Avg Engagement
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {Math.round(sessionData.reduce((acc, curr) => acc + curr.confidence, 0) / sessionData.length)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Avg Confidence
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisSession;