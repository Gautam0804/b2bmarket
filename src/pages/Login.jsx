import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Loader2 } from "lucide-react";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [step, setStep] = useState("mobile"); // mobile | otp
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleMobileSubmit = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      setMessage("❌ Please enter valid 10-digit mobile number");
      return;
    }

    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setStep("otp");
      setMessage("📩 OTP sent to your mobile number");
    }, 1200);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    if (otp.length !== 4) {
      setMessage("❌ Enter valid 4-digit OTP");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage("✅ Login Successful!");
      setTimeout(() => navigate("/"), 1000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-800 flex items-center justify-center px-4 relative">

      {/* Modal Box */}
      <div className="bg-white/90 backdrop-blur-xl w-full max-w-md rounded-2xl shadow-2xl p-8 relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-2">
          Login
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Continue with your mobile number
        </p>

        {step === "mobile" && (
          <form onSubmit={handleMobileSubmit}>

            <div className="flex border rounded-lg overflow-hidden mb-4">
              <span className="px-3 bg-gray-100 flex items-center text-sm">
                🇮🇳 +91
              </span>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="flex-1 p-3 outline-none"
                maxLength="10"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex justify-center items-center gap-2"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              Continue
            </button>
          </form>
        )}

        {step === "otp" && (
          <form onSubmit={handleOtpSubmit}>

            <input
              type="text"
              placeholder="Enter 4-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="4"
              className="w-full p-3 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition flex justify-center items-center gap-2"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              Verify & Login
            </button>
          </form>
        )}

        {message && (
          <p className="text-center mt-4 text-sm font-medium">
            {message}
          </p>
        )}

        <p className="text-center text-sm mt-6">
          Not Registered yet?{" "}
          <Link
            to="/join-free"
            className="text-blue-600 font-semibold hover:underline"
          >
            Join Free
          </Link>
        </p>

        <p className="text-xs text-center text-gray-500 mt-3">
          Forgot your registered mobile? Click Here
        </p>
      </div>
    </div>
  );
}