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

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading product...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <img
              src={product.image || "https://via.placeholder.com/400"}
              alt={product.name}
              className="w-full max-w-md rounded-xl object-cover transform transition duration-300 hover:scale-105"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                {product.name}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              <h3 className="text-2xl font-bold text-indigo-600 mb-6">
                ₹{product.price}
              </h3>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product._id)}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold
                         hover:bg-indigo-700 active:scale-95 transition duration-200 shadow-md"
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
