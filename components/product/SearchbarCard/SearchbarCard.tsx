import { clx } from "$store/sdk/clx.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { Product } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";

export type SearchbarCardProps = {
  product: Product;
};

export const SearchbarCard = ({ product }: SearchbarCardProps) => {
  const { image, isVariantOf, offers, url } = product;

  const { listPrice = 0 } = useOffer(offers);

  return (
    <a
      class={clx(
        "duration-300 ease-in-out gap-6 grid grid-cols-[3.125rem_1fr_auto] items-center transition-colors w-full",
        "hover:bg-[#f5f5f5]",
      )}
      href={url}
    >
      {image !== undefined && image.length !== 0 && (
        <Image
          alt=""
          class="h-[3.125rem] object-cover w-full"
          height={50}
          src={image[0].url ?? ""}
          width={50}
        />
      )}

      <span class="font-semibold font-roboto text-[#333] text-xs">
        {isVariantOf?.name}
      </span>

      <span class="font-extrabold font-roboto text-black text-sm -tracking-[0.01875rem]">
        {formatPrice(listPrice)}
      </span>
    </a>
  );
};

export default SearchbarCard;
