
import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Upload, Play, Pause, AlertCircle } from 'lucide-react';
import FacialAnalysisDisplay from './FacialAnalysisDisplay';
import InsightPanel from './InsightPanel';
import { useToast } from '@/components/ui/use-toast';

interface VideoAnalyzerProps {
  mode: 'live' | 'upload';
}

const VideoAnalyzer: React.FC<VideoAnalyzerProps> = ({ mode }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysisData, setAnalysisData] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [faceDetected, setFaceDetected] = useState(false);
  const { toast } = useToast();

  // This would be replaced with actual face detection logic
  const mockDetectFace = () => {
    // Simulate face detection with 80% chance of success
    const detected = Math.random() > 0.2;
    setFaceDetected(detected);
    return detected;
  };

  // This would be replaced with actual AI analysis
  const mockAnalyzeFrame = async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return {
      emotions: {
        primary: Math.random() > 0.5 ? 'neutral' : 'interested',
        secondary: Math.random() > 0.7 ? 'confusion' : 'engagement',
        confidence: 0.78 + Math.random() * 0.2
      },
      engagement: {
        score: 0.6 + Math.random() * 0.3,
        trend: Math.random() > 0.5 ? 'increasing' : 'stable'
      },
      insights: [
        "The person appears to be engaged but may be hesitating before responding",
        "Brief moments of micro-expressions suggest uncertainty",
        "Maintain eye contact to build trust during this conversation"
      ],
      timestamp: new Date().toISOString()
    };
  };

  const captureFrame = () => {
    if (videoRef.current && canvasRef.current && faceDetected) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // This is where we'd send the frame to the AI service
        setIsAnalyzing(true);
        mockAnalyzeFrame().then(data => {
          setAnalysisData(data);
          setIsAnalyzing(false);
        });
      }
    } else {
      console.log("No face detected or video element not ready");
    }
  };

  const handleStartLiveAnalysis = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user"
        }, 
        audio: false 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsRecording(true);
        toast({
          title: "Camera started",
          description: "Your camera is now active and ready for analysis.",
        });
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      toast({
        variant: "destructive",
        title: "Camera access denied",
        description: "Please allow camera access to use live analysis.",
      });
    }
  };

  const handleStopLiveAnalysis = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      
      tracks.forEach(track => {
        track.stop();
      });
      
      videoRef.current.srcObject = null;
      setIsRecording(false);
      setFaceDetected(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      
      if (videoRef.current) {
        videoRef.current.src = URL.createObjectURL(event.target.files[0]);
      }
      
      toast({
        title: "Video uploaded",
        description: "Your video is ready for analysis.",
      });
    }
  };

  // Periodically check for faces and analyze when faces are detected
  useEffect(() => {
    if (!isRecording) return;
    
    const faceDetectionInterval = setInterval(() => {
      if (isRecording && videoRef.current) {
        const detected = mockDetectFace();
        if (detected && !isAnalyzing) {
          captureFrame();
        }
      }
    }, 3000); // Check for faces every 3 seconds
    
    return () => {
      clearInterval(faceDetectionInterval);
    };
  }, [isRecording, isAnalyzing]);

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <Card className="md:col-span-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 overflow-hidden">
        <div className="aspect-video relative">
          <video 
            ref={videoRef}
            autoPlay={isRecording}
            playsInline
            muted
            className="w-full h-full object-cover"
          />
          
          {!isRecording && !selectedFile && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80">
              {mode === 'live' ? (
                <>
                  <Camera className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-300 text-lg mb-4">Camera not active</p>
                  <Button 
                    onClick={handleStartLiveAnalysis} 
                    className="bg-negoti8-primary hover:bg-negoti8-primary/80"
                  >
                    Start Camera
                  </Button>
                </>
              ) : (
                <>
                  <Upload className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-300 text-lg mb-4">Upload a video to analyze</p>
                  <Button 
                    onClick={() => document.getElementById('video-upload')?.click()}
                    className="bg-negoti8-primary hover:bg-negoti8-primary/80"
                  >
                    Select Video
                  </Button>
                  <input
                    id="video-upload"
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </>
              )}
            </div>
          )}
          
          {isRecording && !faceDetected && (
            <div className="absolute top-4 left-4 bg-red-500/80 text-white px-3 py-1 rounded-full flex items-center text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              No face detected
            </div>
          )}
          
          {isRecording && faceDetected && (
            <div className="absolute top-4 left-4 bg-green-500/80 text-white px-3 py-1 rounded-full flex items-center text-sm">
              <div className="h-2 w-2 bg-white rounded-full mr-2 animate-pulse" />
              Face detected
            </div>
          )}
          
          {isRecording && (
            <div className="absolute bottom-4 right-4">
              <Button 
                variant="destructive" 
                size="sm"
                onClick={handleStopLiveAnalysis}
              >
                <Pause className="h-4 w-4 mr-1" /> Stop
              </Button>
            </div>
          )}
          
          {selectedFile && !isRecording && (
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button 
                variant="default" 
                size="sm"
                className="bg-negoti8-secondary"
                onClick={() => videoRef.current?.play()}
              >
                <Play className="h-4 w-4 mr-1" /> Play
              </Button>
              <Button 
                variant="destructive" 
                size="sm"
                onClick={() => {
                  setSelectedFile(null);
                  if (videoRef.current) videoRef.current.src = "";
                }}
              >
                Clear
              </Button>
            </div>
          )}
        </div>
        
        <canvas ref={canvasRef} className="hidden" />
      </Card>
      
      <div className="space-y-6">
        <FacialAnalysisDisplay 
          analysisData={analysisData} 
          isAnalyzing={isAnalyzing}
          faceDetected={faceDetected && isRecording}
        />
        
        <InsightPanel 
          insights={analysisData?.insights || []}
          isAnalyzing={isAnalyzing}
        />
      </div>
    </div>
  );
};

export default VideoAnalyzer;
