import config from "@/config";
import axios from "axios";

export const login = async (data) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);

  return response.data;
};

export const signup = async (data) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, data);

  return response.data;
};
