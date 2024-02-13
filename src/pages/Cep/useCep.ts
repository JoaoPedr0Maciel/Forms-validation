import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { useCallback, useEffect } from "react";
import axios from "axios";
import { AddressProps } from "./types";
import { FormProps } from "./types";

export const useCep = () => {
  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      address: {
        zipCode: "",
        district: "",
        street: "",
        number: "",
        state: "",
        city: "",
        complement: "",
      },
    },
  });

  const handleFetchAddress = useCallback(async (zipCode: string) => {
    try {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );

      // Verifique se os dados retornados são válidos antes de atualizar o formulário
      if (data && !data.erro) {
        setAddressData(data);
      } else {
        // Exibir uma mensagem de erro ou feedback para o usuário
        alert("CEP não encontrado ou inválido.");
        // Limpar os valores do formulário ou fazer outras ações necessárias
      }
    } catch (error) {
      console.error("Erro ao buscar dados do CEP:", error);
      // Lidar com o erro, exibir mensagem de erro para o usuário, etc.
    }
  }, []);

  const setAddressData = useCallback((data: AddressProps) => {
    setValue("address.zipCode", data.cep);
    setValue("address.district", data.bairro);
    setValue("address.street", data.logradouro);
    setValue("address.number", data.numero);
    setValue("address.state", data.uf);
    setValue("address.city", data.localidade);
    setValue("address.complement", data.complemento);
  }, []);

  const zipCode = watch("address.zipCode");
  useEffect(() => {
    setValue("address.zipCode", zipCode);
    if (zipCode.length !== 8) return;

    handleFetchAddress(zipCode);
  }, [handleFetchAddress, zipCode, setValue]);

  const onSubmitForm = (data: FormProps) => {
    alert(
      "projeto para estudos, os dados estao sendo submetidos, olhe o console do seu navegador"
    );
    console.log(data);
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmitForm,
  };
};
