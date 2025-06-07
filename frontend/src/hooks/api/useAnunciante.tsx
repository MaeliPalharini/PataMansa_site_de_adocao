import {updateAdoption} from "@/services/api/adoption/adoption";
import {deleteFormulario} from "@/services/api/adoption/formulario";
import {getPetsByAdvertiserId, updatePet} from "@/services/api/pets";
import {ApproveAdoptionPayload} from "@/types/adopton";
import {useMutation, useQuery} from "@tanstack/react-query";

export const usePetsByAdvertiser = (clientId: string) => {
  return useQuery({
    queryKey: ["pets-by-advertiser", clientId],
    queryFn: () => getPetsByAdvertiserId(clientId),
    enabled: !!clientId,
  });
};

export const useAllowAdoption = () => {
  return useMutation({
    mutationFn: async ({petId, clientId}: ApproveAdoptionPayload) => {
      await updatePet(petId, {status: "indisponivel"});
      await updateAdoption(clientId, {petId: [petId]});
    },
  });
};

export const useDenyAdoption = () => {
  return useMutation({
    mutationFn: async (petId: string) => {
      await updatePet(petId, {status: "disponivel"});
      await deleteFormulario(petId);
    },
  });
};
