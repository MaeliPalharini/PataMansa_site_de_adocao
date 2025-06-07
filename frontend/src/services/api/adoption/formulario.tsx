import {Formulário} from "@/types/formulario";
import {api} from "../client/axios";

export const getFormulario = async (petId: string) => {
  const res = await api.get(`/formulario/${petId}`);
  return res.data;
};

export const createFormulario = async (data: Formulário) => {
  try {
    const res = await api.post("/formulario", data);
    return res.data;
  } catch {
    return null;
  }
};

export const deleteFormulario = async (petId: string) => {
  try {
    const res = await api.delete(`/formulario/${petId}`);
    return res.data;
  } catch {
    return null;
  }
};
