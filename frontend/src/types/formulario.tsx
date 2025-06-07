export type Formulário = {
  petId: string;
  clientId: string;
  email: string;
  telefone: string | null;
  motivo: string;
  ambiente: string;
  espacoExterno: boolean | undefined;
  teveAnimaisAntes: boolean | undefined;
  ambienteSeguro: boolean | undefined;
};
