import {
  createFormulario,
  getFormulario,
} from "@/services/api/adoption/formulario";
import {updatePet} from "@/services/api/pets";
import {useMutation, useQuery} from "@tanstack/react-query";
import type {Formulário} from "@/types/formulario";

export const useFormularioByPetId = (petId: string) => {
  return useQuery<Formulário>({
    queryKey: ["formulario", petId],
    queryFn: () => getFormulario(petId),
    enabled: !!petId,
  });
};

export const useFormulario = () => {
  return useMutation({
    mutationFn: async (formData: Formulário) => {
      const formularioCriado = await createFormulario(formData);

      if (formularioCriado && formData.petId) {
        await updatePet(formData.petId, {status: "pendente"});
      }

      return formularioCriado;
    },
  });
};
