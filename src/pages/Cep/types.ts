import { z } from "zod";
import { schema } from "./schema";

export type FormProps = z.infer<typeof schema>;

export type AddressProps = {
  cep: string;
  logradouro: string;
  numero: string;
  uf: string;
  localidade: string;
  bairro: string;
  complemento: string;
};
