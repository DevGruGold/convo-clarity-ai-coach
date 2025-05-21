
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, LineChart, BarChart3, Bookmark, Users, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-400 mt-1">Track your communication insights and progress</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button className="bg-negoti8-primary hover:bg-negoti8-primary/80">
              <Video className="mr-2 h-4 w-4" />
              New Analysis Session
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="saved">Saved Insights</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Total Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline space-x-2">
                    <div className="text-3xl font-bold">12</div>
                    <div className="text-green-500 text-sm">+3 this week</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Analysis Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline space-x-2">
                    <div className="text-3xl font-bold">5.8h</div>
                    <div className="text-green-500 text-sm">+1.2h this week</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Avg. Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline space-x-2">
                    <div className="text-3xl font-bold">78%</div>
                    <div className="text-green-500 text-sm">+5% improvement</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <CardHeader>
                  <CardTitle>Engagement Trends</CardTitle>
                  <CardDescription>Your communication engagement over time</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-gray-500" />
                  <span className="ml-4 text-gray-400">Chart visualization would appear here</span>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <CardHeader>
                  <CardTitle>Emotion Distribution</CardTitle>
                  <CardDescription>How your audience responds emotionally</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-gray-500" />
                  <span className="ml-4 text-gray-400">Chart visualization would appear here</span>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="space-y-6">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <CardTitle>Recent Sessions</CardTitle>
                <CardDescription>Your latest analysis sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((session) => (
                    <div 
                      key={session}
                      className="flex items-center justify-between p-4 rounded-md hover:bg-gray-700/50 transition-colors border border-gray-700"
                    >
                      <div className="flex items-center">
                        <div className="bg-negoti8-primary/20 p-2 rounded-full mr-4">
                          <Users className="h-5 w-5 text-negoti8-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Negotiation Session #{5-session}</h4>
                          <div className="flex items-center text-sm text-gray-400 mt-1">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            <span className="mr-3">May {20-session}, 2025</span>
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            <span>{session === 1 ? '14:30' : session === 2 ? '10:15' : session === 3 ? '16:45' : '09:00'}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-center">
                  <Button variant="outline">Load More</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="saved" className="space-y-6">
            <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <CardHeader>
                <CardTitle>Saved Insights</CardTitle>
                <CardDescription>Your bookmarked analysis insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2].map((insight) => (
                    <div 
                      key={insight}
                      className="p-4 rounded-md hover:bg-gray-700/50 transition-colors border border-gray-700"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className="bg-negoti8-accent/20 p-2 rounded-full mr-4">
                            <Bookmark className="h-5 w-5 text-negoti8-accent" />
                          </div>
                          <div>
                            <h4 className="font-medium">Key Insight #{insight}</h4>
                            <p className="text-sm text-gray-300 mt-2">
                              {insight === 1 
                                ? "When discussing pricing, maintain positive body language to convey confidence in your offer."
                                : "Increased eye contact significantly improved trust perception by 37% during critical negotiation points."
                              }
                            </p>
                            <div className="flex items-center text-xs text-gray-400 mt-3">
                              <span>From: Negotiation Session #{insight}</span>
                              <span className="mx-2">•</span>
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>May {15+insight}, 2025</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Bookmark className="h-4 w-4 fill-current" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center h-40 border border-dashed border-gray-700 rounded-md mt-4">
                  <div className="text-center text-gray-400">
                    <p>Save insights from your analysis sessions</p>
                    <p className="text-sm mt-1">They'll appear here for future reference</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;
