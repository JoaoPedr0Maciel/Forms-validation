import { z } from "zod";

export const schema = z
  .object({
    address: z.object({
      zipCode: z.string().min(8, "Por favor informe um cep válido!"),
      street: z.string().min(1, "Por favor informe uma rua válida!"),
      number: z.string().min(1, "Por favor informe um número válido!"),
      state: z.string().min(1, "Por favor informe um estado válido!"),
      city: z.string().min(1, "Por favor informe uma cidade válida!"),
      district: z.string().min(1, "Por favor informe um bairro válido!"),
      complement: z.string(),
    }),
  })
  .transform((fields) => ({
    address: {
      zipCode: fields.address.zipCode,
      street: fields.address.street,
      number: fields.address.number,
      state: fields.address.state,
      city: fields.address.city,
      district: fields.address.district,
      complement: fields.address.complement,
    },
  }));
