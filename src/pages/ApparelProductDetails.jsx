import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ViewMobileModal from "../components/ViewMobileModal";
import SendInquiryModal from "../components/SendInquiryModal";

export default function ApparelProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [showMobile, setShowMobile] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");

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
        Home / Apparel & Fashion / 
        <span className="text-blue-600"> {product.name}</span>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* IMAGE SECTION */}
          <div>
            <div className="border rounded-lg p-4">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div className="flex gap-3 mt-4">
              <img src={product.img} className="w-20 h-20 object-cover rounded border cursor-pointer" />
              <img src={product.img} className="w-20 h-20 object-cover rounded border cursor-pointer" />
              <img src={product.img} className="w-20 h-20 object-cover rounded border cursor-pointer" />
            </div>
          </div>

          {/* DETAILS SECTION */}
          <div>

            <h1 className="text-3xl font-bold mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-500 text-lg">★★★★☆</span>
              <span className="text-sm text-gray-600">(85 Reviews)</span>
            </div>

            <p className="text-2xl text-orange-600 font-bold mb-4">
              {product.price}
            </p>

            {/* BULK PRICING */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-sm">
              <p><b>MOQ:</b> 50 Pieces</p>
              <p><b>Fabric:</b> Cotton / Polyester Blend</p>
              <p><b>Pattern:</b> Plain / Printed</p>
              <p><b>Delivery Time:</b> 5-7 Days</p>
            </div>

            {/* SIZE SELECTION */}
            <div className="mb-5">
              <p className="font-medium mb-2">Select Size:</p>
              <div className="flex gap-3">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded ${
                      selectedSize === size
                        ? "bg-blue-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* COLOR SELECTION */}
            <div className="mb-6">
              <p className="font-medium mb-2">Select Color:</p>
              <div className="flex gap-3">
                {["Black", "White", "Blue", "Red"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded ${
                      selectedColor === color
                        ? "bg-green-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowMobile(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow"
              >
                View Mobile
              </button>

              <button
                onClick={() => setShowInquiry(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow"
              >
                Send Inquiry
              </button>
            </div>

            {/* SUPPLIER CARD */}
            <div className="mt-8 border rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold text-lg">
                Verified Fashion Supplier
              </h3>
              <p className="text-sm text-gray-600">
                StyleWear Exports Pvt. Ltd.
              </p>
              <p className="text-sm text-gray-600">
                📍 Surat, Gujarat, India
              </p>
              <p className="text-green-600 text-sm mt-1">
                ✔ GST Verified | ✔ Export License
              </p>
            </div>

          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">
            Product Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This {product.name} is manufactured using high-quality fabric
            ensuring comfort and durability. Suitable for bulk export and
            domestic wholesale supply. Available in multiple sizes and colors.
          </p>
        </div>

        {/* SPECIFICATIONS */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">
            Specifications
          </h2>

          <table className="w-full text-sm border">
            <tbody>
              <tr className="border-b">
                <td className="p-3 bg-gray-50 font-medium">Material</td>
                <td className="p-3">Cotton Blend</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 bg-gray-50 font-medium">Gender</td>
                <td className="p-3">Unisex</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 bg-gray-50 font-medium">Season</td>
                <td className="p-3">All Season</td>
              </tr>
              <tr>
                <td className="p-3 bg-gray-50 font-medium">Packaging</td>
                <td className="p-3">Box Packing</td>
              </tr>
            </tbody>
          </table>
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