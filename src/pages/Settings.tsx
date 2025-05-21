
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Sliders, User, Bell, Shield, Key } from 'lucide-react';

const Settings = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        
        <Tabs defaultValue="account" className="w-full">
          <div className="flex overflow-x-auto pb-2 mb-6">
            <TabsList className="inline-flex h-auto p-1 bg-gray-800">
              <TabsTrigger value="account" className="data-[state=active]:bg-gray-700">
                <User className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger value="preferences" className="data-[state=active]:bg-gray-700">
                <Sliders className="h-4 w-4 mr-2" />
                Preferences
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-gray-700">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy" className="data-[state=active]:bg-gray-700">
                <Shield className="h-4 w-4 mr-2" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="api" className="data-[state=active]:bg-gray-700">
                <Key className="h-4 w-4 mr-2" />
                API Keys
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="account" className="space-y-6">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your account details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" className="bg-gray-700 border-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="bg-gray-700 border-gray-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea 
                    id="bio" 
                    rows={3} 
                    placeholder="Brief description about yourself"
                    className="w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-sm"
                  />
                </div>
                <div className="flex justify-end">
                  <Button className="bg-negoti8-primary hover:bg-negoti8-primary/80">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="api" className="space-y-6">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <CardTitle>Gemini API Configuration</CardTitle>
                <CardDescription>
                  Configure your API keys for AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="apiKey">Gemini API Key</Label>
                  <div className="flex space-x-2">
                    <Input 
                      id="apiKey" 
                      type="password" 
                      placeholder="Enter your Gemini API key" 
                      className="bg-gray-700 border-gray-600 flex-1"
                    />
                    <Button variant="outline">Validate</Button>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Your API key is stored securely and only used for AI analysis requests
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label>AI Model</Label>
                  <RadioGroup defaultValue="gemini-pro">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="gemini-pro" id="gemini-pro" />
                      <Label htmlFor="gemini-pro" className="cursor-pointer">Gemini 2.5 Pro</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gemini-ultra" id="gemini-ultra" />
                      <Label htmlFor="gemini-ultra" className="cursor-pointer">Gemini Ultra</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="flex justify-end">
                  <Button className="bg-negoti8-primary hover:bg-negoti8-primary/80">
                    Save API Configuration
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferences" className="space-y-6">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <CardTitle>Analysis Preferences</CardTitle>
                <CardDescription>
                  Customize your analysis experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Real-time Analysis</p>
                    <p className="text-sm text-gray-400">Analyze nonverbal cues continuously during sessions</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Face Detection Highlights</p>
                    <p className="text-sm text-gray-400">Show bounding boxes around detected faces</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Audio Analysis</p>
                    <p className="text-sm text-gray-400">Include voice tone and speech pattern analysis</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">High Precision Mode</p>
                    <p className="text-sm text-gray-400">More accurate but slower analysis</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex justify-end">
                  <Button className="bg-negoti8-primary hover:bg-negoti8-primary/80">
                    Save Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Manage your notification preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Analysis Completed</p>
                    <p className="text-sm text-gray-400">Get notified when an analysis session is completed</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Insights</p>
                    <p className="text-sm text-gray-400">Receive updates when important insights are detected</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Weekly Reports</p>
                    <p className="text-sm text-gray-400">Get weekly communication skill improvement reports</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-400">Send notifications to your email</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex justify-end">
                  <Button className="bg-negoti8-primary hover:bg-negoti8-primary/80">
                    Save Notification Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacy" className="space-y-6">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>
                  Control how your data is used and stored
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Store Analysis Data</p>
                    <p className="text-sm text-gray-400">Save your analysis data for future reference</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Store Video Recordings</p>
                    <p className="text-sm text-gray-400">Save video sessions (encrypted) for review</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Data Contribution</p>
                    <p className="text-sm text-gray-400">Contribute anonymized data to improve our AI models</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="pt-4">
                  <Button variant="destructive">Delete All My Data</Button>
                </div>
                
                <div className="flex justify-end">
                  <Button className="bg-negoti8-primary hover:bg-negoti8-primary/80">
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
