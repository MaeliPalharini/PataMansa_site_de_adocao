import {api} from "../client/axios";

export const isAuth = async () => {
  try {
    const res = await api.get("/auth/me");
    return res.data;
  } catch {
    return null;
  }
};
