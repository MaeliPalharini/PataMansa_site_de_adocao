import {api} from "../client/axios";

export const getUsers = async () => {
  const res = await api.get("/api/pets");
  return res.data;
};
