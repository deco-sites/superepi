import { useSignal } from "@preact/signals";
import Icon from "$store/components/ui/Icon.tsx";

export default function ServiceButton() {
  const openPopUp = useSignal(false);
  return (
    <div class="relative">
      <a
        class="flex items-center gap-2"
        href="tel:(11) 2628-0078"
        aria-label="Log in"
        onMouseEnter={() => openPopUp.value = true}
        onMouseLeave={() => openPopUp.value = false}
      >
        <Icon id="Service" size={30} strokeWidth={0.4} />
        <div class="flex flex-col">
          <p class="text-xs lg:text-[13px] xl:text-sm font-semibold">Quer ajuda?</p>
          <p class="text-xs lg:text-[13px] xl:text-sm">(11) 2628-0078</p>
        </div>
      </a>
      {openPopUp.value && (
        <div
          class="text-sm text-[#000] hidden z-10 absolute top-10 md:flex flex-col items-center gap-4 bg-white -left-4 px-4 py-4 w-[250px]"
          onMouseEnter={() => openPopUp.value = true}
          onMouseLeave={() => openPopUp.value = false}
        >
          <p class="font-bold text-base">Central de atendimento</p>
          <a
            class="flex justify-center w-full border border-[#808080] py-2 px-4"
            href="tel: (11) 2628-0078"
          >
            (11) 2628-0078
          </a>
          <a
            class="flex justify-center w-full border border-[#808080] py-2 px-4"
            href="/conteudo/institucional/atendimento-ao-cliente"
          >
            FAQ
          </a>
          <a
            class="flex justify-center w-full border border-[#808080] py-2 px-4"
            href="mailto:cotacao@superepi.com.br"
          >
            Cotações
          </a>
          <button class="flex flex-col justify-center items-center w-full border border-[#808080] py-2 px-4">
            <span class="font-bold">Horário de atendimento</span> <br /> Segunda à Quinta <br /> das 9:00H às 18:00H <br /> Sexta <br />
            das 8:00H às 17:00H
          </button>
          <span class="font-bold px-3">Horário de atendimento Loja</span> <br /> Segunda à Quinta <br /> das 9:00H às 17:30H <br /> Sexta <br />
          das 8:00H às 16:30H
        </div>
      )}
    </div>
  );
}
