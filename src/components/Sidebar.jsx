import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaSeedling,
  FaUtensils,
  FaTshirt,
  FaFlask,
  FaIndustry,
  FaBuilding,
  FaCouch,
  FaSpa
} from "react-icons/fa";

const categories = [
  { name: "Home Supplies", slug: "home-supplies", icon: <FaHome /> },
  { name: "Agriculture", slug: "agriculture", icon: <FaSeedling /> },
  { name: "Food Products & Beverages", slug: "food-products", icon: <FaUtensils /> },
  { name: "Apparel & Fashion", slug: "apparel-fashion", icon: <FaTshirt /> },
  { name: "Chemicals", slug: "chemicals", icon: <FaFlask /> },
  { name: "Industrial Supplies", slug: "industrial-supplies", icon: <FaIndustry /> },
  { name: "Construction & Real Estate", slug: "construction-real-estate", icon: <FaBuilding /> },
  { name: "Furniture", slug: "furniture", icon: <FaCouch /> },
  { name: "Health & Beauty", slug: "health-beauty", icon: <FaSpa /> }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white rounded-xl shadow-lg p-5 h-fit border">
      
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4 pb-2 border-b text-gray-800">
        Top Categories
      </h2>

      {/* Categories */}
      <ul className="space-y-2">
        {categories.map((cat, index) => {
          const isActive = location.pathname === `/category/${cat.slug}`;

          return (
            <li key={index}>
              <Link
                to={`/category/${cat.slug}`}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 group
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  }`}
              >
                <span className="text-lg group-hover:scale-110 transition">
                  {cat.icon}
                </span>

                <span className="text-sm group-hover:translate-x-1 transition">
                  {cat.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

    </div>
  );
}