import { clx } from "deco-sites/superepi/sdk/clx.ts";

export const Newsletter = () => {
  return (
    <div
      className={clx(
        "sm:flex sm:px-6 sm:py-5 sm:w-full",
        "lg:py-7",
      )}
    >
      <form
        action=""
        className={clx(
          "sm:flex sm:flex-col sm:gap-4 sm:items-center sm:max-w-[81.25rem] sm:mx-auto sm:w-full",
          "lg:flex-row lg:justify-between",
        )}
      >
        <div
          className={clx(
            "sm:flex sm:flex-col sm:font-roboto sm:font-bold sm:items-center sm:gap-1 sm:leading-tight sm:text-base sm:text-center sm:text-[#ffab00]",
            "lg:gap-0 lg:items-start lg:text-left lg:text-xl",
          )}
        >
          <h2 className="sm:font-bold">
            SEJA UM CLIENTE PREFERENCIAL SUPER EPI
          </h2>

          <p className="sm:font-normal sm:text-[#999999]">
            Receba novidades e ofertas com exclusividade.
          </p>
        </div>

        <div
          className={clx(
            "sm:flex sm:flex-col sm:gap-3 sm:w-full",
            "lg:flex-row lg:flex-shrink-0 lg:w-fit",
          )}
        >
          <input
            className={clx(
              "sm:bg-[#f0f0f0] sm:border-none sm:font-roboto sm:font-normal sm:leading-normal sm:min-h-12 sm:p-4 sm:text-black sm:text-xs sm:w-full",
              "sm:placeholder:text-[#999999]",
              "lg:w-[17.5rem]",
            )}
            name="name"
            placeholder="Digite aqui seu nome"
            type="text"
          />

          <input
            className={clx(
              "sm:bg-[#f0f0f0] sm:border-none sm:font-roboto sm:font-normal sm:leading-normal sm:min-h-12 sm:p-4 sm:text-black sm:text-xs sm:w-full",
              "sm:placeholder:text-[#999999]",
              "lg:w-[17.5rem]",
            )}
            name="email"
            placeholder="Digite aqui seu e-mail"
            type="text"
          />

          <button
            className={clx(
              "sm:bg-[#ffab00] sm:duration-300 sm:ease-in-out sm:flex sm:font-roboto sm:font-medium sm:items-center sm:justify-center sm:leading-normal sm:min-h-12 sm:text-white sm:text-sm sm:text-center sm:transition-opacity sm:uppercase sm:w-full",
              "sm:hover:opacity-80",
              "lg:w-[7.5rem]",
            )}
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
