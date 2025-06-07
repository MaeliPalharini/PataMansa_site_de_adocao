import {api} from "../client/axios";

export const getAdoptionByClientId = async (clientId: string) => {
  const {data} = await api.get(`/api/adocoes/${clientId}`);
  return data;
};

export const updateAdoption = async (
  clientId: string,
  data: {petId: string[]}
) => {
  const res = await api.patch(`/api/adocoes/${clientId}`, data);
  return res.data;
};
