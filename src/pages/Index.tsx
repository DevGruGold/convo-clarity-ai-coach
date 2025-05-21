
import React from 'react';
import Layout from '@/components/Layout';
import VideoAnalyzer from '@/components/VideoAnalyzer';
import Hero from '@/components/Hero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Hero />
        
        <Tabs defaultValue="live" className="w-full mt-8">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="live">Live Analysis</TabsTrigger>
            <TabsTrigger value="upload">Upload Video</TabsTrigger>
          </TabsList>
          
          <TabsContent value="live" className="mt-4">
            <VideoAnalyzer mode="live" />
          </TabsContent>
          
          <TabsContent value="upload" className="mt-4">
            <VideoAnalyzer mode="upload" />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Index;
