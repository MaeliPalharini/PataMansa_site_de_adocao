import {loginUser} from "@/libs/api/auth/login";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      router.push("/adotar");
    },
  });
};
