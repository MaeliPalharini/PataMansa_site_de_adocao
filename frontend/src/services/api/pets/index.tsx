import {PetInfos} from "@/types/pet";
import {api} from "../client/axios";

export const getPets = async () => {
  const res = await api.get("/api/pets");
  return res.data;
};

export const getPetById = async (id: string) => {
  const res = await api.get(`/api/pets/${id}`);
  return res.data;
};

export const getPetsByAdvertiserId = async (owner: string) => {
  const res = await api.get("/api/pets", {
    params: {owner},
  });
  return res.data;
};

export const updatePet = async (id: string, data: {status: string}) => {
  const res = await api.patch(`/api/pets/${id}`, data);
  return res.data;
};

export const registerPet = async (data: PetInfos) => {
  try {
    const res = await api.post("/api/pets", data);
    return res.data;
  } catch {
    return null;
  }
};
