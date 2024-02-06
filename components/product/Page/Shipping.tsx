"use client";

import { invoke } from "$store/runtime.ts";
import { clx } from "$store/sdk/clx.ts";
import { useSignal } from "@preact/signals";

type Props = {
  sku: string;
  productId: string;
};

export default function ({ sku, productId }: Props) {
  const result = useSignal("");

  return (
    <div>
      <div class="flex items-center gap-2 mb-4">
        <img
          src="/image/icon-frete.avif"
          alt="Simular frete"
          width={23}
          height={14}
          loading="lazy"
        />

        <span class="text-[#999999] text-xs">Consulte o prazo de entrega</span>
      </div>
      <form
        class="flex items-center gap-1 h-8"
        onSubmit={(e) => {
          e.preventDefault();

          invoke["deco-sites/storefront"].loaders
            .simulate({ sku, productId })
            .then((data) => {
              result.value = data;
            });
        }}
      >
        <input
          type="text"
          placeholder="Digite seu CEP"
          class="w-full h-full border border-[#707070] py-1.5 px-3 text-black text-sm placeholder:text-[#999] placeholder:text-xs rounded-sm outline-0"
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value
              .replace(/(\d{5})(\d{3})/, "$1-$2")
              .replace(/(.{9}).+/, "$1");
          }}
        />
        <button
          type="submit"
          class="bg-black text-white text-xs font-medium w-[88px] h-full shrink-0"
        >
          Calcular
        </button>
      </form>

      {result.value && (
        <div
          dangerouslySetInnerHTML={{ __html: result.value }}
          class={clx(
            "mt-4 max-h-[275px] overflow-y-auto overscroll-contain",
            "[&_th]:bg-[#f0f0f0] [&_th]:text-[#151515] [&_th]:font-bold [&_th]:text-sm [&_th]:tracking-[-0.65px] [&_th]:border-0 [&_th]:px-3 [&_th]:py-2.5 [&_th]:text-left",
            "[&_td:first-child]:text-[0]",
            "[&_td]:text-[#999999] [&_td]:tracking-[-0.65px] [&_td]:h-16 [&_td]:p-2.5 [&_td]:border-0 [&_td]:border-b [&_td]:border-b-[#f0f0f0] [&_td]:border-r [&_td]:border-r-[#f0f0f0] [&_td]:align-middle [&_td]:font-medium [&_td]:text-sm",
            "[&_p]:leading-[1.3em] [&_p]:mb-[1.2em] [&_p]:text-sm [&_p]:text-[#151515]",
          )}
        />
      )}
    </div>
  );
}
