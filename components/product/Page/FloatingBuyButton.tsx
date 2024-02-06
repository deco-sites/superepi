"use client";

import { Product } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { clx } from "$store/sdk/clx.ts";

type Props = {
  product: Product;
};

export default function ({ product }: Props) {
  const { image = [], isVariantOf, name, offers } = product;
  const { discountTicket = 0, billingDuration, billingIncrement } = useOffer(
    offers,
  );
  const isHidden = useSignal(true);

  useEffect(() => {
    addEventListener("scroll", () => {
      const scrollPercentage = globalThis.scrollY /
        (document.body.scrollHeight - innerHeight);

      isHidden.value = !(0.4 <= scrollPercentage && scrollPercentage <= 0.9);
    });
  }, []);

  return (
    <div
      class={clx(
        "fixed bottom-0 left-0 w-full py-3 bg-white shadow-[0px_0px_5px_0_rgba(0,_0,_0,_0.2)] transition-all duration-300 ease-in-out",
        isHidden.value ? "top-full" : "top-[calc(100%-105px)]",
      )}
    >
      <div class="max-w-page-container mx-auto flex items-center justify-between">
        <div class="w-1/2 flex items-center gap-6">
          <Image
            src={image[0].url ?? ""}
            alt={isVariantOf?.name ?? name}
            width={80}
            height={80}
          />

          <div class="flex flex-col justify-between gap-1">
            <h2 class="truncate max-w-[550px] text-lg text-[#151515] font-bold">
              {isVariantOf?.name ?? name}
            </h2>
            <a href="#description" class="text-[#999999] text-sm">
              Descrição do produto
            </a>
          </div>
        </div>
        <div class="w-1/2 flex items-center justify-end gap-2">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[#37cc6d] text-[26px] tracking-[-1.25px] font-medium leading-none">
                {formatPrice(discountTicket, offers?.priceCurrency)}
              </span>
              <span class="text-xs text-black font-black">no Pix/Boleto</span>
            </div>
            <span class="text-[#999999] text-xs font-medium block mt-1">
              ou {billingDuration}x de R$ {billingIncrement}
            </span>
          </div>

          <button
            type="button"
            class="bg-[#37cc6d] hover:bg-[#333] transition-colors text-white text-sm font-medium px-4 h-[50px] flex justify-center items-center w-full max-w-[370px]"
            onClick={() => {
              const isDesktop = matchMedia("(min-width: 1024px)").matches;

              if (isDesktop) {
                scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              } else {
                document.getElementById("short-description")?.scrollIntoView();
              }
            }}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
