import Icon from "$store/components/ui/Icon.tsx";
import { clx } from "$store/sdk/clx.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { Product as ProductType } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";

export type ProductProps = {
  product: ProductType;
};

export const Product = ({ product }: ProductProps) => {
  const { brand, image, offers, url } = product;

  const { installments, listPrice = 0, price = 0 } = useOffer(offers);

  const discount = listPrice !== price;

  return (
    <article class="group duration-300 ease-in-out flex flex-col gap-4 h-full p-4 relative transition-shadow w-full">
      <Image
        alt=""
        class="aspect-square object-cover w-full"
        height={284}
        src={image?.[0].url ?? ""}
        width={284}
      />

      <div class="flex flex-col gap-6 h-full w-full">
        <div class="flex flex-col w-full">
          {brand !== undefined && (
            <span class="font-medium font-roboto leading-normal text-[#999999] text-xs">
              {brand.name}
            </span>
          )}

          <h3 class="font-medium font-roboto leading-normal text-sm text-black">
            {product.name}
          </h3>
        </div>

        <div class="flex flex-col items-start justify-center mt-auto w-full">
          <strong class="font-roboto leading-normal font-medium text-[#151515] text-2xl">
            {formatPrice(listPrice)}{" "}
            <span class="font-black leading-normal text-base">
              no Pix/Boleto
            </span>
          </strong>

          <span>ou 3x de {formatPrice(listPrice / 3)}</span>
        </div>
      </div>

      <a
        class={clx(
          "absolute bg-[#ffffffcc] duration-300 cursor-pointer ease-in-out flex flex-col gap-2 font-normal font-roboto leading-normal h-[calc(100%-0.625rem)] items-center justify-center left-1/2 opacity-0 pointer-events-none text-sm text-[#151515] top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity w-[calc(100%-0.625rem)] z-10",
          "hover:opacity-100 group-hover:pointer-events-auto hover:shadow-[0_0_0.625rem_0_#00000033]",
        )}
        href={url}
      >
        <div class="bg-[#f8a531] h-16 flex items-center justify-center text-white w-16">
          <Icon class="h-8 w-8" id="Search" />
        </div>

        <span>Comprar</span>
      </a>
    </article>
  );
};

export default Product;
