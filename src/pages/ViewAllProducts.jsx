import { useLocation, useNavigate } from "react-router-dom";

export default function ViewAllProducts() {
  const location = useLocation();
  const navigate = useNavigate();

  const { title } = location.state || {};

  if (!title) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go Home
        </button>
      </div>
    );
  }

  /* ================= CATEGORY IMAGE DATABASE ================= */

  const categoryImages = {

    /* Apparel */
    "Apparel and Fashion Accessories": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
      "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hvbGVzYWxlJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=500",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500"
    ],

    /* Home Furnishings */
    "Home Furnishings": [
      "https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=500",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500",
      "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=500",
      "https://media.istockphoto.com/id/2168780344/photo/trendy-and-sleek-interior-living-room-with-a-beige-couch-a-coffee-table-and-a-white-wall-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=iT7YLsdE4VRExu2hkMUNpKlpAz8SkDbhWYP0swWP-v0=",
      "https://media.istockphoto.com/id/668067814/photo/furniture-display-sofa.webp?a=1&b=1&s=612x612&w=0&k=20&c=I4Rv3OsFDyBdNCbk37nTTbondY3RVry6-3maIF658q0=",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500"
    ],

    /* Food */
    "Food Products & Beverages": [
      "https://images.unsplash.com/photo-1607664608695-45aaa6d621fc?w=500",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500",
      "https://images.unsplash.com/photo-1615719413546-198b25453f85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500"
    ],

    /* Tools */
    "Tools & Equipment": [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500",
      "https://images.unsplash.com/photo-1562059390-a761a084768e?w=500",
      "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=500",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500",
      "https://plus.unsplash.com/premium_photo-1752533866443-fa7938c19d6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9vbHMlMjAlMjYlMjBFcXVpcG1lbnQlMjBidWxrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=500",
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500",
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500"
    ],
    "Cosmetics & Personal Care": [
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500",
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500",
  "https://images.unsplash.com/photo-1632410964690-9e47fea6a85f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXhwb3J0JTIwcXVhbGl0eSUyMGdvb2QlMjBjb3NtZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=500",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
  "https://plus.unsplash.com/premium_photo-1677350811768-debc0be16699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9wJTIwcmF0ZWQlMjBzdXBwbGllciUyMGNvc21ldGljJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=500"
],
"Pharmaceutical Drugs, Medicines and Healthcare Products": [
  "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=500",
  "https://media.istockphoto.com/id/926308436/photo/colorful-pills-and-tablets-on-blue-gradient-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=YDkTbrZT9zwbKen6-4kaU7YWP9_GhSPmCCej2-_kjBI=",
  "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500",
  "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?w=500",
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=500"
],
"Home Supplies": [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500",
  "https://images.unsplash.com/photo-1731569361273-e11f3545c03b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG9tZSUyMFN1cHBsaWVzJTIwd2hvbHNlJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=500",
  "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=500",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500",
  "https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=500"
],
"Industrial Machinery": [
  "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=500",
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500",
  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500",
  "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=500",
  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
  "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=500",
  "https://images.unsplash.com/photo-1562059390-a761a084768e?w=500"
],
"Real Estate, Building, Construction Material & Services": [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500",
  "https://plus.unsplash.com/premium_photo-1682148932578-5566a9808f48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVhbCUyMEVzdGF0ZSUyQyUyMEJ1aWxkaW5nJTJDJTIwQ29uc3RydWN0aW9uJTIwTWF0ZXJpYWwlMjAlMjYlMjBTZXJ2aWNlcyUyMGhpZ2glMjBkZW1hbmQlMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500",
  "https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=500"
],
"Sports Goods and Entertainment": [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
  "https://media.istockphoto.com/id/1158115722/photo/sports-and-games-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=bAk_yffTF8By30Iokzze-MJ85qvwjh8sqOnXC987fDE=",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500",
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500",
  "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=500",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
  "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=500",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500"
],

    /* Automobile */
    "Automobile, Auto Parts and Accessories": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500",
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=500",
      "https://media.istockphoto.com/id/1202921892/photo/cardboard-box-full-of-auto-parts-isolated-on-a-white-background-3d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=LHhEXqRuHRShiGJ355YCS51h06RQKOtw9GsJnpCbrwI=",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500",
      "https://images.unsplash.com/photo-1764013290141-63b13e311906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QXV0b21vYmlsZSUyQyUyMEF1dG8lMjBQYXJ0cyUyMGFuZCUyMEFjY2Vzc29yaWVzJTIwdG9wJTIwc3VwcGxpZXIlMjBwcm9kdWN0fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1493238792000-8113da705763?w=500"
    ]
  };

  /* ================= PRODUCT NAMES ================= */

  const productNames = [
    "Premium Quality Product",
    "Wholesale Supply Item",
    "Industrial Grade Equipment",
    "Export Quality Goods",
    "Bulk Order Product",
    "High Demand Market Item",
    "Top Rated Supplier Product",
    "Latest Collection Item"
  ];

  const images =
    categoryImages[title] ||
    Array(8).fill(
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500"
    );

  const products = images.map((image, i) => ({
    id: i + 1,
    name: productNames[i],
    price: "Request for Price",
    img: image
  }));

  const openProduct = (product) => {
    navigate("/product-details", { state: { product } });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-2xl md:text-3xl font-semibold mb-8">
          {title} - All Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => openProduct(product)}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 cursor-pointer p-4 border group"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-44 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="mt-4 text-blue-700 font-medium hover:underline">
                {product.name}
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                {product.price}
              </p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openProduct(product);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm transition"
                >
                  View
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openProduct(product);
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded text-sm transition"
                >
                  Inquiry
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}