import {createUser} from "@/libs/api/auth/register";
import {useMutation} from "@tanstack/react-query";

export const useSignup = () => {
  return useMutation({
    mutationFn: createUser,
  });
};
