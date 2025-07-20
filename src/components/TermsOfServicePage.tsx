import React from 'react';
import { translations } from '../data/translations';

interface TermsOfServicePageProps {
  currentLanguage: string;
}

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="tesla-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8">
              Terms of Service
            </h1>
            <p className="text-xl tesla-subheading">
              Last updated: January 27, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">1. Acceptance of Terms</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  By accessing and using the services of Palm Signature Real Estate LLC ("Company", "we", "us", or "our"), 
                  you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">2. Description of Services</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  Palm Signature Real Estate provides luxury real estate investment services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Property investment consultation and advisory services</li>
                  <li>Access to exclusive Al Marjan Island development opportunities</li>
                  <li>Property viewing and selection assistance</li>
                  <li>Transaction facilitation and support</li>
                  <li>Market analysis and investment guidance</li>
                  <li>After-sales support and property management referrals</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">3. Client Responsibilities</h2>
              <div className="tesla-subheading space-y-4">
                <p>As a client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information about your investment requirements</li>
                  <li>Conduct proper due diligence before making investment decisions</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Pay all agreed fees and commissions in a timely manner</li>
                  <li>Respect the confidentiality of proprietary information shared with you</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">4. Investment Risks and Disclaimers</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  <strong>Important:</strong> Real estate investments carry inherent risks. You acknowledge that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Property values can fluctuate and may decrease as well as increase</li>
                  <li>Past performance is not indicative of future results</li>
                  <li>Market conditions, economic factors, and regulatory changes can affect investments</li>
                  <li>You should seek independent financial and legal advice before investing</li>
                  <li>We do not guarantee specific returns or investment outcomes</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">5. Fees and Commissions</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  Our fees and commission structure will be clearly disclosed before any transaction. 
                  Standard terms include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Commission rates are typically paid by the developer or seller</li>
                  <li>Additional services may incur separate fees as agreed</li>
                  <li>All fees are subject to applicable UAE taxes</li>
                  <li>Payment terms will be specified in individual agreements</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">6. Confidentiality</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  We maintain strict confidentiality regarding client information and transactions. 
                  Similarly, clients agree to maintain confidentiality regarding:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proprietary market information and analysis</li>
                  <li>Developer pricing and terms not publicly available</li>
                  <li>Other clients' information and transactions</li>
                  <li>Internal business processes and strategies</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">7. Limitation of Liability</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  To the maximum extent permitted by law, Palm Signature Real Estate shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any indirect, incidental, or consequential damages</li>
                  <li>Investment losses or missed opportunities</li>
                  <li>Delays or changes in development projects</li>
                  <li>Actions or omissions of third parties (developers, contractors, etc.)</li>
                  <li>Market fluctuations or economic conditions</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">8. Regulatory Compliance</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  Palm Signature Real Estate operates under UAE regulations and holds appropriate licenses:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>RERA (Real Estate Regulatory Agency) licensed</li>
                  <li>Compliant with UAE real estate laws and regulations</li>
                  <li>Adherent to anti-money laundering (AML) requirements</li>
                  <li>Subject to regular regulatory oversight and audits</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">9. Dispute Resolution</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  Any disputes arising from these terms or our services shall be:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>First addressed through good faith negotiations</li>
                  <li>Subject to mediation if direct negotiation fails</li>
                  <li>Governed by UAE law and jurisdiction</li>
                  <li>Resolved in the courts of Ras Al Khaimah, UAE</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">10. Modifications to Terms</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  We reserve the right to modify these terms at any time. Material changes will be 
                  communicated to clients via email or website notification. Continued use of our 
                  services after such modifications constitutes acceptance of the updated terms.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl tesla-heading mb-6">11. Contact Information</h2>
              <div className="tesla-subheading space-y-4">
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>Palm Signature Real Estate LLC</strong></p>
                  <p>Email: hello@palmsignature.ae</p>
                  <p>Phone: +971 58 247 4950</p>
                  <p>Address: Al Marjan Island, Ras Al Khaimah, UAE</p>
                  <p>RERA License: [License Number]</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};