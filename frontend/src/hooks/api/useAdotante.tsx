import {getAdoptionByClientId} from "@/services/api/adoption/adoption";
import {getPetById} from "@/services/api/pets";
import {useQuery} from "@tanstack/react-query";

export const usePetsByClient = (clientId: string) => {
  return useQuery({
    queryKey: ["pets-by-client", clientId],

    queryFn: async () => {
      const adoption = await getAdoptionByClientId(clientId);
      const petIds: string[] = adoption.pet || [];

      if (petIds.length === 0) return [];

      const petPromises = petIds.map((id) => getPetById(id));

      const pets = await Promise.all(petPromises);

      return pets;
    },
    staleTime: 1000 * 60 * 5,
  });
};
