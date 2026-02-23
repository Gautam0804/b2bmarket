import { useState } from "react";

export default function ViewMobileModal({ isOpen, onClose, product }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!name || !mobile) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white w-[500px] rounded-xl shadow-2xl relative overflow-hidden">

        {/* HEADER */}
        <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
          <h2 className="font-semibold text-lg">
            {submitted ? "Supplier Contact Details" : "Enter Your Details to View Contact"}
          </h2>

          <button
            onClick={() => {
              setSubmitted(false);
              setName("");
              setMobile("");
              onClose();
            }}
            className="text-xl hover:scale-110 transition"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="p-6">

          {!submitted ? (
            <>
              {/* PRODUCT INFO (Optional if passed) */}
              {product && (
                <div className="flex gap-4 mb-4 border p-3 rounded bg-gray-50">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-blue-600 font-semibold">
                      {product.price}
                    </p>
                  </div>
                </div>
              )}

              {/* NAME */}
              <div className="mb-4">
                <label className="text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full border p-2 rounded mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* MOBILE */}
              <div className="mb-5">
                <label className="text-sm font-medium">Mobile Number</label>
                <div className="flex mt-1">
                  <span className="border px-3 flex items-center bg-gray-100 rounded-l">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    className="w-full border p-2 rounded-r focus:ring-2 focus:ring-blue-400 outline-none"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition shadow"
              >
                Submit & View Contact
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                By continuing, you agree to our Terms & Privacy Policy.
              </p>
            </>
          ) : (
            /* AFTER SUBMIT SHOW CONTACT */
            <div className="text-center py-6">
              <p className="text-green-600 font-semibold text-lg mb-3">
                Contact Details Unlocked ✅
              </p>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  Supplier Mobile Number:
                </p>
                <p className="text-xl font-bold text-blue-700">
                  +91 98765 43210
                </p>
              </div>

              <button
                onClick={onClose}
                className="mt-6 bg-gray-800 text-white px-6 py-2 rounded hover:bg-black transition"
              >
                Close
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}