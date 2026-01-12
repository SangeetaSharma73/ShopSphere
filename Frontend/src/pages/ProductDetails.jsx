import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/productApi";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };
    loadProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img
        src={product.image || "https://via.placeholder.com/300"}
        alt={product.name}
        width="300"
      />
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>
      <button onClick={() => addToCart(product._id)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
