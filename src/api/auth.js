import config from "@/config";
import axios from "axios";

export const login = async (data) => {
  return await axios.post(`${config.apiUrl}/api/auth/login`, data);
};

export const signup = async (data) => {
  return await axios.post(`${config.apiUrl}/api/auth/register`, data);
};

export const forgotPassword = async (data) => {
  return await axios.post(`${config.apiUrl}/api/auth/forgot-password`, data);
};

export const resetPassword = async (data) => {
  return await axios.post(`${config.apiUrl}/api/auth/reset-password`, data);
};
