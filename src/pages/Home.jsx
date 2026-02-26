import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const trending = [
  {
    id: 101,
    name: "Dietary Supplements",
    price: "₹ 450 - ₹ 1,800 / Bottle",
    img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843"
  },
  {
    id: 102,
    name: "Ayurvedic & Herbal Powders",
    price: "₹ 200 - ₹ 900 / Kg",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
  },
  {
    id: 103,
    name: "Bakery Products",
    price: "₹ 50 - ₹ 500 / Box",
    img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec"
  },
  {
    id: 104,
    name: "Dry Fruits",
    price: "₹ 600 - ₹ 2,000 / Kg",
    img: "https://images.unsplash.com/photo-1607664608695-45aaa6d621fc"
  }
];

const popularProducts = [
  {
    id: 201,
    name: "Pure Leather Men Formal Shoes",
    price: "₹ 500 - ₹ 3,500 / Pair",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 202,
    name: "Decorative Laminated Sheets",
    price: "₹ 2.30 / Sq Meter",
    img: "https://plus.unsplash.com/premium_photo-1663840175586-1878be52118c"
  },
  {
    id: 203,
    name: "Square Rubber Interlocking Mat",
    price: "₹ 600 - ₹ 700 / Piece",
    img: "https://plus.unsplash.com/premium_photo-1675501130398-bcae2b387a33"
  },
  {
    id: 204,
    name: "BAJAJ Electric Automatic BUVC",
    price: "₹ 4,500 / Piece",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  }
];

export default function Home() {
  const navigate = useNavigate();

  const openProduct = (product) => {
    navigate("/product-details", { state: { product } });
  };

  const openCategoryBox = (name, img) => {
    navigate("/product-details", {
      state: {
        product: {
          id: Math.random(),
          name,
          price: "Request for Price",
          img
        }
      }
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-6">
      <div className="flex gap-6">
        <Sidebar />

        <div className="flex-1 space-y-10">

          {/* TRENDING */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Trending Product Categories
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trending.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openProduct(item)}
                  className="bg-gray-50 hover:shadow-xl rounded-lg p-4 cursor-pointer group transition"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-32 w-full object-cover rounded-md group-hover:scale-105 transition"
                  />
                  <p className="mt-3 font-semibold text-blue-600 group-hover:underline">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
{/* ================= ADVERTISEMENT ROW ================= */}
          <div className="bg-white shadow rounded-lg p-4">
            <div className="flex gap-4 overflow-x-auto">
              {[
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Advertisement"
                  className="h-20 w-64 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                />
              ))}
            </div>
          </div>

          {/* ================= APPAREL SECTION ================= */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">
              Apparel and Fashion Accessories
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="relative rounded-lg overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e"
    alt="Fashion"
    className="h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6 text-white">
    
    <h3 className="text-lg font-semibold mb-3">
      Winter Clothing & Accessories
    </h3>

    <button
      onClick={() =>
        navigate("/view-all", {
          state: {
            title: "Apparel and Fashion Accessories",
            category: "apparel"
          }
        })
      }
      className="bg-red-500 px-4 py-2 rounded text-sm w-max hover:bg-red-600"
    >
      View All
    </button>

  </div>
</div>
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      title: "Mens Clothing",
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=500"
    },
    {
      title: "Ladies Dresses",
      img: "https://media.istockphoto.com/id/1175412224/photo/woman-buying-clothes-at-department-store-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=F5SBcYUtlG4K8IEhGQ8op7CJxFcUS0NNABDjgRF70y8="
    },
    {
      title: "Unisex Clothing",
      img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
    },
    {
      title: "Fabrics",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500"
    },
    {
      title: "Bags",
      img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww"
    },
    {
      title: "Sarees",
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500"
    }
  ].map((cat, i) => (
    <div
      key={i}
      className="relative rounded-2xl overflow-hidden group cursor-pointer shadow hover:shadow-2xl transition duration-300"
    >
      {/* Image */}
      <img
        src={cat.img}
        alt={cat.title}
        className="h-40 w-full object-cover group-hover:scale-110 transition duration-700"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
        <h3 className="text-white text-sm font-semibold group-hover:text-yellow-300 transition">
          {cat.title}
        </h3>
      </div>
    </div>
  ))}
</div>
            </div>
          </div>

{/* ================= HOME FURNISHINGS ================= */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-6">
    Home Furnishings
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* Left Image */}
    <div className="relative rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
        alt="Home Furnishing"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6 text-white">
        <h3 className="text-lg font-semibold mb-3">
          Door Mats & Bath Mats
        </h3>
        <button
  onClick={() =>
    navigate("/view-all", {
      state: {
        title: "Home Furnishings",
        img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
      }
    })
  }
  className="bg-red-500 px-4 py-2 rounded text-sm w-max hover:bg-red-600"
>
  View All
</button>
      </div>
    </div>

  {/* Right Boxes */}
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      title: "Blankets & Quilts",
      img: "https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=500"
    },
    {
      title: "Bed Linen",
      img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500"
    },
    {
      title: "Carpets & Rugs",
      img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500"
    },
    {
      title: "Table Cloths",
      img: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=500"
    },
    {
      title: "Mattress & Foam",
      img: "https://media.istockphoto.com/id/2203399881/photo/warehouse-of-polyurethane-foam-blocks-multicolored-polyurethane-foam-blocks-furniture-foam.webp?a=1&b=1&s=612x612&w=0&k=20&c=dbYbLTNb8NR6NQj-d5nenPpsaaFASBIJfVVjNJ3qWJk="
    },
    {
      title: "Blinds & Wallpapers",
      img: "https://images.unsplash.com/photo-1518516278006-4aca92806257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxpbmQlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
    }
  ].map((cat, i) => (
    <div
      key={i}
      className="relative rounded-2xl overflow-hidden group cursor-pointer shadow hover:shadow-2xl transition duration-300"
    >
      {/* Image */}
      <img
        src={cat.img}
        alt={cat.title}
        className="h-40 w-full object-cover group-hover:scale-110 transition duration-700"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
        <h3 className="text-white text-sm font-semibold group-hover:text-yellow-300 transition">
          {cat.title}
        </h3>
      </div>
    </div>
  ))}
