
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Sliders, User, Bell, Shield, Key, Glasses } from 'lucide-react';

const Settings = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-50">Settings</h1>
        
        <Tabs defaultValue="account" className="w-full">
          <div className="flex overflow-x-auto pb-2 mb-6">
            <TabsList className="inline-flex h-auto p-1 bg-gray-100 dark:bg-gray-800">
              <TabsTrigger value="account" className="text-gray-800 dark:text-gray-200 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                <User className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger value="preferences" className="text-gray-800 dark:text-gray-200 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                <Sliders className="h-4 w-4 mr-2" />
                Preferences
              </TabsTrigger>
              <TabsTrigger value="notifications" className="text-gray-800 dark:text-gray-200 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy" className="text-gray-800 dark:text-gray-200 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                <Shield className="h-4 w-4 mr-2" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="glasses" className="text-gray-800 dark:text-gray-200 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                <Glasses className="h-4 w-4 mr-2" />
                XMRT Glasses
              </TabsTrigger>
              <TabsTrigger value="api" className="text-gray-800 dark:text-gray-200 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                <Key className="h-4 w-4 mr-2" />
                API Keys
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="account" className="space-y-6">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">Profile Information</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Update your account details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-200">Full Name</Label>
                    <Input id="name" placeholder="Your name" className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-200">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-gray-700 dark:text-gray-200">Bio</Label>
                  <textarea 
                    id="bio" 
                    rows={3} 
                    placeholder="Brief description about yourself"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-2 text-gray-800 dark:text-gray-200 text-sm"
                  />
                </div>
                <div className="flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="glasses" className="space-y-6">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">XMRT Glasses Connection</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Manage your XMRT Glasses device connection and settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-100">XMRT Glasses Pro</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Not Connected</p>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Connect</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">Auto-Connect on Startup</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Automatically connect to your glasses when available</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">Real-time Streaming</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Stream live video feed from glasses camera</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">Gesture Controls</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Control analysis with gesture commands</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Save Glasses Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="api" className="space-y-6">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">Gemini API Configuration</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Configure your API keys for AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="apiKey" className="text-gray-700 dark:text-gray-200">Gemini API Key</Label>
                  <div className="flex space-x-2">
                    <Input 
                      id="apiKey" 
                      type="password" 
                      placeholder="Enter your Gemini API key" 
                      className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 flex-1"
                    />
                    <Button variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200">Validate</Button>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Your API key is stored securely and only used for AI analysis requests
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-gray-700 dark:text-gray-200">AI Model</Label>
                  <RadioGroup defaultValue="gemini-pro">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="gemini-pro" id="gemini-pro" />
                      <Label htmlFor="gemini-pro" className="cursor-pointer text-gray-700 dark:text-gray-200">Gemini 2.5 Pro</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gemini-ultra" id="gemini-ultra" />
                      <Label htmlFor="gemini-ultra" className="cursor-pointer text-gray-700 dark:text-gray-200">Gemini Ultra</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Save API Configuration
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferences" className="space-y-6">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">Analysis Preferences</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Customize your analysis experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">Real-time Analysis</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Analyze nonverbal cues continuously during sessions</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">Face Detection Highlights</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Show bounding boxes around detected faces</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">Audio Analysis</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Include voice tone and speech pattern analysis</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">High Precision Mode</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">More accurate but slower analysis</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Save Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">Notification Settings</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Manage your notification preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">Analysis Completed</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Get notified when an analysis session is completed</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">New Insights</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates when important insights are detected</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">Weekly Reports</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Get weekly communication skill improvement reports</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">Email Notifications</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Send notifications to your email</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Save Notification Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacy" className="space-y-6">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">Privacy Settings</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Control how your data is used and stored
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">Store Analysis Data</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Save your analysis data for future reference</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">Store Video Recordings</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Save video sessions (encrypted) for review</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">Data Contribution</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Contribute anonymized data to improve our AI models</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="pt-4">
                  <Button variant="destructive">Delete All My Data</Button>
                </div>
                
                <div className="flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Save Privacy Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
