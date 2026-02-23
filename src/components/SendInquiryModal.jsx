import { useState } from "react";

export default function SendInquiryModal({ isOpen, onClose, product }) {
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("Piece");
  const [mobile, setMobile] = useState("");
  const [interest, setInterest] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen || !product) return null;

  const toggleInterest = (item) => {
    setInterest((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const handleSubmit = () => {
    if (!quantity || !mobile) {
      setError("Please fill all required fields.");
      return;
    }

    if (mobile.length !== 10) {
      setError("Enter valid 10 digit mobile number.");
      return;
    }

    setError("");
    setSuccess(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setSuccess(false);
      setQuantity("");
      setMobile("");
      setInterest([]);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white w-[900px] max-w-5xl rounded-xl shadow-2xl flex relative">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* LEFT PRODUCT */}
        <div className="w-1/2 p-6 border-r bg-gray-50 rounded-l-xl">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-72 object-cover rounded-lg shadow"
          />

          <h3 className="mt-4 font-semibold text-lg text-gray-800">
            {product.name}
          </h3>

          <p className="text-orange-600 font-bold mt-2 text-lg">
            {product.price}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Sold By: <span className="font-medium">Verified Supplier</span>
          </p>

          <p className="text-sm text-gray-500">
            Location: India
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="w-1/2 p-8">
          <h2 className="text-xl font-semibold mb-6">
            Get a Quick Quote from this Supplier
          </h2>

          {success ? (
            <div className="bg-green-100 text-green-700 p-4 rounded text-center font-medium">
              ✅ Inquiry Submitted Successfully!
            </div>
          ) : (
            <>
              {/* INTEREST */}
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">
                  I am interested in:
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Bulk Order", "Sample", "Price List", "Other"].map(
                    (item) => (
                      <label
                        key={item}
                        className="flex items-center gap-2 text-sm border px-3 py-1 rounded cursor-pointer hover:bg-gray-100"
                      >
                        <input
                          type="checkbox"
                          checked={interest.includes(item)}
                          onChange={() => toggleInterest(item)}
                        />
                        {item}
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* QUANTITY */}
              <div className="mb-4">
                <label className="text-sm font-medium">
                  Quantity *
                </label>

                <div className="flex gap-3 mt-1">
                  <input
                    type="number"
                    placeholder="Enter quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-2/3 border p-2 rounded"
                  />

                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-1/3 border p-2 rounded"
                  >
                    <option>Piece</option>
                    <option>Kg</option>
                    <option>Set</option>
                    <option>Box</option>
                    <option>Litre</option>
                  </select>
                </div>
              </div>

              {/* MOBILE */}
              <div className="mb-4">
                <label className="text-sm font-medium">
                  Mobile Number *
                </label>

                <div className="flex mt-1">
                  <span className="border px-3 flex items-center bg-gray-100 rounded-l">
                    🇮🇳 +91
                  </span>

                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full border p-2 rounded-r"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-600 text-sm mb-3">
                  {error}
                </p>
              )}

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition shadow"
              >
                Submit Inquiry →
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                By continuing, you agree to our Terms & Privacy Policy.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}