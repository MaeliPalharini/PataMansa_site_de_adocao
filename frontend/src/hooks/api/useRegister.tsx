import {createUser} from "@/services/api/auth/register";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";

export const useSignup = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      router.push("/adotar");
    },
  });
};
