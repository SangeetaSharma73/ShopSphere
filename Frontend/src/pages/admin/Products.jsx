import { useEffect, useState } from "react";
import api from "../../api/axios";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await api.get("/products");
    setProducts(data);
  };

  const deleteProduct = async (id) => {
    if (window.confirm("Delete this product?")) {
      await api.delete(`/products/${id}`);
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Manage Products</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>{p.countInStock}</td>
              <td>
                <button onClick={() => deleteProduct(p._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
