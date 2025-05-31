import {isAuth} from "@/libs/api/auth/isAuth";
import {useQuery} from "@tanstack/react-query";

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth", "user"],
    queryFn: isAuth,
    staleTime: 5 * 60 * 1000,
  });
};
