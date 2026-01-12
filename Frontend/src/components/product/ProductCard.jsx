import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={{ border: "1px solid #ddd", padding: "16px" }}>
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
        width="150"
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <Link to={`/product/${product._id}`}>View Details</Link>
      <br />
      <button onClick={() => addToCart(product._id)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
