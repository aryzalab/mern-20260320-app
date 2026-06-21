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

export const updateUser = async (id, data) => {
  return await api.put(`/api/users/${id}`, data);
};

export const updateUserProfileImage = async (data) => {
  return await api.put(`/api/users/profile-image`, data);
};
