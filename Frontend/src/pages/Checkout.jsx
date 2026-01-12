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
    <div>
      <h2>Checkout</h2>

      <input
        placeholder="Address"
        onChange={(e) =>
          setShippingAddress({ ...shippingAddress, address: e.target.value })
        }
      />
      <input
        placeholder="City"
        onChange={(e) =>
          setShippingAddress({ ...shippingAddress, city: e.target.value })
        }
      />
      <input
        placeholder="Postal Code"
        onChange={(e) =>
          setShippingAddress({ ...shippingAddress, postalCode: e.target.value })
        }
      />
      <input
        placeholder="Country"
        onChange={(e) =>
          setShippingAddress({ ...shippingAddress, country: e.target.value })
        }
      />

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
