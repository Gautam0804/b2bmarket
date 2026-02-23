import { useParams } from "react-router-dom";
import { useState } from "react";
import ViewMobileModal from "../components/ViewMobileModal";
import SendInquiryModal from "../components/SendInquiryModal";

/* ================= CATEGORY DATA ================= */

const categoryProducts = {
 "home-supplies": [
    { id: 1, name: "Stainless Steel Dinner Plate", price: "₹ 250 / Piece", img: "https://images.unsplash.com/photo-1630527152680-500b5453fb04?w=500" },
    { id: 2, name: "Kitchen Utensil Set", price: "₹ 1,200 / Set", img: "https://images.unsplash.com/photo-1738484708927-c1f45df0b56e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S2l0Y2hlbiUyMFV0ZW5zaWwlMjBTZXR8ZW58MHx8MHx8fDA%3D" },
    { id: 3, name: "Plastic Storage Bucket", price: "₹ 180 / Piece", img: "https://images.unsplash.com/photo-1601602899110-201f02bd3cc2?w=500" },
    { id: 4, name: "Modern Table Lamp", price: "₹ 950 / Piece", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500" },
    { id: 5, name: "Wall Clock", price: "₹ 850 / Piece", img: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=500" },
    { id: 6, name: "Ceramic Coffee Mug", price: "₹ 120 / Piece", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500" },
    { id: 7, name: "LED Ceiling Light", price: "₹ 650 / Piece", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500" },
    { id: 8, name: "Home Storage Rack", price: "₹ 1,500 / Unit", img: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=500" }
  ],

  /* ================= AGRICULTURE ================= */
  "agriculture": [
    { id: 11, name: "Organic Fertilizer", price: "₹ 500 / Bag", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500" },
    { id: 12, name: "Tractor Plough Machine", price: "₹ 85,000 / Piece", img: "https://media.istockphoto.com/id/483452183/photo/close-up-of-agriculture-red-tractor-cultivating-field-over-blue-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=Uq-gcIQ_7Vcb2cr5hTw0rO2yiB6mxZ70Nuv2CdScMOk=" },
    { id: 13, name: "Fresh Wheat Grain", price: "₹ 35 / Kg", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500" },
    { id: 14, name: "Drip Irrigation Pipe", price: "₹ 40 / Meter", img: "https://images.unsplash.com/photo-1738598665698-7fd7af4b5e0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RHJpcCUyMElycmlnYXRpb24lMjBQaXBlfGVufDB8fDB8fHww" },
    { id: 15, name: "Rice Seeds", price: "₹ 90 / Kg", img: "https://images.unsplash.com/photo-1613758235256-43a7bdc21d82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJpY2UlMjBTZWVkc3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 16, name: "Water Pump Machine", price: "₹ 6,500 / Piece", img: "https://plus.unsplash.com/premium_photo-1661962539511-27704c1821cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2F0ZXIlMjBQdW1wJTIwTWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 17, name: "Farming Hand Tools", price: "₹ 750 / Set", img: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=500" },
    { id: 18, name: "Fresh Vegetables Pack", price: "₹ 30 / Kg", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500" }
  ],

  /* ================= FOOD PRODUCTS ================= */
  "food-products": [
    { id: 21, name: "Premium Basmati Rice", price: "₹ 120 / Kg", img: "https://images.unsplash.com/photo-1686820740687-426a7b9b2043?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFByZW1pdW0lMjBCYXNtYXRpJTIwUmljZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 22, name: "Organic Wheat Flour", price: "₹ 45 / Kg", img: "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE9yZ2FuaWMlMjBXaGVhdCUyMEZsb3VyfGVufDB8fDB8fHww" },
    { id: 23, name: "Natural Honey Bottle", price: "₹ 320 / Bottle", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500" },
    { id: 24, name: "Green Tea Leaves", price: "₹ 600 / Kg", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=500" },
    { id: 25, name: "Instant Coffee Powder", price: "₹ 450 / Jar", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500" },
    { id: 26, name: "Spice Masala Powder", price: "₹ 220 / Packet", img: "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=500" },
    { id: 27, name: "Chocolate Cookies Pack", price: "₹ 150 / Box", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500" },
    { id: 28, name: "Cold Pressed Mustard Oil", price: "₹ 180 / Litre", img: "https://plus.unsplash.com/premium_photo-1700844300861-3f1e9cae83d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29sZCUyMFByZXNzZWQlMjBNdXN0YXJkJTIwT2lsfGVufDB8fDB8fHww" }
  ],

  /* ================= APPAREL ================= */
  "apparel-fashion": [
    { id: 31, name: "Men Formal Shirt", price: "₹ 1,200 / Piece", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500" },
    { id: 32, name: "Women Red Kurti", price: "₹ 950 / Piece", img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500" },
    { id: 33, name: "Leather Handbag", price: "₹ 2,500 / Piece", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" },
    { id: 34, name: "Casual Sneakers", price: "₹ 2,200 / Pair", img: "https://plus.unsplash.com/premium_photo-1665413642308-c5c1ed052d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FzdWFsJTIwU25lYWtlcnN8ZW58MHx8MHx8fDA%3D" },
    { id: 35, name: "Denim Jeans", price: "₹ 1,800 / Piece", img: "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVuaW0lMjBKZWFuc3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 36, name: "Ladies Saree", price: "₹ 3,500 / Piece", img: "https://plus.unsplash.com/premium_photo-1664303722806-6342e68db1ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFkaWVzJTIwU2FyZWV8ZW58MHx8MHx8fDA%3D" },
    { id: 37, name: "Winter Jacket", price: "₹ 2,800 / Piece", img: "https://images.unsplash.com/photo-1706765779494-2705542ebe74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2ludGVyJTIwSmFja2V0fGVufDB8fDB8fHww" },
    { id: 38, name: "Sports T-Shirt", price: "₹ 650 / Piece", img: "https://images.unsplash.com/photo-1718731236356-3b984904ac7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BvcnRzJTIwVC1TaGlydHxlbnwwfHwwfHx8MA%3D%3D" }
  ],

  /* ================= CHEMICALS ================= */
  "chemicals": [
    { id: 41, name: "Hydrochloric Acid", price: "₹ 45 / Litre", img: "https://plus.unsplash.com/premium_photo-1715107535121-61781e75325b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SHlkcm9jaGxvcmljJTIwQWNpZHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 42, name: "Liquid Phenyl Cleaner", price: "₹ 120 / Litre", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500" },
    { id: 43, name: "Sodium Hydroxide Flakes", price: "₹ 60 / Kg", img: "https://images.unsplash.com/photo-1729708273852-b63222c8b35d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SHlkcm9jaGxvcmljJTIwQWNpZFNvZGl1bSUyMEh5ZHJveGlkZSUyMEZsYWtlc3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 44, name: "Acetic Acid Chemical", price: "₹ 75 / Litre", img: "https://plus.unsplash.com/premium_photo-1715107534823-ea682a93cf1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWNldGljJTIwQWNpZCUyMENoZW1pY2FsfGVufDB8fDB8fHww" },
    { id: 45, name: "Industrial Lubricant Oil", price: "₹ 220 / Litre", img: "https://images.unsplash.com/photo-1738918903155-0601cdc65818?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW5kdXN0cmlhbCUyMEx1YnJpY2FudCUyME9pbHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 46, name: "Paint Thinner", price: "₹ 140 / Litre", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500" },
    { id: 47, name: "Chemical Storage Drum", price: "₹ 1,200 / Unit", img: "https://media.istockphoto.com/id/472958764/photo/blue-drums-and-container.webp?a=1&b=1&s=612x612&w=0&k=20&c=J53G8-g-uCbdzM5GMtYOhu_XclkrqRSnijll52v5rK8=" },
    { id: 48, name: "Industrial Cleaning Solvent", price: "₹ 180 / Litre", img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500" }
  ],

  /* ================= INDUSTRIAL ================= */
  "industrial-supplies": [
    { id: 51, name: "Air Compressor", price: "₹ 35,000 / Piece", img: "https://plus.unsplash.com/premium_photo-1682147307418-07ad7e897bc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWlyJTIwQ29tcHJlc3NvcnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 52, name: "Hydraulic Jack", price: "₹ 4,500 / Piece", img: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=500" },
    { id: 53, name: "Welding Machine", price: "₹ 12,000 / Piece", img: "https://plus.unsplash.com/premium_photo-1677172367660-ecaec24b2c1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2VsZGluZyUyME1hY2hpbmV8ZW58MHx8MHx8fDA%3D" },
    { id: 54, name: "Power Drill", price: "₹ 2,800 / Piece", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500" },
    { id: 55, name: "Industrial Generator", price: "₹ 85,000 / Unit", img: "https://plus.unsplash.com/premium_photo-1682124451727-92ecf1e065ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5kdXN0cmlhbCUyMEdlbmVyYXRvcnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 56, name: "Safety Helmet", price: "₹ 350 / Piece", img: "https://images.unsplash.com/photo-1662309376159-b95fb193d96b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2FmZXR5JTIwSGVsbWV0fGVufDB8fDB8fHww" },
    { id: 57, name: "Electric Motor Pump", price: "₹ 6,500 / Piece", img: "https://media.istockphoto.com/id/528438141/photo/factory-equipment.webp?a=1&b=1&s=612x612&w=0&k=20&c=E5DHpcwfLCupgRie_NzYjlSax2kCXNgHU6jFOloRXp4=" },
    { id: 58, name: "Industrial Conveyor Belt", price: "₹ 15,000 / Unit", img: "https://plus.unsplash.com/premium_photo-1682144720427-185b17dd4abe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5kdXN0cmlhbCUyMENvbnZleW9yJTIwQmVsdHxlbnwwfHwwfHx8MA%3D%3D" }
  ],

  /* ================= CONSTRUCTION ================= */
  "construction-real-estate": [
    { id: 61, name: "Red Clay Bricks", price: "₹ 6 / Piece", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500" },
    { id: 62, name: "Cement Bags", price: "₹ 380 / Bag", img: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500" },
    { id: 63, name: "Steel TMT Bars", price: "₹ 58 / Kg", img: "https://media.istockphoto.com/id/2158664631/photo/the-role-of-steel-rebars-in-concrete-reinforcement.webp?a=1&b=1&s=612x612&w=0&k=20&c=EL1BAxIVIUEeM13IaInYippBtp3b37iQJkp_Uh53yMk=" },
    { id: 64, name: "Ceramic Floor Tiles", price: "₹ 45 / Sq Ft", img: "https://images.unsplash.com/photo-1770009971288-0613b9c7b64f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2VyYW1pYyUyMEZsb29yJTIwVGlsZXN8ZW58MHx8MHx8fDA%3D" },
    { id: 65, name: "Wooden Doors", price: "₹ 7,500 / Piece", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500" },
    { id: 66, name: "Concrete Mixer Machine", price: "₹ 65,000 / Unit", img: "https://plus.unsplash.com/premium_photo-1674927125657-e8782933d009?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29uY3JldGUlMjBNaXhlciUyME1hY2hpbmV8ZW58MHx8MHx8fDA%3D" },
    { id: 67, name: "Aluminium Window Frame", price: "₹ 450 / Sq Ft", img: "https://images.unsplash.com/photo-1758998256408-ab2c9fbec19b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWx1bWluaXVtJTIwV2luZG93JTIwRnJhbWV8ZW58MHx8MHx8fDA%3D" },
    { id: 68, name: "Construction Safety Jacket", price: "₹ 450 / Piece", img: "https://images.unsplash.com/photo-1760009436767-d154e930e55c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q29uc3RydWN0aW9uJTIwU2FmZXR5JTIwSmFja2V0fGVufDB8fDB8fHww" }
  ],

  /* ================= FURNITURE ================= */
  "furniture": [
    { id: 71, name: "Wooden Dining Table", price: "₹ 25,000 / Set", img: "https://images.unsplash.com/photo-1567016549639-3a28e63e1e4c?w=500" },
    { id: 72, name: "Office Chair", price: "₹ 5,500 / Piece", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500" },
    { id: 73, name: "Modern Sofa Set", price: "₹ 45,000 / Set", img: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=500" },
    { id: 74, name: "Wooden Bed Frame", price: "₹ 18,000 / Piece", img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500" },
    { id: 75, name: "Study Table", price: "₹ 7,500 / Piece", img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=500" },
    { id: 76, name: "Bookshelf Rack", price: "₹ 6,500 / Unit", img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=500" },
    { id: 77, name: "TV Cabinet", price: "₹ 9,500 / Piece", img: "https://images.unsplash.com/photo-1760155089939-1c9d2a45c0e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VFYlMjBDYWJpbmV0fGVufDB8fDB8fHww" },
    { id: 78, name: "Wardrobe Closet", price: "₹ 22,000 / Piece", img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500" }
  ],

  /* ================= HEALTH & BEAUTY ================= */
  "health-beauty": [
    { id: 81, name: "Herbal Face Cream", price: "₹ 350 / Piece", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500" },
    { id: 82, name: "Hair Growth Oil", price: "₹ 280 / Bottle", img: "https://images.unsplash.com/photo-1699373381540-e386f312415b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEdyb3d0aCUyME9pbHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 83, name: "Protein Powder Supplement", price: "₹ 1,800 / Jar", img: "https://media.istockphoto.com/id/1491299490/photo/closeup-of-young-asian-athletic-woman-preparing-protein-shake-at-home-diet-and-healthy-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=e8v1N499CTk3Du2jhwv_lvJgTzIK4JjHlCdWiZ6rwhg=" },
    { id: 84, name: "Vitamin Capsules", price: "₹ 450 / Box", img: "https://plus.unsplash.com/premium_photo-1732689834566-a7c313f00478?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Vml0YW1pbiUyMENhcHN1bGVzfGVufDB8fDB8fHww" },
    { id: 85, name: "Natural Face Serum", price: "₹ 550 / Bottle", img: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=500" },
    { id: 86, name: "Organic Soap", price: "₹ 90 / Piece", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500" },
    { id: 87, name: "Hand Sanitizer", price: "₹ 120 / Bottle", img: "https://plus.unsplash.com/premium_photo-1661591285003-9abbde56bf8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGFuZCUyMFNhbml0aXplcnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 88, name: "Ayurvedic Medicine Kit", price: "₹ 1,200 / Kit", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500" }
  ]


};

/* ================= COMPONENT ================= */

export default function CategoryPage() {
  const { slug } = useParams();
  const products = categoryProducts[slug] || [];

  // Modal states
  const [showMobileModal, setShowMobileModal] = useState(false);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-6">
      <div className="flex gap-6">

        {/* LEFT SIDEBAR */}
        <div className="w-64 bg-white p-4 rounded shadow h-fit">
          <h3 className="font-semibold mb-3">Related Category</h3>
          <ul className="space-y-2 text-sm text-blue-600">
            <li>Premium Products</li>
            <li>Top Rated</li>
            <li>Latest Listings</li>
            <li>Bulk Suppliers</li>
          </ul>

          <hr className="my-4" />

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

          <h1 className="text-2xl font-semibold capitalize">
            {slug?.replace(/-/g, " ")}
          </h1>

          {products.length === 0 ? (
            <p className="text-gray-600">No products found.</p>
          ) : (
            products.map((product) => (
              <div key={product.id} className="bg-white rounded shadow p-4">
                <div className="flex gap-6">

                  {/* Image */}
                  <img
                    src={product.img}
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
                      <p><b>MOQ:</b> 10 Pieces</p>
                      <p><b>Supply Type:</b> Supplier</p>
                      <p><b>Country of Origin:</b> India</p>
                    </div>

                    <div className="flex gap-3 mt-4">

                      {/* VIEW MOBILE */}
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setShowMobileModal(true);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition"
                      >
                        View Mobile
                      </button>

                      {/* SEND INQUIRY */}
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setShowInquiryModal(true);
                        }}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition"
                      >
                        Send Inquiry
                      </button>

                    </div>

                    <div className="mt-4 text-sm text-gray-700">
                      <p className="font-semibold">Verified Supplier</p>
                      <p>India</p>
                    </div>

                  </div>
                </div>
              </div>
            ))
          )}

        </div>

        {/* RIGHT INQUIRY BOX */}
        <div className="w-72 bg-white rounded shadow p-4 h-fit">
          <h3 className="font-semibold text-center mb-4">
            Get Best Price
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

          <button className="bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded transition">
            Submit Requirement
          </button>
        </div>

      </div>

      {/* MODALS */}

      <ViewMobileModal
        isOpen={showMobileModal}
        onClose={() => setShowMobileModal(false)}
        product={selectedProduct}
      />

      <SendInquiryModal
        isOpen={showInquiryModal}
        onClose={() => setShowInquiryModal(false)}
        product={selectedProduct}
      />

    </div>
  );
}