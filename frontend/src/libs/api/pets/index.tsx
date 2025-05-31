import {api} from "../client/axios";

export const getPets = async () => {
  const res = await api.get("/api/pets");
  return res.data;
};

export const getPetById = async (id: string) => {
  const res = await api.get(`/api/pets/${id}`);
  return res.data;
};
