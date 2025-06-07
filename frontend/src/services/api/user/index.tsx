import {api} from "../client/axios";

export const getUser = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};

export const getUserById = async (id: string) => {
  const res = await api.get(`/auth/me/${id}`);
  return res.data;
};
