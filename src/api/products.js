import config from "@/config";
import axios from "axios";
import api from "./api";

export const getProducts = async () => {
  const response = await axios.get(`${config.apiUrl}/api/products?limit=100`);

  return response.data;
};

export const addProduct = async (data) => {
  return await api.post(`/api/products`, data);
};
