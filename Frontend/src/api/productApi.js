import api from "./axios";

export const fetchProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

export const fetchProductById = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};
