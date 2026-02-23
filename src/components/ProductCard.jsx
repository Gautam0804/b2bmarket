import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow hover:shadow-lg rounded-lg p-4 transition">
      <h3 className="text-lg font-semibold mb-2">
        {product.title}
      </h3>

      <p className="text-blue-600 font-bold mb-2">
        ₹ {product.price}
      </p>

      <p className="text-gray-500 text-sm">
        Supplier: {product.seller?.name}
      </p>

      <Link
        to={`/product/${product._id}`}
        className="block mt-4 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}