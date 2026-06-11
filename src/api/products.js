import config from "@/config";
import axios from "axios";
import api from "./api";

export const getProducts = async (searchParams) => {
  let query = "";

  if (searchParams?.userId) query += `createdBy=${searchParams?.userId}`;

  const response = await axios.get(
    `${config.apiUrl}/api/products?limit=100&${query}`,
  );

  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);

  return response.data;
};

export const addProduct = async (data) => {
  return await api.post(`/api/products`, data);
};

export const updateProduct = async (id, data) => {
  return await api.put(`/api/products/${id}`, data);
};

export const deleteProduct = async (id) => {
  return await api.delete(`/api/products/${id}`);
};
