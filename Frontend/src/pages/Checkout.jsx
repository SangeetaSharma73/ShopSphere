import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const placeOrder = async () => {
    await api.post("/orders", { shippingAddress });
    navigate("/orders");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          🚚 Checkout
        </h2>

        {/* Form */}
        <div className="space-y-5">
          <input
            type="text"
            placeholder="Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none
                       focus:ring-2 focus:ring-indigo-500 transition"
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                address: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="City"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none
                       focus:ring-2 focus:ring-indigo-500 transition"
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                city: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Postal Code"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none
                       focus:ring-2 focus:ring-indigo-500 transition"
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                postalCode: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Country"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none
                       focus:ring-2 focus:ring-indigo-500 transition"
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                country: e.target.value,
              })
            }
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={placeOrder}
          className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold
                     hover:bg-indigo-700 active:scale-95 transition shadow-md"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
