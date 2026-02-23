import { useParams } from "react-router-dom";

export default function ProductListing({ products }) {
  const { categoryId } = useParams();

  const categoryProducts = products[categoryId] || [];

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-6">

      <div className="flex gap-6">

        {/* LEFT SIDEBAR */}
        <div className="w-64 bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-3">Related Category</h3>
          <ul className="space-y-2 text-sm text-blue-600">
            <li>Neon Tetra Fish</li>
            <li>Discus Fish</li>
            <li>Angelfish</li>
            <li>Barb Fish</li>
            <li>Gold Fish</li>
          </ul>

          <hr className="my-4"/>

          <h3 className="font-semibold mb-3">Business Type</h3>
          <ul className="space-y-2 text-sm">
            <li>Manufacturer</li>
            <li>Exporter</li>
            <li>Wholesaler</li>
            <li>Retailer</li>
          </ul>
        </div>

        {/* PRODUCT LIST */}
        <div className="flex-1 space-y-6">

          {categoryProducts.map((product) => (
            <div key={product.id} className="bg-white rounded shadow p-4">

              <div className="flex gap-4">

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-48 h-36 object-cover rounded"
                />

                {/* Details */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-blue-700">
                    {product.name}
                  </h2>

                  <p className="text-xl font-bold mt-2">
                    {product.price}
                  </p>

                  <div className="text-sm text-gray-600 mt-2 space-y-1">
                    <p><b>MOQ:</b> {product.moq}</p>
                    <p><b>Packaging:</b> {product.packaging}</p>
                    <p><b>Shelf Life:</b> {product.shelfLife}</p>
                    <p><b>Country of Origin:</b> {product.origin}</p>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
                      View Mobile
                    </button>

                    <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">
                      Send Inquiry
                    </button>
                  </div>

                  {/* Seller Info */}
                  <div className="mt-4 text-sm text-gray-700">
                    <p className="font-semibold">{product.seller.name}</p>
                    <p>{product.seller.location}</p>
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE INQUIRY BOX */}
        <div className="w-72 bg-white rounded shadow p-4 h-fit">
          <h3 className="font-semibold text-center mb-4">
            Get Best Sellers
          </h3>

          <input
            type="text"
            placeholder="Enter Quantity"
            className="w-full border p-2 rounded mb-3 text-sm"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full border p-2 rounded mb-3 text-sm"
          />

          <button className="bg-red-600 text-white w-full py-2 rounded">
            Submit Requirement
          </button>
        </div>

      </div>
    </div>
  );
}