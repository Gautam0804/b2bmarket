import { useState } from "react";
import { Phone, Package, Clock, ShieldCheck, ListChecks } from "lucide-react";

export default function PostRequirement() {
  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    unit: "",
    mobile: "",
    supplierPreference: "all",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setFormData({
      product: "",
      quantity: "",
      unit: "",
      mobile: "",
      supplierPreference: "all",
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white text-center py-14">
        <h1 className="text-3xl md:text-4xl font-bold">
          Let Us Know What You Need
        </h1>
        <p className="mt-3 text-sm md:text-base">
          Complete these simple steps & get instant quotes from verified suppliers.
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-6xl mx-auto -mt-12 px-6 pb-20">
        <div className="bg-white rounded-2xl shadow-2xl p-8 grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE FORM */}
          <div>
            <h2 className="text-xl font-semibold mb-6">
              Requirement Details
            </h2>

            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                ✅ Requirement Submitted Successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Product */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Product / Service
                </label>
                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="Enter product or service"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                  required
                />
              </div>

              {/* Quantity */}
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                    required
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-1">
                    Unit
                  </label>
                  <input
                    type="text"
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    placeholder="e.g. Pieces, Kg"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>
              </div>

              {/* Supplier Preference */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Supplier Preference
                </label>
                <div className="flex gap-6 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="supplierPreference"
                      value="all"
                      checked={formData.supplierPreference === "all"}
                      onChange={handleChange}
                    />
                    All India
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="supplierPreference"
                      value="near"
                      checked={formData.supplierPreference === "near"}
                      onChange={handleChange}
                    />
                    Near Me
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="supplierPreference"
                      value="specific"
                      checked={formData.supplierPreference === "specific"}
                      onChange={handleChange}
                    />
                    Specific State
                  </label>
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Mobile Number
                </label>
                <div className="flex">
                  <span className="px-3 flex items-center bg-gray-200 border border-r-0 rounded-l-lg text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    className="w-full p-3 border rounded-r-lg focus:ring-2 focus:ring-blue-600 outline-none"
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition transform hover:scale-105 duration-300"
              >
                Submit Requirement
              </button>
            </form>
          </div>

          {/* RIGHT SIDE ADVANTAGES */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-lg font-semibold mb-6">
              Buyers Advantages
            </h3>

            <div className="space-y-6">

              <Advantage
                icon={<Clock className="text-blue-600" />}
                title="Immediate Responses"
                desc="Get instant feedback from suppliers."
              />

              <Advantage
                icon={<ShieldCheck className="text-green-600" />}
                title="Genuine Suppliers"
                desc="Accredited suppliers that meet your needs."
              />

              <Advantage
                icon={<ListChecks className="text-purple-600" />}
                title="Multiple Choices"
                desc="Compare and choose the best offer."
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Advantage({ icon, title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="p-3 bg-white rounded-full shadow">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}