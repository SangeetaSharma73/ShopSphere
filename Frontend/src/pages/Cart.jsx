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
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>
          Cart is empty <Link to="/">Go back</Link>
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.product._id}
              style={{ borderBottom: "1px solid #ddd" }}
            >
              <h4>{item.product.name}</h4>
              <p>Qty: {item.quantity}</p>
              <p>₹{item.product.price}</p>
              <button onClick={() => removeFromCart(item.product._id)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{totalPrice}</h3>
          <button onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
