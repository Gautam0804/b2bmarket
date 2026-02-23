import { useState, useRef } from "react";
import {
  User,
  Building2,
  Phone,
  Mail,
  UserPlus,
  Package,
  Globe,
  Inbox,
  Handshake,
} from "lucide-react";

export default function JoinFree() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
  });

  // ✅ Correctly defined ref
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created Successfully 🚀");
    setFormData({ name: "", company: "", mobile: "", email: "" });
  };

  return (
    <>
      {/* ================= HERO + FORM ================= */}
      <div
        ref={formRef}
        className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center px-6 py-16"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Sell your products to millions of customers!
            </h1>
            <p className="text-lg text-blue-100">
              Register your business with us absolutely FREE.
            </p>

            <div className="flex gap-10 pt-6">
              <Stat title="2 Crore+" subtitle="Products/Services" />
              <Stat title="20 Lakh+" subtitle="Suppliers" />
              <Stat title="50 Lakh+" subtitle="Verified Buyers" />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Register your Company FREE
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Get verified buyers for your product.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                icon={<User size={18} />}
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                icon={<Building2 size={18} />}
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />
              <Input
                icon={<Phone size={18} />}
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
              />
              <Input
                icon={<Mail size={18} />}
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded-lg"
              >
                Create Account →
              </button>

              <p className="text-xs text-gray-500 text-center pt-2">
                By clicking Create Account, you accept Terms & Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            How B2BMarket Works?
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Mock Mobile */}
            <div className="flex justify-center">
              <div className="w-72 h-[500px] bg-white shadow-2xl rounded-[40px] border-8 border-gray-800 flex flex-col justify-center items-center p-6">
                <UserPlus className="text-blue-600 mb-4" size={40} />
                <p className="font-semibold text-gray-700 text-center">
                  Simple & Fast Registration
                </p>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              <Step icon={<UserPlus />} title="Register on B2BMarket" />
              <Step icon={<Package />} title="Add Your Products & Services" />
              <Step icon={<Globe />} title="Your Products Display Online" />
              <Step icon={<Inbox />} title="Receive Buyer Inquiries" />
              <Step icon={<Handshake />} title="Connect Instantly & Close Deals" />

              {/* ✅ Scroll Button */}
              <button
                onClick={() =>
                  formRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition cursor-pointer"
              >
                Register Now →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Small Components ---------- */

function Input({ icon, name, placeholder, value, onChange, type = "text" }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-3 text-gray-400">{icon}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
      />
    </div>
  );
}

function Step({ icon, title }) {
  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-700">{title}</h3>
    </div>
  );
}

function Stat({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-blue-200 text-sm">{subtitle}</p>
    </div>
  );
}