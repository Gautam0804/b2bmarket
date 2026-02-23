import { useEffect, useState } from "react";
import API from "../services/api";

export default function SellerDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.log("No token found");
          setLoading(false);
          return;
        }

        const res = await API.get("/inquiries/seller", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setInquiries(res.data.inquiries || []);
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Seller Dashboard</h1>

      {loading ? (
        <p>Loading...</p>
      ) : inquiries.length === 0 ? (
        <p>No inquiries yet.</p>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inq) => (
            <div key={inq._id} className="bg-white shadow p-4 rounded">
              <h3 className="font-semibold">
                Product: {inq.product?.title}
              </h3>
              <p>Message: {inq.message}</p>
              <p>Status: {inq.status}</p>
              <p>
                Buyer: {inq.buyer?.name} ({inq.buyer?.email})
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}