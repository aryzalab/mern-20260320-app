import api from "./api";

export const getOrdersById = async (id) => {
  return await api.get(`/api/orders/${id}`);
};

export const getOrdersByUser = async () => {
  return await api.get(`/api/orders/user`);
};

export const createOrder = async (data) => {
  return await api.post(`/api/orders`, data);
};

export const cancelOrder = async (id) => {
  return await api.patch(`/api/orders/${id}/cancel`);
};
