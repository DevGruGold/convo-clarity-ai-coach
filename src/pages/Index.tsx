
import React from 'react';
import Layout from '@/components/Layout';
import VideoAnalyzer from '@/components/VideoAnalyzer';
import Hero from '@/components/Hero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Hero />
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="live" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="live" className="text-sm md:text-base">Live Analysis</TabsTrigger>
              <TabsTrigger value="upload" className="text-sm md:text-base">Upload Video</TabsTrigger>
            </TabsList>
            
            <TabsContent value="live" className="mt-4">
              <VideoAnalyzer mode="live" />
            </TabsContent>
            
            <TabsContent value="upload" className="mt-4">
              <VideoAnalyzer mode="upload" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
