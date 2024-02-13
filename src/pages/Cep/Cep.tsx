import { useCep } from "./useCep";

const Cep = () => {
  const { register, errors, handleSubmit, onSubmitForm } = useCep();

  return (
    <div>
      <main className="h-screen flex  justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="bg-[whitesmoke] rounded-lg h-[550px] w-[400px] flex flex-col justify-center items-center gap-2"
        >
          <h1 className="font-bold text-2xl">ZipCode</h1>
          <input
            {...register("address.zipCode")}
            type="text"
            placeholder="CEP"
            maxLength={9}
          />
          {errors.address?.zipCode && (
            <div className=" w-[300px] ">
              <p className="text-red-500 text-sm text-left font-bold">
                {errors.address?.zipCode.message}
              </p>
            </div>
          )}

          <input
            {...register("address.street")}
            type="text"
            placeholder="Rua"
          />
          {errors.address?.street && (
            <div className=" w-[300px] ">
              <p className="text-red-500 text-sm text-left font-bold">
                {errors.address?.street.message}
              </p>
            </div>
          )}
          <input
            {...register("address.number")}
            type="text"
            placeholder="Número"
          />
          {errors.address?.number && (
            <div className=" w-[300px] ">
              <p className="text-red-500 text-sm text-left font-bold">
                {errors.address?.number.message}
              </p>
            </div>
          )}

          <input
            {...register("address.district")}
            type="text"
            placeholder="Bairro"
          />
          {errors.address?.district && (
            <div className=" w-[300px] ">
              <p className="text-red-500 text-sm text-left font-bold">
                {errors.address?.district.message}
              </p>
            </div>
          )}
          <input
            {...register("address.complement")}
            type="text"
            placeholder="Complemento"
          />
          <input
            {...register("address.city")}
            type="text"
            placeholder="cidade"
          />
          {errors.address?.city && (
            <div className=" w-[300px] ">
              <p className="text-red-500 text-sm text-left font-bold">
                {errors.address?.city.message}
              </p>
            </div>
          )}
          <input
            {...register("address.state")}
            type="text"
            placeholder="Estado"
          />
          {errors.address?.state && (
            <div className=" w-[300px] ">
              <p className="text-red-500 text-sm text-left font-bold">
                {errors.address?.state.message}
              </p>
            </div>
          )}
          <button
            className="bg-cyan-500 w-[250px] h-[2.5rem] rounded-2xl font-bold"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Cep;
