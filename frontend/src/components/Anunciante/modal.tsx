import React from "react";
import {useRegisterPet} from "@/hooks/api/pet/useRegisterPet";
import {FormularioWrapper} from "@/hooks/components/useModal";
import {toast} from "@/ui/CustomToaster";
import {IoClose} from "react-icons/io5";
import {PorteField} from "./PorteField";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {PetFormSchema, petSchema} from "@/schemas/pet";
import FormField from "@/common/components/FormField";
import {FieldConfigRegister} from "@/types/fields";
import {useAuth} from "@/hooks/api/auth/useIsAuth";

const Modal = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {mutate, isPending, isSuccess, isError} = useRegisterPet();
  const {data: authData} = useAuth();
  const clientId = authData?.id;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: {errors},
  } = useForm<PetFormSchema>({
    resolver: zodResolver(petSchema),
    defaultValues: {
      owner: clientId,
      nome: "",
      raca: "",
      porte: undefined,
      idade: 0,
      descricao: "",
      localizacao: "",
      fotoUrl: "",
    },
  });

  const fields: FieldConfigRegister<PetFormSchema>[] = [
    {label: "Nome", field: "nome", type: "text", placeholder: "Nome do pet"},
    {label: "Raça", field: "raca", type: "text", placeholder: "Raça do pet"},
    {
      label: "Idade",
      field: "idade",
      type: "number",
      placeholder: "Idade do pet",
    },
    {
      label: "Descrição",
      field: "descricao",
      type: "textarea",
      placeholder: "Descrição",
    },
    {
      label: "Localização",
      field: "localizacao",
      type: "text",
      placeholder: "Localização",
    },
    {
      label: "Foto (URL)",
      field: "fotoUrl",
      type: "text",
      placeholder: "URL da foto",
    },
  ];

  const submit = (data: PetFormSchema) => {
    mutate(data);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/75 z-50 flex justify-center items-center">
        <div
          className="fixed inset-0"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        <div
          onClick={(e) => e.stopPropagation()}
          className="relative bg-[var(--light-yellow)] border-[16px] border-[var(--brown)] rounded-lg p-6 scroll-formulario max-w-lg w-full max-h-[90vh] overflow-y-auto flex flex-col gap-4 z-50"
          role="dialog"
          aria-modal="true"
        >
          <IoClose
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 cursor-pointer text-[var(--brown)] hover:brightness-125"
            size={28}
          />
          <h2 className="text-xl text-[var(--brown)] font-semibold mb-2">
            Cadastrar Pet
          </h2>

          <FormularioWrapper
            onSubmit={handleSubmit(submit)}
            isPending={isPending}
            isSuccess={isSuccess}
            isError={isError}
            onSuccess={() => {
              toast.success("Pet cadastrado com sucesso!");
              setIsOpen(false);
            }}
            onError={() => toast.error("Falha ao cadastrar pet")}
          >
            <div className="flex flex-col gap-4">
              {fields.map(({label, field, type, placeholder}) => (
                <FormField
                  key={String(field)}
                  label={label}
                  type={type}
                  placeholder={placeholder}
                  required
                  {...register(
                    field,
                    field === "idade" ? {valueAsNumber: true} : {}
                  )}
                  error={errors[field]?.message}
                />
              ))}

              <PorteField<PetFormSchema, "porte">
                value={watch("porte")}
                onChange={(val) =>
                  setValue("porte", val, {shouldValidate: true})
                }
              />
            </div>
          </FormularioWrapper>
        </div>
      </div>
    </>
  );
};

export default Modal;
