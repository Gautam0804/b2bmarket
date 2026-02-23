import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ViewMobileModal from "../components/ViewMobileModal";
import SendInquiryModal from "../components/SendInquiryModal";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [showMobile, setShowMobile] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Product not found</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto text-sm text-gray-600 mb-4">
        Home / Products / <span className="text-blue-600">{product.name}</span>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT SIDE - IMAGE */}
          <div>
            <div className="border rounded-lg p-4">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            {/* Thumbnail preview */}
            <div className="flex gap-3 mt-4">
              <img src={product.img} className="w-20 h-20 object-cover rounded border cursor-pointer" />
              <img src={product.img} className="w-20 h-20 object-cover rounded border cursor-pointer" />
              <img src={product.img} className="w-20 h-20 object-cover rounded border cursor-pointer" />
            </div>
          </div>

          {/* RIGHT SIDE - DETAILS */}
          <div>

            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-500 text-lg">★★★★☆</span>
              <span className="text-sm text-gray-600">(120 Reviews)</span>
            </div>

            <p className="text-2xl text-orange-600 font-bold mb-4">
              {product.price}
            </p>

            {/* Product Info */}
            <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-2 mb-6">
              <p><b>MOQ:</b> 10 Pieces</p>
              <p><b>Supply Type:</b> Manufacturer, Exporter</p>
              <p><b>Country of Origin:</b> India</p>
              <p><b>Delivery Time:</b> 7-10 Days</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowMobile(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow"
              >
                View Mobile
              </button>

              <button
                onClick={() => setShowInquiry(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow"
              >
                Send Inquiry
              </button>
            </div>

            {/* Supplier Card */}
            <div className="mt-8 border rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold text-lg mb-2">
                Verified Supplier
              </h3>
              <p className="text-sm text-gray-600">
                ABC Trading Company Pvt. Ltd.
              </p>
              <p className="text-sm text-gray-600">
                📍 Mumbai, Maharashtra, India
              </p>
              <p className="text-sm text-green-600 mt-1">
                ✔ GST Verified | ✔ TrustSEAL Verified
              </p>
            </div>

          </div>
        </div>

        {/* Description Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Product Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This {product.name} is manufactured using premium quality raw
            materials under strict quality control standards. It is widely used
            in domestic and industrial applications and ensures durability,
            efficiency, and high performance.
          </p>
        </div>

        {/* Specifications Table */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Specifications
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border">
              <tbody>
                <tr className="border-b">
                  <td className="p-3 bg-gray-50 font-medium">Brand</td>
                  <td className="p-3">Generic</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 bg-gray-50 font-medium">Packaging Type</td>
                  <td className="p-3">Box Packing</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 bg-gray-50 font-medium">Usage</td>
                  <td className="p-3">Commercial & Industrial</td>
                </tr>
                <tr>
                  <td className="p-3 bg-gray-50 font-medium">Quality</td>
                  <td className="p-3">Premium Grade</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* MODALS */}
      <ViewMobileModal
        isOpen={showMobile}
        onClose={() => setShowMobile(false)}
      />

      <SendInquiryModal
        isOpen={showInquiry}
        onClose={() => setShowInquiry(false)}
        product={product}
      />

    </div>
  );
}