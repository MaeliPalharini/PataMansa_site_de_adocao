import {LoginData} from "@/types/auth";
import {api} from "../client/axios";

export const loginUser = async (data: LoginData) => {
  try {
    const res = await api.post("/auth/login", data);
    return res.data;
  } catch {
    return null;
  }
};
