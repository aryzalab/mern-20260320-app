import api from "./api";

export const getOrdersById = async (id) => {
  return await api.get(`/api/orders/${id}`);
};

export const getOrdersByUser = async (status) => {
  return await api.get(`/api/orders/user?status=${status}`);
};

export const createOrder = async (data) => {
  return await api.post(`/api/orders`, data);
};

export const cancelOrder = async (id) => {
  return await api.patch(`/api/orders/${id}/cancel`);
};

export const payViaKhalti = async (id) => {
  return await api.put(`/api/orders/${id}/payment/khalti`);
};

export const payViaCash = async (id) => {
  return await api.put(`/api/orders/${id}/payment/cash`);
};

export const confirmOrder = async (id, status) => {
  return await api.put(`/api/orders/${id}/confirm`, { status: status });
};
