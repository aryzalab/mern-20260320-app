import api from "./api";

export const getAllUsers = async () => {
  return await api.get(`/api/users`);
};

export const getUsersById = async (id) => {
  return await api.get(`/api/users/${id}`);
};

export const updateUserRoles = async (id, roles) => {
  return await api.patch(`/api/users/${id}/roles`, { roles });
};
