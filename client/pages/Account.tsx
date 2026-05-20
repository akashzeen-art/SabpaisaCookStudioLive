import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import SubscriptionModal from "@/components/SubscriptionModal";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { usePreserveParams } from "@/hooks/usePreserveParams";
import { User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Account() {
  const { isPopupOpen, closePopup, handleSubscribe } = useSubscription();
  const [showModal, setShowModal] = useState(false);
  const queryParams = usePreserveParams();

  return (
    <div className="relative min-h-screen bg-food-cream">
      <VideoBackground />
      <SubscriptionModal
        isOpen={showModal || isPopupOpen}
        onClose={() => { setShowModal(false); closePopup(); }}
        onSubscribe={handleSubscribe}
      />

      <div className="relative z-20">
        <Navbar />

        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                My <span className="text-yellow-500">Account</span>
              </h1>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 sm:p-12 space-y-6 animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <User className="w-12 h-12 text-yellow-500" />
                <h2 className="text-3xl font-bold text-white">Dashboard</h2>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-xl text-white/90 mb-6">Mobile number not found.</p>
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                >
                  <LogIn className="w-5 h-5" />
                  Sign In
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/70 text-center">
                  Don't have an account? Sign in to access your dashboard and manage your subscription.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/20 bg-white/10 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-white text-sm">
            <p className="mb-2">&copy; 2025, Numero Mobile Pvt. Ltd. All Rights Reserved</p>
            <div className="flex gap-2 justify-center">
              <Link to={`/terms${queryParams}`} className="hover:text-white/80">Terms of Services</Link>
              <span>|</span>
              <Link to={`/refund${queryParams}`} className="hover:text-white/80">Refund Policy</Link>
              <span>|</span>
              <Link to={`/privacy${queryParams}`} className="hover:text-white/80">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
