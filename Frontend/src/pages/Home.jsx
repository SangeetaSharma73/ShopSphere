import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";
import ProductCard from "../components/product/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          ✨ Latest <span className="text-indigo-600">Products</span>
        </h1>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="transform transition duration-300 hover:scale-105"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <p className="text-center text-gray-500 mt-20">
            No products available right now.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
