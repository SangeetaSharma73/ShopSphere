import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, fetchCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          🛒 Your Cart
        </h2>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <p className="text-gray-600 mb-4 text-lg">
              Your cart is currently empty
            </p>
            <Link
              to="/"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold
                         hover:bg-indigo-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.product._id}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  {/* Product Info */}
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {item.product.name}
                    </h4>
                    <p className="text-gray-500">
                      Quantity:{" "}
                      <span className="font-medium">{item.quantity}</span>
                    </p>
                    <p className="text-gray-700 font-semibold">
                      ₹{item.product.price}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product._id)}
                    className="text-red-600 font-medium hover:text-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-10 bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Total: <span className="text-indigo-600">₹{totalPrice}</span>
              </h3>

              <button
                onClick={() => navigate("/checkout")}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg font-semibold
                           hover:bg-indigo-700 active:scale-95 transition shadow-md"
              >
                Proceed to Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
