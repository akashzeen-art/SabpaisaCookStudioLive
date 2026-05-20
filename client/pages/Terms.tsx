import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Terms() {
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
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-sm mb-8">Last Updated: 30-06-2025</p>
            
            <div className="space-y-6 text-sm leading-relaxed">
              <p>At NumeroMobile Private Limited, accessible from https://thecookstudios.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded and how we use it.</p>
              
              <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Consent</h2>
              <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
              
              <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service and marketing purposes</li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Log Files</h2>
              <p>https://thecookstudios.com/ follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Cookies and Web Beacons</h2>
              <p>Like any other website, https://thecookstudios.com/ uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">CCPA Privacy Rights</h2>
              <p>Under the CCPA, among other rights, California consumers have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request that a business disclose the categories and specific pieces of personal data collected</li>
                <li>Request that a business delete any personal data about the consumer</li>
                <li>Request that a business not sell the consumer's personal data</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">GDPR Data Protection Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access – You have the right to request copies of your personal data</li>
                <li>The right to rectification – You have the right to request correction of inaccurate information</li>
                <li>The right to erasure – You have the right to request erasure of your personal data</li>
                <li>The right to restrict processing – You have the right to request restricted processing</li>
                <li>The right to object to processing – You have the right to object to our processing</li>
                <li>The right to data portability – You have the right to request data transfer</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
              <p>Our Services are not intended for users under the age of 16. We do not knowingly collect personal data from children. If you believe a child has submitted personal information through our platform, please contact us immediately at <a href="mailto:bd@numeromobile.com" className="text-yellow-500 hover:text-yellow-400">bd@numeromobile.com</a> and we will take prompt steps to delete such information from our records.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Terms and Conditions</h2>
              <p>This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable.</p>
              
              <p className="mt-4">The Platform is owned by NUMERO MOBILE Pvt. Ltd., a company incorporated under the Companies Act, 1956. Your use of the Platform and services are governed by these Terms of Use.</p>
              
              <p className="mt-4">ACCESSING, BROWSING OR OTHERWISE USING THE PLATFORM INDICATES YOUR AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Key Terms:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You agree to provide true, accurate and complete information during registration</li>
                <li>Your use of our Services is solely at your own risk</li>
                <li>You agree to pay charges associated with availing the Services</li>
                <li>You agree not to use the Platform for any unlawful purpose</li>
                <li>You shall indemnify and hold harmless Platform Owner from any claims</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
              <p>The content provided on this platform, including recipes, cooking videos, nutritional information, and related materials, is intended for general informational and educational purposes only. It is not a substitute for professional medical, dietary, or nutritional advice. Users are advised to consult a qualified healthcare professional or nutritionist regarding specific dietary needs, allergies, or medical conditions before following any recipes or meal plans.</p>
              <p className="mt-4">By using this platform and trying the recipes or cooking techniques, you acknowledge that you do so voluntarily and at your own risk. The platform and its creators shall not be held responsible for any allergic reactions, food-related illnesses, injuries, damages, or losses resulting from the use of this content. Individual results and experiences may vary.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law and Jurisdiction</h2>
              <p>These Terms shall be governed and interpreted in accordance with the laws of India. Any disputes arising out of or relating to the use of this website shall be subject to the exclusive jurisdiction of the courts located in Gurgaon, Haryana.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>NUMERO MOBILE Pvt. Ltd.</p>
              <p className="mt-2">📧 <a href="mailto:bd@numeromobile.com" className="text-yellow-500 hover:text-yellow-400">bd@numeromobile.com</a></p>
              <p>📞 <a href="tel:+919217523567" className="text-yellow-500 hover:text-yellow-400">9217523567</a></p>
              <p>📍 417, 4th floor, Tower A1, SPAZE ITECH PARK, Sector 49, Gurugram, Haryana 122018</p>
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
