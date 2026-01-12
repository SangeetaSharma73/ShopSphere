import { useEffect, useState } from "react";
import api from "../api/axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await api.get("/orders/my");
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>My Orders</h2>

      {orders.map((order) => (
        <div
          key={order._id}
          style={{ border: "1px solid #ddd", margin: "10px" }}
        >
          <p>Status: {order.status}</p>
          <p>Total: ₹{order.totalPrice}</p>
          <p>Items: {order.orderItems.length}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
