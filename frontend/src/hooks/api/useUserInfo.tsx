import {useQuery} from "@tanstack/react-query";
import {getPetById, getPets} from "@/services/api/pets";

export const useUserInfo = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getPets,
  });
};

export const useUserById = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getPetById(id),
    enabled: !!id,
    staleTime: Infinity,
  });
};
