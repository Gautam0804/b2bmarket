import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaMicrophone, FaUser, FaHeadset } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();

  const hideSearchRoutes = ["/post-requirement", "/join-free", "/login"];
  const hideSearch = hideSearchRoutes.includes(location.pathname);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">

      {/* 🔹 Top Strip */}
      <div className="bg-gray-50 border-b text-sm px-8 py-2 flex justify-between items-center">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <span className="text-gray-600">Welcome User!</span>

          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign In
          </Link>

          <Link
            to="/join-free"
            className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition"
          >
            Join Free
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 text-gray-700">
          <div>
            <span className="text-orange-600 font-semibold">Sales:</span>{" "}
            <span className="font-bold">+91-9926037815</span>
          </div>
          <div>
            <span className="text-orange-600 font-semibold">Support:</span>{" "}
            <span className="font-bold">+91-9131470481</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
           
           
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <FaHeadset />
            <span>Help</span>
          </div>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <div className="px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-wide">
          <span className="text-blue-700">B2B</span>
          <span className="text-red-500">Market</span>
          <span className="text-gray-800">.com</span>
        </Link>

        {/* 🔥 Search */}
        {!hideSearch && (
          <div className="flex w-[50%] border-2 border-blue-500 rounded-full overflow-hidden shadow-sm">

            <select className="px-4 bg-gray-100 text-sm outline-none">
              <option>Products / Services</option>
              <option>Suppliers</option>
              <option>Buy Leads</option>
            </select>

            <input
              type="text"
              placeholder="Enter product / service to search"
              className="flex-1 px-4 py-2 outline-none"
            />

            <button className="px-4 text-gray-500 hover:text-blue-600 transition">
              <FaMicrophone />
            </button>

            <button className="bg-blue-600 text-white px-6 flex items-center gap-2 hover:bg-blue-700 transition">
              <FaSearch />
              Search
            </button>
          </div>
        )}

        {/* Post Buy Requirement */}
        <Link
          to="/post-requirement"
          className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 shadow hover:shadow-lg transition"
        >
          Post Buy Requirement
        </Link>
      </div>
    </div>
  );
}