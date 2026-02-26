import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, Mail, ShieldCheck } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function Login() {
  const navigate = useNavigate();
  const otpRef = useRef(null);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("email");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 🔹 Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setMessage("❌ Enter valid email address");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: false },
    });

    setLoading(false);

    if (error) {
      setMessage("❌ " + error.message);
    } else {
      setStep("otp");
      setMessage("📩 OTP sent to your email");
      setTimeout(() => otpRef.current?.focus(), 300);
    }
  };

  // 🔹 Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (otp.length < 6) {
      setMessage("❌ Enter valid OTP");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "email",
    });

    setLoading(false);

    if (error) {
      setMessage("❌ Invalid OTP");
    } else {
      setMessage("✅ Login Successful!");
      setTimeout(() => navigate("/"), 800);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 animate-gradient">
      
      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl w-full max-w-md p-8 text-white transition-all duration-500">

        <h2 className="text-3xl font-bold text-center mb-2 tracking-wide">
          Welcome Back 
        </h2>

        <p className="text-center text-sm text-gray-200 mb-8">
          Login securely with email OTP
        </p>

        {/* STEP 1 - EMAIL */}
        {step === "email" && (
          <form onSubmit={handleSendOtp} className="space-y-6">

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-300" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                list="email-suggestions"
                autoComplete="email"
                required
                className="w-full pl-10 p-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-300 text-white"
              />
            </div>

            {/* Auto Suggest */}
            <datalist id="email-suggestions">
              <option value={`${email.split("@")[0]}@gmail.com`} />
              <option value={`${email.split("@")[0]}@outlook.com`} />
              <option value={`${email.split("@")[0]}@yahoo.com`} />
            </datalist>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-500 hover:bg-indigo-600 transition py-3 rounded-xl font-semibold flex justify-center items-center gap-2 shadow-lg"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              Send OTP
            </button>
          </form>
        )}

        {/* STEP 2 - OTP */}
        {step === "otp" && (
          <form onSubmit={handleVerifyOtp} className="space-y-6">

            <div className="relative">
              <ShieldCheck className="absolute left-3 top-3 text-gray-300" size={18} />
              <input
                ref={otpRef}
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                maxLength="8"
                required
                className="w-full pl-10 p-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-300 text-white tracking-widest text-center text-lg"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 transition py-3 rounded-xl font-semibold flex justify-center items-center gap-2 shadow-lg"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              Verify & Login
            </button>

            <button
              type="button"
              onClick={handleSendOtp}
              className="text-sm text-indigo-300 hover:underline block mx-auto"
            >
              Resend OTP
            </button>
          </form>
        )}

        {message && (
          <p className="text-center mt-6 text-sm font-medium text-yellow-300">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}