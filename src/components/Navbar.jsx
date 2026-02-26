import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaMicrophone,
  FaHeadset,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const hideSearchRoutes = ["/post-requirement", "/join-free", "/login"];
  const hideSearch = hideSearchRoutes.includes(location.pathname);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">

      {/* 🔹 Top Strip */}
      <div className="bg-gray-50 border-b text-sm px-4 sm:px-8 py-2 flex justify-between items-center">

        {/* Left */}
        <div className="flex items-center gap-3">
          <span className="text-gray-600 hidden sm:block">
            Welcome <span className="font-semibold text-blue-600">User</span>!
          </span>

          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline transition"
          >
            Sign In
          </Link>

          <Link
            to="/join-free"
            className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition shadow-sm"
          >
            Join Free
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 sm:gap-6 text-gray-700">

          <div className="hidden lg:block">
            <span className="text-orange-600 font-semibold">Sales:</span>{" "}
            <span className="font-bold">+91-9926037815</span>
          </div>

          <div className="hidden lg:block">
            <span className="text-orange-600 font-semibold">Support:</span>{" "}
            <span className="font-bold">+91-9131470481</span>
          </div>

          <Link
            to="/help"
            className="flex items-center gap-2 hover:text-blue-600 transition font-medium"
          >
            <FaHeadset />
            <span className="hidden sm:block">Help</span>
          </Link>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <div className="px-4 sm:px-8 py-4 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold tracking-wide hover:scale-105 transition"
        >
          <span className="text-blue-700">RISHABH </span>
          <span className="text-red-500">INFOTECH</span>
        </Link>

        {/* 🔥 Search (Desktop Only) */}
        {!hideSearch && (
          <div className="hidden lg:flex w-[50%] border-2 border-blue-500 rounded-full overflow-hidden shadow-sm">

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

        {/* Post Buy Requirement (Desktop) */}
        <Link
          to="/post-requirement"
          className="hidden sm:block bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 shadow hover:shadow-lg transition transform hover:scale-105"
        >
          Post Buy Requirement
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-4 shadow-md">

          {!hideSearch && (
            <div className="flex flex-col gap-3">

              <input
                type="text"
                placeholder="Search products..."
                className="border p-2 rounded-lg"
              />

              <button className="bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2">
                <FaSearch />
                Search
              </button>
            </div>
          )}

          <Link
            to="/post-requirement"
            className="block bg-red-500 text-white text-center py-2 rounded-lg font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Post Buy Requirement
          </Link>

          <Link
            to="/help"
            className="block text-center py-2 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Help Center
          </Link>
        </div>
      )}
    </div>
  );
}