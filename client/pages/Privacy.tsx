import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative min-h-screen bg-food-cream">
      <VideoBackground />
      
      <div className="relative z-20">
        <Navbar />
        
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-sm mb-8">Last Updated: 14-07-2025</p>
            
            <div className="space-y-6 text-sm leading-relaxed">
              <p>This Privacy Policy describes how NumeroMobile ("we", "us", or "our") collects, uses, discloses, and protects your personal information when you visit or make a purchase from https://thecookstudios.com/ (the "Site") or use any of our services (collectively, the "Services").</p>
              
              <p>By using our Services, you agree to the collection and use of information as outlined in this Privacy Policy. If you do not agree, please do not use the Services.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-bold mt-6 mb-3">a) Information You Provide Directly</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact details: Name, phone number, email address, postal address</li>
                <li>Order details: Product purchase history, billing/shipping information</li>
                <li>Account information: Login credentials, preferences</li>
                <li>Customer support queries and feedback</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">b) Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Pages visited, time spent, and referring URLs</li>
              </ul>
              <p className="mt-2">This data is gathered using technologies like cookies and other tracking tools to enhance your browsing experience and improve our services.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">c) Third-Party Sources</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment gateways (e.g., to process transactions)</li>
                <li>Analytics providers (e.g., to analyze traffic and usage patterns)</li>
                <li>Advertising or marketing platforms (e.g., to optimize campaign performance)</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill orders</li>
                <li>Communicate with you about orders, updates, or issues</li>
                <li>Improve the functionality and user experience of the website</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send promotional emails, newsletters, and marketing offers (you can opt out anytime)</li>
                <li>Monitor and prevent fraudulent transactions and abuse of our Services</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Share Your Information</h2>
              <p>Your personal information may be shared only in limited circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>With service providers such as payment processors, hosting providers, and email service platforms</li>
                <li>With business partners to conduct joint promotions or events (only with your consent)</li>
                <li>With legal authorities where required by law, to protect our rights or in connection with a legal claim</li>
                <li>With affiliates or during business restructuring, such as mergers or acquisitions</li>
              </ul>
              <p className="mt-4">We do not sell your personal information. We do not share sensitive personal information for targeted advertising purposes.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
              <p>Cookies help us provide, protect, and improve our services. They enable functionalities like remembering your preferences and measuring user activity. You can manage or disable cookies in your browser settings. However, disabling cookies may affect certain features or functionalities of the website.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. User-Generated Content</h2>
              <p>If you post content (e.g., reviews or comments) on public areas of the Site, it becomes publicly accessible. We are not responsible for how others use this information.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. External Links</h2>
              <p>Our website may include links to third-party sites. We are not responsible for the privacy or security practices of these external platforms. Please review their privacy policies separately.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Children's Privacy</h2>
              <p>Our Services are not intended for users under the age of 16. We do not knowingly collect personal data from children. If you believe a child has submitted personal information, please contact us for deletion.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Security and Retention</h2>
              <p>We take reasonable precautions to protect your personal information. However, no online transmission or storage is completely secure. We retain your information only as long as necessary for our business purposes or to meet legal requirements.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access and update your personal information</li>
                <li>Delete your data</li>
                <li>Opt out of marketing communications</li>
                <li>Restrict or object to certain data processing</li>
                <li>Request data portability</li>
              </ul>
              
              <p className="mt-6">To make any such request, please contact us at:</p>
              <p className="mt-2">📧 <a href="mailto:bd@numeromobile.com" className="text-yellow-500 hover:text-yellow-400">bd@numeromobile.com</a></p>
              <p>📍 NumeroMobile, 417, Tower A1, Sector-49, Gurgaon, Haryana, 122011</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">10. Disclaimer</h2>
              <p>The content provided on this platform, including recipes, cooking videos, nutritional information, and related materials, is intended for general informational and educational purposes only. It is not a substitute for professional medical, dietary, or nutritional advice. Users are advised to consult a qualified healthcare professional or nutritionist regarding specific dietary needs, allergies, or medical conditions before following any recipes or meal plans.</p>
              <p className="mt-4">By using this platform and trying the recipes or cooking techniques, you acknowledge that you do so voluntarily and at your own risk. The platform and its creators shall not be held responsible for any allergic reactions, food-related illnesses, injuries, damages, or losses resulting from the use of this content. Individual results and experiences may vary.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law and Jurisdiction</h2>
              <p>These Terms shall be governed and interpreted in accordance with the laws of India. Any disputes arising out of or relating to the use of this website shall be subject to the exclusive jurisdiction of the courts located in Gurgaon, Haryana.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">12. Updates to this Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal obligations. Updates will be posted on this page with the revised date.</p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <Link to="/" className="text-yellow-500 hover:text-yellow-400">← Back to Home</Link>
            </div>
          </div>
        </div>
        
        <footer className="border-t border-white/20 bg-white/10 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-white text-sm">
            <p className="mb-2">&copy; 2025, Numero Mobile Pvt. Ltd. All Rights Reserved</p>
            <div className="flex gap-2 justify-center">
              <Link to="/terms" className="hover:text-white/80">Terms of Services</Link>
              <span>|</span>
              <Link to="/refund" className="hover:text-white/80">Refund Policy</Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-white/80">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
