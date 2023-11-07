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
        <div class="flex flex-col gap-2">
          <p class="text-xs font-semibold">Quer ajuda?</p>
          <p class="text-xs">(11) 2628-0078</p>
        </div>
      </a>
      {openPopUp.value && (
        <div
          class="absolute top-10 flex flex-col items-center bg-white -left-4 px-4 pb-4"
          onMouseEnter={() => openPopUp.value = true}
          onMouseLeave={() => openPopUp.value = false}
        >
          <a
            class="w-full border py-2 px-4 border-[#181212]"
            href="tel: (11) 2628-0078"
          >
            (11) 2628-0078
          </a>
          <a
            class="w-full border py-2 px-4 border-[#181212"
            href="/conteudo/institucional/atendimento-ao-cliente"
          >
            FAQ
          </a>
          <a
            class="w-full border py-2 px-4 border-[#181212"
            href="mailto:cotacao@superepi.com.br"
          >
            Cotações
          </a>
          <button class="w-full border py-2 px-4 border-[#181212">
            Horário de atendimento Segunda à Quinta das 9:00H às 18:00H Sexta
            das 8:00H às 17:00H
          </button>
          Horário de atendimento Loja Segunda à Quinta das 9:00H às 17:30H Sexta
          das 8:00H às 16:30H
        </div>
      )}
    </div>
  );
}
