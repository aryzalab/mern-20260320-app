import config from "@/config";
import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(`${config.apiUrl}/api/products`);

  return response.data;
};