</div>

  </div>
</div>
{/* ================= FOOD PRODUCTS & BEVERAGES ================= */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-6">
    Food Products & Beverages
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* Left Image */}
    <div className="relative rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
        alt="Food Products"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6 text-white">
        <h3 className="text-lg font-semibold mb-3">
          Confectionery & Bakery Products
        </h3>
        <button
  onClick={() =>
    navigate("/view-all", {
      state: {
        title: "Food Products & Beverages",
        img: "https://images.unsplash.com/photo-1542838132-92c53300491e"
      }
    })
  }
  className="bg-red-500 px-4 py-2 rounded text-sm w-max hover:bg-red-600"
>
  View All
</button>
      </div>
    </div>

    {/* Right Boxes */}
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    { title: "Dry Fruits & Nuts", img: "https://images.unsplash.com/photo-1607664608695-45aaa6d621fc?w=500" },
    { title: "Tea & Coffee", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500" },
    { title: "Food Grains", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500" },
    { title: "Cooking Spices", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500" },
    { title: "Dairy Products", img: "https://images.unsplash.com/photo-1635714293982-65445548ac42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhcnklMjBwcm9kdWN0fGVufDB8fDB8fHww" },
    { title: "Bakery Products", img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500" }
  ].map((cat, i) => (
    <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer shadow hover:shadow-2xl transition duration-300">
      <img src={cat.img} alt={cat.title} className="h-40 w-full object-cover group-hover:scale-110 transition duration-700"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
        <h3 className="text-white text-sm font-semibold group-hover:text-yellow-300 transition">{cat.title}</h3>
      </div>
    </div>
  ))}
</div>

  </div>
</div>
{/* ================= TOOLS & EQUIPMENT ================= */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-6">
    Tools & Equipment
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* Left Image */}
    <div className="relative rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
        alt="Tools"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6 text-white">
        <h3 className="text-lg font-semibold mb-3">
          Testing Equipment & Machines
        </h3>
       <button
  onClick={() =>
    navigate("/view-all", {
      state: {
        title: "Tools & Equipment",
        img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758"
      }
    })
  }
  className="bg-red-500 px-4 py-2 rounded text-sm w-max hover:bg-red-600"
>
  View All
</button>
      </div>
    </div>

    {/* Right Boxes */}
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    { title: "Testing Equipment", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500" },
    { title: "Power Tools", img: "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=500" },
    { title: "Hammers & Screwdrivers", img: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=500" },
    { title: "Measuring Instruments", img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500" },
    { title: "Weighing Scales", img: "https://images.unsplash.com/photo-1587740896339-96a76170508d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VpZ2hpbmclMjBzY2FsZXxlbnwwfHwwfHx8MA%3D%3D" },
    { title: "Machine Tools", img: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=500" }
  ].map((cat, i) => (
    <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer shadow hover:shadow-2xl transition duration-300">
      <img src={cat.img} alt={cat.title} className="h-40 w-full object-cover group-hover:scale-110 transition duration-700"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
        <h3 className="text-white text-sm font-semibold group-hover:text-yellow-300 transition">{cat.title}</h3>
      </div>
    </div>
  ))}
</div>

  </div>
</div>
{/* ================= FIND SUPPLIERS BY REGION ================= */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-6">
    Find Suppliers by Region
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
    {[
      "New Delhi",
      "Mumbai",
      "Gurgaon",
      "Noida",
      "Bangalore",
      "Ahmedabad",
      "Kolkata",
      "Chennai"
    ].map((city, i) => (
      <div
        key={i}
        className="border rounded-lg p-4 text-center hover:shadow-md transition cursor-pointer bg-gray-50"
      >
        <div className="text-3xl mb-2">🏙️</div>
        <p className="text-sm font-medium">{city}</p>
      </div>
    ))}
  </div>
</div>
{/* ================= COSMETICS & PERSONAL CARE ================= */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-6">
    Cosmetics & Personal Care
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* Left Image */}
    <div className="relative rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
        alt="Cosmetics"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6 text-white">
        <h3 className="text-lg font-semibold mb-3">
          Beauty & Skincare Products
        </h3>
       <button
  onClick={() =>
    navigate("/view-all", {
      state: {
        title: "Cosmetics & Personal Care",
        img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348"
      }
    })
  }
  className="bg-red-500 px-4 py-2 rounded text-sm w-max hover:bg-red-600"
>
  View All
</button>
      </div>
    </div>

    {/* Right Boxes */}
   <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    { title: "Skin Care", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500" },
    { title: "Hair Care", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500" },
    { title: "Baby Care", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500" },
    { title: "Hand Sanitizers", img: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=500" },
    { title: "Massage Oils", img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500" },
    { title: "Personal Hygiene", img: "https://media.istockphoto.com/id/864655568/photo/handwash.webp?a=1&b=1&s=612x612&w=0&k=20&c=O4YVC7JruH7_87UEBGd3Yt9fgGJcWPbT-BNf2BNo6G0=" }
  ].map((cat, i) => (
    <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer shadow hover:shadow-2xl transition duration-300">
      <img src={cat.img} alt={cat.title} className="h-40 w-full object-cover group-hover:scale-110 transition duration-700"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
        <h3 className="text-white text-sm font-semibold group-hover:text-yellow-300 transition">{cat.title}</h3>
      </div>
    </div>
  ))}
</div>

  </div>
</div>
{/* ================= PHARMACEUTICAL & HEALTHCARE ================= */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-6">
    Pharmaceutical Drugs, Medicines and Healthcare Products
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* Left Image */}
    <div className="relative rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=800&q=80"
        alt="Healthcare"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6 text-white">
        <ul className="space-y-1 text-sm mb-4">
          <li>Cancer & TB Drugs</li>
          <li>Pharmaceutical Raw Materials</li>
          <li>Sexual Wellness Products</li>
          <li>Cardiovascular Medication</li>
        </ul>
       <button
  onClick={() =>
    navigate("/view-all", {
      state: {
        title: "Pharmaceutical Drugs, Medicines and Healthcare Products",
        category: "pharmaceutical"
      }
    })
  }
  className="bg-red-500 px-4 py-2 rounded text-sm w-max hover:bg-red-600"
>
  View All
</button>
      </div>
    </div>

    {/* Right Boxes */}
   <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    { title: "Medicines & Tonics", img: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=500" },
    { title: "Dietary Supplements", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500" },
    { title: "Medical Equipment", img: "https://images.unsplash.com/photo-1641877492086-771bc14a8e5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaWNhbCUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D" },
    { title: "Health Care Products", img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500" },
    { title: "Pain Relief Drugs", img: "https://images.unsplash.com/photo-1644878601239-fdc9fb1b39c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbiUyMHJlbGlmJTIwZHJ1Z3N8ZW58MHx8MHx8fDA%3D" },
    { title: "Pharma Raw Materials", img: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=500" }
  ].map((cat, i) => (
    <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer shadow hover:shadow-2xl transition duration-300">
      <img src={cat.img} alt={cat.title} className="h-40 w-full object-cover group-hover:scale-110 transition duration-700"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
        <h3 className="text-white text-sm font-semibold group-hover:text-yellow-300 transition">{cat.title}</h3>
      </div>
    </div>
  ))}
</div>

  </div>
</div>
{/* ================= HOME SUPPLIES ================= */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-6">
    Home Supplies
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* Left Image */}
    <div className="relative rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
        alt="Home Supplies"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6 text-white">
        <ul className="space-y-1 text-sm mb-4">
          <li>Food Storage Containers</li>
          <li>Coffee Mugs & Tea Sets</li>
          <li>Spoons & Cutlery</li>
          <li>Glassware & Artware</li>
        </ul>
       <button
  onClick={() =>
    navigate("/view-all", {
      state: {
        title: "Home Supplies",
        category: "homesupplies"
      }
    })
  }
  className="bg-red-500 px-4 py-2 rounded text-sm w-max hover:bg-red-600"
>
  View All
</button>
      </div>
    </div>

    {/* Right Boxes */}
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    { title: "Dinnerware", img: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=500" },
    { title: "Kitchenware", img: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500" },
    { title: "Cleaning Products", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500" },
    { title: "Storage Containers", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500" },
    { title: "Pooja Items", img: "https://plus.unsplash.com/premium_photo-1675053533678-615611ecc0b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9vamElMjBpdGVtc3xlbnwwfHwwfHx8MA%3D%3D" },
    { title: "Soaps & Detergents", img: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=500" }
  ].map((cat, i) => (
    <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer shadow hover:shadow-2xl transition duration-300">
      <img src={cat.img} alt={cat.title} className="h-40 w-full object-cover group-hover:scale-110 transition duration-700"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
        <h3 className="text-white text-sm font-semibold group-hover:text-yellow-300 transition">{cat.title}</h3>
      </div>
    </div>
  ))}
</div>

  </div>
</div>
{/* ================= INDUSTRIAL MACHINERY ================= */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-6">
    Industrial Machinery
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* Left Image */}
    <div className="relative rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kdXN0cmlhbCUyMG1hY2hpbmVyeXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Industrial Machinery"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6 text-white">
        <ul className="space-y-1 text-sm mb-4">
          <li>Machines & Equipment</li>
          <li>Conveyors & Components</li>
          <li>Pollution Control Devices</li>
          <li>Industrial Ovens & Furnaces</li>
        </ul>
        <button
  onClick={() =>
    navigate("/view-all", {
      state: {
        title: "Industrial Machinery",
        category: "industrial"
      }
    })
  }
  className="bg-red-500 px-4 py-2 rounded text-sm w-max hover:bg-red-600"
>
  View All
</button>
      </div>
    </div>

    {/* Right Boxes */}
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    { title: "Processing Machines", img: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=500" },
    { title: "Oil Extraction", img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500" },
    { title: "Grinding Machines", img: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=500" },
    { title: "Material Handling", img: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=500" },
    { title: "Cutting Machines", img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500" },
    { title: "Water Treatment Plants", img: "https://images.unsplash.com/photo-1677912996978-803bf60f15ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjB0cmF0bWVudCUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D" }
  ].map((cat, i) => (
    <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer shadow hover:shadow-2xl transition duration-300">
      <img src={cat.img} alt={cat.title} className="h-40 w-full object-cover group-hover:scale-110 transition duration-700"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
        <h3 className="text-white text-sm font-semibold group-hover:text-yellow-300 transition">{cat.title}</h3>
      </div>
    </div>
  ))}
</div>

  </div>
</div>
{/* ================= REAL ESTATE & CONSTRUCTION ================= */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-6">
    Real Estate, Building, Construction Material & Services
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* Left Image */}
    <div className="relative rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
        alt="Construction"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6 text-white">
        <ul className="space-y-1 text-sm mb-4">
          <li>Bricks & Construction Materials</li>
          <li>PVC, HDPE & Plastic Pipes</li>
          <li>Steel Plates & Rods</li>
          <li>Construction Machinery</li>
        </ul>
      <button
  onClick={() =>
    navigate("/view-all", {
      state: {
        title: "Real Estate, Building, Construction Material & Services",
        category: "realestate"
      }
    })
  }
  className="bg-red-500 px-4 py-2 rounded text-sm w-max hover:bg-red-600"
>
  View All
</button>
      </div>
    </div>

    {/* Right Boxes */}
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    { title: "Bricks & Materials", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500" },
    { title: "Steel Rods", img: "https://images.unsplash.com/photo-1659546027624-8448b4011da5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlZWwlMjByb2Fkc3xlbnwwfHwwfHx8MA%3D%3D" },
    { title: "Construction Machinery", img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500" },
    { title: "Paints & Wall Putty", img: "https://media.istockphoto.com/id/2255408552/photo/scraper-putty-knife.webp?a=1&b=1&s=612x612&w=0&k=20&c=1sVTl2dI_TJWun_5El_7emHwJIKjzvEeOJ-th2Cdy9U=" },
    { title: "Sanitary Ware", img: "https://media.istockphoto.com/id/2182900647/photo/view-of-the-interior-of-the-bamberg-cathedral.webp?a=1&b=1&s=612x612&w=0&k=20&c=iaazqaVt7Hf-BEJCc-GeLg9t5KVnp4m8xbZs2R_KT-A=" },
    { title: "Pipe Fittings", img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500" }
  ].map((cat, i) => (
    <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer shadow hover:shadow-2xl transition duration-300">
      <img src={cat.img} alt={cat.title} className="h-40 w-full object-cover group-hover:scale-110 transition duration-700"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
        <h3 className="text-white text-sm font-semibold group-hover:text-yellow-300 transition">{cat.title}</h3>
      </div>
    </div>
  ))}
</div>

  </div>
</div>
{/* ================= SPORTS GOODS ================= */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-6">
    Sports Goods and Entertainment
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* Left Image */}
    <div className="relative rounded-lg overflow-hidden">
      <img
        src="https://plus.unsplash.com/premium_photo-1664303119944-4cf5302bb701?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnR8ZW58MHx8MHx8fDA%3D"
        alt="Sports"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6 text-white">
        <ul className="space-y-1 text-sm mb-4">
          <li>Camping & Hunting Equipment</li>
          <li>Swimming Pool & Water Sports</li>
          <li>Exercise Machines</li>
          <li>Sports Bags</li>
        </ul>
       <button
  onClick={() =>
    navigate("/view-all", {
      state: {
        title: "Sports Goods and Entertainment",
        category: "sports"
      }
    })
  }
  className="bg-red-500 px-4 py-2 rounded text-sm w-max hover:bg-red-600"
>
  View All
</button>
      </div>
    </div>

    {/* Right Boxes */}
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    { title: "Fitness Equipment", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500" },
    { title: "Dumbbells", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500" },
    { title: "Swimming Gear", img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=500" },
    { title: "Sports Shoes", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
    { title: "Camping Gear", img: "https://images.unsplash.com/photo-1625013964767-0e4b3c041607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGluZyUyMGdlYXJ8ZW58MHx8MHx8fDA%3D" },
    { title: "Sports Wear", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=500" }
  ].map((cat, i) => (
    <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer shadow hover:shadow-2xl transition duration-300">
      <img src={cat.img} alt={cat.title} className="h-40 w-full object-cover group-hover:scale-110 transition duration-700"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
        <h3 className="text-white text-sm font-semibold group-hover:text-yellow-300 transition">{cat.title}</h3>
      </div>
    </div>
  ))}
</div>

  </div>
</div>
{/* ================= AUTOMOBILE ================= */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-6">
    Automobile, Auto Parts and Accessories
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* Left Image */}
    <div className="relative rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
        alt="Automobile"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6 text-white">
        <ul className="space-y-1 text-sm mb-4">
          <li>Automotive Body Building</li>
          <li>Auto Electrical Parts</li>
          <li>Exhaust Systems</li>
          <li>Commercial Vehicles</li>
        </ul>
      <button
  onClick={() =>
    navigate("/view-all", {
      state: {
        title: "Automobile, Auto Parts and Accessories",
        category: "automobile"
      }
    })
  }
  className="bg-red-500 px-4 py-2 rounded text-sm w-max hover:bg-red-600"
>
  View All
</button>
      </div>
    </div>

    {/* Right Boxes */}
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    { title: "Braking Systems", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500" },
    { title: "Engine Parts", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500" },
    { title: "Auto Electrical Parts", img: "https://plus.unsplash.com/premium_photo-1677009834523-367c2e9b281c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXV0byUyMGVsZWN0aWNhbCUyMHBhcnRzfGVufDB8fDB8fHww" },
    { title: "Repair Tools", img: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=500" },
    { title: "Fuel Injection System", img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500" },
    { title: "Commercial Vehicles", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500" }
  ].map((cat, i) => (
    <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer shadow hover:shadow-2xl transition duration-300">
      <img src={cat.img} alt={cat.title} className="h-40 w-full object-cover group-hover:scale-110 transition duration-700"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
        <h3 className="text-white text-sm font-semibold group-hover:text-yellow-300 transition">{cat.title}</h3>
      </div>
    </div>
  ))}
</div>

  </div>
</div>
{/* ================= FIND SUPPLIERS BY COUNTRY ================= */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-6 text-center">
    Find Suppliers by Country
  </h2>

  <div className="flex flex-wrap justify-center gap-8">

    {[
      { name: "India", flag: "🇮🇳" },
      { name: "UAE", flag: "🇦🇪" },
      { name: "USA", flag: "🇺🇸" },
      { name: "Canada", flag: "🇨🇦" },
      { name: "Malaysia", flag: "🇲🇾" },
      { name: "Singapore", flag: "🇸🇬" },
      { name: "Saudi Arabia", flag: "🇸🇦" },
      { name: "Australia", flag: "🇦🇺" }
    ].map((country, i) => (
      <div key={i} className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
        <div className="text-4xl mb-2">{country.flag}</div>
        <p className="text-sm font-medium">{country.name}</p>
      </div>
    ))}

  </div>
</div>
{/* =================  WEB STORIES ================= */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-6">
     Web Stories
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {[
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1758274251734-072c6b996181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R5bGlzaCUyMHNob3Bpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80"
    ].map((img, i) => (
      <div key={i} className="rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition">
        <img
          src={img}
          alt="Web Story"
          className="h-48 w-full object-cover"
        />
      </div>
    ))}

  </div>
</div>
{/* ================= POPULAR PRODUCTS ================= */}
<div className="bg-white py-10 px-6 mt-8">
  <h2 className="text-2xl font-semibold mb-6">
    Popular Products in India
  </h2>

  <div className="relative">

    {/* Scroll Container */}
    <div className="flex overflow-x-auto gap-6 scrollbar-hide">

      {[
  {
    id: 301,
    name: "Pure Leather Men Formal Shoes",
    price: "₹ 500 - ₹ 3,500 / Pair",
    img: "https://images.unsplash.com/photo-1653868250450-b83e6263d427?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVyZSUyMGxlYXRoZXIlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 302,
    name: "Decorative Laminated Sheets",
    price: "₹ 2.30 / Sq Meter",
    img: "https://plus.unsplash.com/premium_photo-1663840175586-1878be52118c"
  },
  {
    id: 303,
    name: "Square Rubber Interlocking Mat",
    price: "₹ 600 - ₹ 700 / Piece",
    img: "https://plus.unsplash.com/premium_photo-1675501130398-bcae2b387a33"
  },
  {
    id: 304,
    name: "BAJAJ Electric Automatic BUVC",
    price: "₹ 4,500 / Piece",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 305,
    name: "Double Bed With Storage Box",
    price: "Request a Quote",
    img: "https://images.unsplash.com/photo-1723258343563-7d71a55d6dfa"
  },
  {
    id: 306,
    name: "Printed Paper Carton Box",
    price: "₹ 1 - ₹ 20 / Piece",
    img: "https://images.unsplash.com/photo-1631010231888-777b6285ef84"
  }
].map((product) => (
  <div
    key={product.id}
    onClick={() => openProduct(product)}
    className="min-w-[220px] bg-gray-50 rounded-lg shadow hover:shadow-xl transition p-4 cursor-pointer group"
  >
    <img
      src={product.img}
      alt={product.name}
      className="h-36 w-full object-cover rounded-md mb-3 group-hover:scale-105 transition"
    />

    <p className="text-sm font-medium text-blue-700 group-hover:underline line-clamp-2">
      {product.name}
    </p>

    <p className="text-sm font-semibold mt-2 text-gray-700">
      {product.price}
    </p>
  </div>
))}
    </div>

  </div>
</div>
        </div>
      </div>
    </div>
  );
}