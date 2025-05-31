import {SignUpData} from "@/types/auth";
import {api} from "../client/axios";

export const createUser = async (data: SignUpData) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};
