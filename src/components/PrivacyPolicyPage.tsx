import React from 'react';
import { translations } from '../data/translations';

interface PrivacyPolicyPageProps {
  currentLanguage: string;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="tesla-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8">
              Privacy Policy
            </h1>
            <p className="text-xl tesla-subheading">
              Last updated: January 27, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">1. Information We Collect</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  At Palm Signature Real Estate, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fill out our contact forms or investment inquiry forms</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Contact us via phone, email, or WhatsApp</li>
                  <li>Schedule consultations or property viewings</li>
                  <li>Participate in surveys or promotional activities</li>
                </ul>
                <p>
                  The types of information we may collect include your name, email address, phone number, 
                  investment preferences, financial information relevant to property purchases, and any other 
                  information you choose to provide.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">2. How We Use Your Information</h2>
              <div className="tesla-subheading space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our real estate services</li>
                  <li>Process and respond to your inquiries and requests</li>
                  <li>Send you property listings, market updates, and investment opportunities</li>
                  <li>Schedule and conduct property viewings and consultations</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                  <li>Protect against fraud and ensure transaction security</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">3. Information Sharing and Disclosure</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With property developers and partners when necessary to facilitate transactions</li>
                  <li>With legal and financial professionals involved in property transactions</li>
                  <li>To comply with legal obligations or respond to lawful requests</li>
                  <li>To protect our rights, property, or safety, or that of our clients</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">4. Data Security</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of sensitive data during transmission and storage</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Staff training on data protection and privacy practices</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">5. Your Rights and Choices</h2>
              <div className="tesla-subheading space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at info@palmsignature.ae or +971 58 247 4950.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">6. Cookies and Tracking Technologies</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  These technologies help us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Improve our website functionality and performance</li>
                  <li>Provide personalized content and recommendations</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">7. International Data Transfers</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  As we operate in the UAE and serve international clients, your information may be 
                  transferred to and processed in countries other than your country of residence. 
                  We ensure appropriate safeguards are in place to protect your information in accordance 
                  with applicable data protection laws.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">8. Changes to This Privacy Policy</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material 
                  changes by posting the new Privacy Policy on our website and updating the "Last updated" 
                  date at the top of this policy.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">9. Contact Information</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, 
                  please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>Palm Signature Real Estate LLC</strong></p>
                  <p>Email: info@palmsignature.ae</p>
                  <p>Phone: +971 58 247 4950</p>
                  <p>Address: Al Marjan Island, Ras Al Khaimah, UAE</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};