import { X, CheckCircle, Phone, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: (data: any) => void;
}

const plans = {
  weekly: { label: 'Weekly', discountedPrice: 65, originalPrice: 130, discount: '50% OFF', desc: '7 days full access' },
  monthly: { label: 'Monthly', discountedPrice: 75, originalPrice: 125, discount: '60% OFF', desc: 'Unlimited Videos & Web Series' },
};

export default function SubscriptionModal({ isOpen, onClose, onSubscribe }: SubscriptionModalProps) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<'weekly' | 'monthly'>('monthly');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setMobile('');
      setError('');
      setSelectedPlan('monthly');
    }
  }, [isOpen]);

  const handleMobileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile || mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    setStep(2);
  };

  const handlePlanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    setTimeout(() => onSubscribe({ mobile, plan: selectedPlan }), 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md animate-fade-in overflow-hidden">

        {/* Header bar */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍽️</span>
            <span className="text-black font-bold text-lg">Cook Premium</span>
          </div>
          {step !== 3 && (
            <button onClick={onClose} className="text-black/60 hover:text-black transition-colors">
              <X size={22} />
            </button>
          )}
        </div>

        {/* Step indicators */}
        {step !== 3 && (
          <div className="flex items-center justify-center gap-2 pt-5 px-6">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${step >= s ? 'bg-yellow-500 text-black' : 'bg-gray-200 text-gray-400'}`}>
                  {s}
                </div>
                {s < 2 && <div className={`w-12 h-1 rounded transition-all duration-300 ${step > s ? 'bg-yellow-500' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        )}

        <div className="p-6">

          {/* Step 1 — Phone number */}
          {step === 1 && (
            <form onSubmit={handleMobileSubmit}>
              <div className="flex items-center gap-2 mb-1">
                <Phone className="w-5 h-5 text-yellow-500" />
                <h3 className="text-xl font-bold text-gray-800">Enter Mobile Number</h3>
              </div>
              <p className="text-gray-500 text-sm mb-5">We'll use this to manage your subscription</p>

              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={mobile}
                onChange={(e) => { setMobile(e.target.value.replace(/\D/g, '').slice(0, 10)); setError(''); }}
                maxLength={10}
                autoFocus
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 text-gray-800 text-lg tracking-widest mb-2"
                required
              />
              {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

              <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 mt-2">
                Continue →
              </button>
            </form>
          )}

          {/* Step 2 — Plan selection */}
          {step === 2 && (
            <form onSubmit={handlePlanSubmit}>
              <div className="flex items-center gap-2 mb-1">
                <CreditCard className="w-5 h-5 text-yellow-500" />
                <h3 className="text-xl font-bold text-gray-800">Choose Your Plan</h3>
              </div>
              <p className="text-gray-500 text-sm mb-5">Mobile: <span className="font-semibold text-gray-700">{mobile}</span></p>

              <div className="space-y-3 mb-5">
                {(Object.keys(plans) as Array<'weekly' | 'monthly'>).map((key) => {
                  const plan = plans[key];
                  const isSelected = selectedPlan === key;
                  return (
                    <label key={key} className={`block cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 ${isSelected ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 hover:border-yellow-300'}`}>
                      <input type="radio" name="plan" value={key} checked={isSelected} onChange={() => setSelectedPlan(key)} className="sr-only" />
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-800 text-base">{plan.label}</span>
                            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">{plan.discount}</span>
                          </div>
                          <p className="text-gray-500 text-xs mt-0.5">{plan.desc}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-yellow-600">₹{plan.discountedPrice}</div>
                          <div className="text-xs text-gray-400 line-through">₹{plan.originalPrice}</div>
                        </div>
                      </div>
                      {isSelected && (
                        <div className="mt-2 flex items-center gap-1 text-yellow-600 text-xs font-semibold">
                          <CheckCircle className="w-3.5 h-3.5" /> Selected
                        </div>
                      )}
                    </label>
                  );
                })}
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="flex-1 border-2 border-gray-200 text-gray-600 font-semibold py-3 rounded-xl hover:border-gray-300 transition-all">
                  ← Back
                </button>
                <button type="submit" className="flex-[2] bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95">
                  Subscribe Now
                </button>
              </div>
            </form>
          )}

          {/* Step 3 — Success */}
          {step === 3 && (
            <div className="text-center py-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">You're In! 🎉</h3>
              <p className="text-gray-500">Subscription activated. Enjoy unlimited recipes!</p>
              <div className="mt-4 flex items-center justify-center gap-1 text-yellow-600 text-sm font-semibold">
                <span className="animate-pulse">▶</span> Loading your video...
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
