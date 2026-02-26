import { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Help() {
  const [formType, setFormType] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formType === "call" && formData.phone.length !== 10) {
      alert("Enter valid 10 digit phone number");
      return;
    }

    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => {
      setSuccess(false);
      setFormType(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        <h1 className="text-3xl font-bold text-center mb-6">
          Help Desk & Support
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Need assistance? Contact us below.
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div
            onClick={() => setFormType("call")}
            className="cursor-pointer text-center p-6 border rounded-xl hover:shadow-lg transition"
          >
            <FaPhoneAlt className="text-blue-600 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Call Support</h3>
            <p className="text-gray-600">Request a call back</p>
          </div>

          <div
            onClick={() => setFormType("email")}
            className="cursor-pointer text-center p-6 border rounded-xl hover:shadow-lg transition"
          >
            <FaEnvelope className="text-green-600 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Email Us</h3>
            <p className="text-gray-600">Send us your query</p>
          </div>
        </div>

        {/* Dynamic Form */}
        {formType && (
          <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-xl shadow-inner">
            <h2 className="text-xl font-semibold mb-4 text-center">
              {formType === "call" ? "Request a Call" : "Send Email Query"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />

              {/* Show Phone only for Call */}
              {formType === "call" && (
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Mobile Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value.replace(/\D/g, ""),
                    })
                  }
                  required
                  maxLength="10"
                  className="w-full p-3 border rounded-lg"
                />
              )}

              {/* Show Email only for Email Query */}
              {formType === "email" && (
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              )}

              {/* Message */}
              <textarea
                name="message"
                placeholder="Describe your issue"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>

              {success && (
                <p className="text-green-600 text-center font-medium">
                  ✅ Submitted Successfully!
                </p>
              )}
            </form>
          </div>
        )}

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <FAQ
            question="How do I post a buy requirement?"
            answer="Click on 'Post Buy Requirement' and fill in your product details."
          />

          <FAQ
            question="How do I contact suppliers?"
            answer="Register and login, then browse suppliers and send inquiries."
          />

          <FAQ
            question="Is registration free?"
            answer="Yes, registration on B2BMarket is completely free."
          />
        </div>

      </div>
    </div>
  );
}

/* FAQ Component */
function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 border rounded-lg overflow-hidden">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer bg-gray-100 px-4 py-3 font-medium hover:bg-gray-200"
      >
        {question}
      </div>
      {open && (
        <div className="px-4 py-3 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}