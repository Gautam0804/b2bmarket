import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import ApparelProductDetails from "./pages/ApparelProductDetails"; 
import SellerDashboard from "./pages/SellerDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import ViewAllProducts from "./pages/ViewAllProducts";
import JoinFree from "./pages/JoinFree";
import PostRequirement from "./pages/PostRequirement";


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/apparel-product" element={<ApparelProductDetails />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/view-all" element={<ViewAllProducts />} />
        <Route path="/join-free" element={<JoinFree />} />
        <Route path="/post-requirement" element={<PostRequirement />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;