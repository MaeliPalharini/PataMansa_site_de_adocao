import {useQuery} from "@tanstack/react-query";
import {getPetById, getPets} from "@/libs/api/pets";

export const usePetInfo = () => {
  return useQuery({
    queryKey: ["pets"],
    queryFn: getPets,
  });
};

export const usePetById = (id: string) => {
  return useQuery({
    queryKey: ["pet", id],
    queryFn: () => getPetById(id),
    enabled: !!id,
    staleTime: Infinity,
  });
};
