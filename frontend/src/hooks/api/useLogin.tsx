import {loginUser} from "@/libs/api/auth/login";
import {useMutation} from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
