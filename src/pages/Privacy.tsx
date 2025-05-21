
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Effective Date: May 21, 2025
            </p>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">1. Introduction</h2>
              <p>
                Welcome to Negoti8's Privacy Policy. This document explains how we collect, use, and protect your personal information when you use our communication analysis platform.
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as when you create an account, upload content, or interact with our services. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Account information (name, email, password)</li>
                <li>Profile information (biography, preferences)</li>
                <li>Video and audio content for analysis</li>
                <li>Communication data and metadata</li>
                <li>Usage information and analytics</li>
              </ul>
            </section>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">3. How We Use Your Information</h2>
              <p>
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide and improve our services</li>
                <li>Analyze communication patterns</li>
                <li>Generate insights and recommendations</li>
                <li>Customize your experience</li>
                <li>Communicate with you about our services</li>
              </ul>
            </section>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. All analysis data is encrypted both in transit and at rest.
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">5. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access to your data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </section>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@negoti8.com.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Privacy;
