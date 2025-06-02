import Button from "@/ui/button";
import Checkbox from "@/ui/checkbox";
import Input from "@/ui/input";
import {IoClose} from "react-icons/io5";

const Modal = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const label = (text: string, type: string, placeholder: string) => (
    <label className="flex flex-col">
      <span className="mb-1">{text}</span>
      {type === "email" || type === "tel" || type === "text" ? (
        <Input
          intent="formulario"
          placeholder={placeholder}
          type={type}
          required
        />
      ) : (
        <textarea
          placeholder={placeholder}
          required
          className="border border-[var(--brown)] rounded p-2 resize-none hover:brightness-125 focus:outline-none"
          rows={4}
        />
      )}
    </label>
  );

  const checkout = (title: string, first: string, second: string) => (
    <div className="flex flex-col justify-center items-center">
      <h3>{title}</h3>
      <div className="flex gap-3">
        <Checkbox
          intent={"formulario"}
          displayName={first}
          displayclassName={
            first === "Apartamento"
              ? "text-[var(--dark-yellow)]"
              : "text-green-500"
          }
        />
        <Checkbox
          intent={"formulario"}
          displayName={second}
          displayclassName={
            second === "Casa" ? "text-[var(--dark-yellow)]" : "text-red-500"
          }
        />
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/75 z-20"></div>
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center z-20 justify-center"
        role="dialog"
        aria-modal="true"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex justify-center items-center max-[550px]:h-full max-h-[95%]"
        >
          <div className="overflow-y-auto scroll-formulario bg-[var(--light-yellow)] border-[16px] border-[var(--brown)] rounded-lg p-6 flex flex-col gap-4 w-full h-full relative">
            <IoClose
              onClick={() => setIsOpen(false)}
              className="absolute cursor-pointer right-0 text-[var(--brown)] hover:brightness-125 m-2 top-0"
              size={28}
            />
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">Formulário</h2>
            </div>

            <form className="flex flex-col max-[550px]:text-center">
              <div className="flex justify-between max-[550px]:flex-col max-[550px]:items-center items-start max-[550px]:mb-10 mb-4 gap-10 min-[550px]:max-w-[95%]">
                <div className="gap-3 flex flex-col">
                  {label("Email", "email", "seu email")}
                  {label("Telefone", "tel", "seu telefone")}
                  {label("Motivo da adoção", "textarea", "Descreva aqui")}
                </div>
                <div className="justify-center items-center flex flex-col text-center gap-6">
                  {checkout("Sobre o ambiente", "Apartamento", "Casa")}
                  {checkout("Sua casa tem espaço externo?", "Sim", "Não")}
                  {checkout(
                    "O ambiente é fechado/seguro para o animal?",
                    "Sim",
                    "Não"
                  )}
                  {checkout("Você já teve animais antes?", "Sim", "Não")}
                </div>
              </div>
              <Button intent="formulario" type="submit">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
