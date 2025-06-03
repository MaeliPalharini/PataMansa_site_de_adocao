import {logout} from "@/services/api/auth/logout";
import {useMutation} from "@tanstack/react-query";

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};
