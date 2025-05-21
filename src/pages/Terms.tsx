
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Effective Date: May 21, 2025
            </p>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Negoti8's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">2. Description of Service</h2>
              <p>
                Negoti8 provides AI-powered communication analysis tools and services designed to help users improve their interpersonal communication skills. Our services include real-time video analysis, nonverbal cue detection, and personalized insights.
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">3. User Accounts</h2>
              <p>
                To access certain features of our service, you must create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">4. Content and Conduct</h2>
              <p>
                You retain ownership of any content you upload to our service. However, by uploading content, you grant us a license to use, store, and analyze that content for the purpose of providing our services to you.
              </p>
              <p>
                You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services.
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">5. Subscription and Billing</h2>
              <p>
                Some features of our service require a paid subscription. By subscribing to a paid plan, you agree to pay all fees associated with your selected subscription. Subscriptions automatically renew unless canceled before the renewal date.
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">6. Limitation of Liability</h2>
              <p>
                Negoti8 and its suppliers shall not be liable for any damages arising out of or in connection with the use or inability to use our services. This includes but is not limited to direct, indirect, incidental, consequential, and punitive damages.
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">7. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will provide notice of significant changes through our website or via email. Your continued use of our services following any changes constitutes acceptance of those changes.
              </p>
            </section>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">8. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at terms@negoti8.com.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Terms;
