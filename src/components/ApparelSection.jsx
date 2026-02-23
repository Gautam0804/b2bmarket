export default function ApparelSection() {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-8">

      <h2 className="text-xl font-semibold mb-6">
        Apparel and Fashion Accessories
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT BIG IMAGE */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1520975922071-7b4b1d5a7c3b?auto=format&fit=crop&w=800&q=80"
            alt="Fashion"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6 text-white">
            <h3 className="text-lg font-semibold mb-3">
              Winter Clothing & Accessories
            </h3>

            <ul className="text-sm space-y-1 mb-4">
              <li>Bags, Pouches & Cases</li>
              <li>Badges & Lanyards</li>
              <li>Scarves & Stoles</li>
              <li>Bandanas</li>
            </ul>

            <button className="bg-red-500 px-4 py-2 rounded text-sm w-max hover:bg-red-600">
              View All
            </button>
          </div>
        </div>

        {/* RIGHT CATEGORY BOXES */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">

          {[
            {
              title: "Men Shirts, Jeans & Clothing",
              items: ["Mens T Shirt", "Mens Jacket", "Mens Lower", "Mens V-neck"]
            },
            {
              title: "Ladies Dresses & Apparel",
              items: ["Ladies Kurti", "Ladies Jackets", "Palazzo Suit", "Ladies Tops"]
            },
            {
              title: "Unisex Clothing Suppliers",
              items: ["Winter Coat", "Knitted Garment", "Overcoats", "Casual Shirts"]
            },
            {
              title: "Apparel Fabrics & Materials",
              items: ["Fabric", "Knitted Fabrics", "Synthetic Fabrics", "Dress Materials"]
            },
            {
              title: "Designer & Fashion Bags",
              items: ["Embroidered Bags", "Sling Bag", "Ladies Bags", "Shoulder Bags"]
            },
            {
              title: "Sarees & Lehenga Suppliers",
              items: ["Bridal Lehenga", "Fancy Sarees", "Designer Lehenga", "Party Wear"]
            }
          ].map((box, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 hover:shadow-md transition"
            >
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                {box.title}
              </h3>

              <ul className="text-sm text-blue-600 space-y-1">
                {box.items.map((item, i) => (
                  <li key={i} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}