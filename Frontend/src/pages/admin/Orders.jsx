import { useEffect, useState } from "react";
import api from "../../api/axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await api.get("/orders/my");
      setOrders(data);
    };
    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          📦 My Orders
        </h2>

        {/* Empty State */}
        {orders.length === 0 && (
          <p className="text-center text-gray-500 mt-20">
            You haven’t placed any orders yet.
          </p>
        )}

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-xl shadow-md p-6 transition transform hover:scale-[1.01]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Order Info */}
                <div className="space-y-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>

                  <p className="text-gray-700 font-medium">
                    Items:{" "}
                    <span className="font-semibold">
                      {order.orderItems.length}
                    </span>
                  </p>
                </div>

                {/* Price */}
                <div className="text-xl font-bold text-indigo-600">
                  ₹{order.totalPrice}
                </div>
              </div>

              {/* Order ID */}
              <p className="text-xs text-gray-400 mt-4 break-all">
                Order ID: {order._id}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
