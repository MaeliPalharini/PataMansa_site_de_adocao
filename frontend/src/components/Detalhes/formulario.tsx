import React from "react";
import {useFormulario} from "@/hooks/api/formulario/useFormulario";
import {FormSchema, formulario} from "@/schemas/formulario";
import {toast} from "@/ui/CustomToaster";
import {IoClose} from "react-icons/io5";
import {FormularioWrapper} from "@/hooks/components/useModal";
import FormField from "../../common/components/FormField";
import BooleanField from "./BooleanField";
import Checkbox from "@/ui/checkbox";
import {useParams} from "next/navigation";
import {useAuth} from "@/hooks/api/auth/useIsAuth";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const Modal = ({setIsOpen}: {setIsOpen: (open: boolean) => void}) => {
  const {mutate, isPending, isSuccess, isError} = useFormulario();
  const {id: petId} = useParams<{id: string}>();
  const {data: authData} = useAuth();
  const clientId = authData?.id;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: {errors},
  } = useForm<FormSchema>({
    resolver: zodResolver(formulario),
    defaultValues: {
      petId: petId,
      clientId: clientId,
      email: "",
      telefone: "",
      motivo: "",
      ambiente: undefined,
      espacoExterno: undefined,
      teveAnimaisAntes: undefined,
      ambienteSeguro: undefined,
    },
  });

  const submit = (data: FormSchema) => {
    mutate(data);
  };

  const booleanFields: {
    field: "espacoExterno" | "ambienteSeguro" | "teveAnimaisAntes";
    title: string;
  }[] = [
    {field: "espacoExterno", title: "Sua casa tem espaço externo?"},
    {
      field: "ambienteSeguro",
      title: "O ambiente é fechado/seguro para o animal?",
    },
    {field: "teveAnimaisAntes", title: "Você já teve animais antes?"},
  ];

  return (
    <div className="fixed inset-0 bg-black/75 z-50 flex justify-center items-center">
      <div
        className="fixed inset-0"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        className="relative bg-[var(--light-yellow)] border-[16px] border-[var(--brown)] rounded-lg p-6 scroll-formulario max-w-[650px] w-full max-h-[90vh] overflow-y-auto flex flex-col gap-4 z-50"
      >
        <IoClose
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 cursor-pointer text-[var(--brown)] hover:brightness-125"
          size={28}
        />

        <h2 className="text-xl font-semibold mb-2">Formulário</h2>

        <FormularioWrapper
          onSubmit={handleSubmit(submit)}
          isPending={isPending}
          isSuccess={isSuccess}
          isError={isError}
          onSuccess={() => {
            toast.success("Formulário enviado");
            setIsOpen(false);
          }}
          onError={() => toast.error("Falha ao enviar formulário")}
        >
          <div className="flex flex-col max-[550px]:text-center">
            <div className="flex justify-between max-[550px]:flex-col max-[550px]:items-center items-start max-[550px]:mb-10 mb-4 gap-10 min-[550px]:max-w-[95%]">
              <div className="flex flex-col gap-3">
                <FormField
                  label="Email"
                  type="email"
                  placeholder="seu email"
                  required
                  {...register("email")}
                  error={errors.email?.message}
                />
                <FormField
                  label="Telefone"
                  type="tel"
                  placeholder="seu telefone"
                  required
                  {...register("telefone")}
                  error={errors.telefone?.message}
                />
                <FormField
                  label="Motivo da adoção"
                  type="textarea"
                  placeholder="Descreva aqui"
                  required
                  {...register("motivo")}
                  error={errors.motivo?.message}
                />
              </div>

              <div className="flex flex-col justify-center items-center text-center gap-6">
                <div>
                  <h3 className="mb-2">Sobre o ambiente</h3>
                  <div className="flex gap-3">
                    {["Apartamento", "Casa"].map((option) => (
                      <Checkbox
                        key={option}
                        intent="formulario"
                        displayclassName="text-[var(--dark-yellow)]"
                        displayName={option}
                        checked={watch("ambiente") === option}
                        onChange={() =>
                          setValue("ambiente", option as "Casa" | "Apartamento")
                        }
                      />
                    ))}
                  </div>
                </div>

                {booleanFields.map(({field, title}) => (
                  <BooleanField
                    key={field}
                    label={title}
                    value={watch(field)}
                    onChange={(val) => setValue(field, val)}
                  />
                ))}
              </div>
            </div>
          </div>
        </FormularioWrapper>
      </div>
    </div>
  );
};

export default Modal;
