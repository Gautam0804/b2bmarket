export default function Footer() {
  return (
    <footer className="bg-[#0b2242] text-gray-300 mt-10">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">

        {/* OUR SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>Advertise with us</li>
            <li>Membership Plan</li>
            <li>Banner Advertisement</li>
          </ul>
        </div>

        {/* BUYERS */}
        <div>
          <h3 className="text-white font-semibold mb-4">BUYERS</h3>
          <ul className="space-y-2 text-sm">
            <li>Post Your Requirement</li>
            <li>Browse Suppliers</li>
            <li>Manufacturers Directory</li>
            <li>Country Suppliers</li>
            <li>Buyer FAQ</li>
          </ul>
        </div>

        {/* SELLERS */}
        <div>
          <h3 className="text-white font-semibold mb-4">SELLERS</h3>
          <ul className="space-y-2 text-sm">
            <li>Sell Your Product</li>
            <li>Latest BuyLeads</li>
            <li>Seller FAQ</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Jobs & Careers</li>
            <li>Feedback</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect with us</h3>
          <div className="flex gap-4 text-xl">
            <span className="cursor-pointer hover:text-white">📘</span>
            <span className="cursor-pointer hover:text-white">🐦</span>
            <span className="cursor-pointer hover:text-white">📌</span>
            <span className="cursor-pointer hover:text-white">▶</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#081a33] text-center text-sm py-4 border-t border-gray-700">
        © 1997–2026 Kajal Pvt. Ltd. All rights reserved.  
        <span className="ml-3 text-gray-400">
          Privacy Policy · Terms & Conditions
        </span>
      </div>

    </footer>
  );
}