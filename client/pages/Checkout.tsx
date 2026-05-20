import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const price = 75;
  const servicePack = "MONTHLY";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile || mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-black to-amber-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Checkout</h2>
          <p className="text-2xl font-semibold text-yellow-500">TheCookStudio</p>
        </div>

        <div className="text-center mb-6">
          <img src="/logo.png" alt="Product" className="w-32 h-32 mx-auto object-contain rounded-lg" />
        </div>

        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mb-6">
          <p className="text-white text-center">
            <strong className="text-yellow-500">Proceed</strong> to complete the payment of{" "}
            <strong className="text-yellow-500">Rs.{price} ({servicePack})</strong> for your order.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                setMobile(value);
                setError("");
              }}
              placeholder="Enter your mobile number"
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              maxLength={10}
            />
            {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Complete Order
          </button>
        </form>
      </div>
    </div>
  );
}
