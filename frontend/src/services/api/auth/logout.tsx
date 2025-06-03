import {api} from "../client/axios";

export const logout = async () => {
  try {
    const res = await api.get("/logout");
    return res.data;
  } catch {
    return null;
  }
};
