import { clx } from "$store/sdk/clx.ts";

export const Newsletter = () => {
  return (
    <div class={clx("flex px-6 py-5 w-full", "lg:py-7")}>
      <form
        action=""
        class={clx(
          "flex flex-col gap-4 items-center max-w-[81.25rem] mx-auto w-full",
          "lg:flex-row lg:justify-between",
        )}
      >
        <div
          class={clx(
            "flex flex-col font-roboto font-bold items-center gap-1 leading-tight text-base text-center text-[#ffab00]",
            "lg:gap-0 lg:items-start lg:text-left lg:text-xl",
          )}
        >
          <h2 class="font-bold">SEJA UM CLIENTE PREFERENCIAL SUPER EPI</h2>

          <p class="font-normal text-[#999999]">
            Receba novidades e ofertas com exclusividade.
          </p>
        </div>

        <div
          class={clx(
            "flex flex-col gap-3 w-full",
            "lg:flex-row lg:flex-shrink-0 lg:w-fit",
          )}
        >
          <input
            class={clx(
              "bg-[#f0f0f0] border-none font-roboto font-normal leading-normal min-h-12 p-4 text-black text-xs w-full",
              "placeholder:text-[#999999]",
              "lg:w-[17.5rem]",
            )}
            name="name"
            placeholder="Digite aqui seu nome"
            type="text"
          />

          <input
            class={clx(
              "bg-[#f0f0f0] border-none font-roboto font-normal leading-normal min-h-12 p-4 text-black text-xs w-full",
              "placeholder:text-[#999999]",
              "lg:w-[17.5rem]",
            )}
            name="email"
            placeholder="Digite aqui seu e-mail"
            type="text"
          />

          <button
            class={clx(
              "bg-[#ffab00] duration-300 ease-in-out flex font-roboto font-medium items-center justify-center leading-normal min-h-12 text-white text-sm text-center transition-opacity uppercase w-full",
              "hover:opacity-80",
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
