import { Product } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";
import { formatPrice } from "deco-sites/superepi/sdk/format.ts";
import { useOffer } from "deco-sites/superepi/sdk/useOffer.ts";

export type SearchbarCardProps = {
  product: Product;
};

export const SearchbarCard = ({
  product,
}: SearchbarCardProps) => {
  const {
    image,
    isVariantOf,
    offers,
    url,
  } = product;

  const { listPrice = 0 } = useOffer(offers);

  return (
    <a
      className={clx(
        "sm:duration-300 sm:ease-in-out sm:gap-6 sm:grid sm:grid-cols-[3.125rem_1fr_auto] sm:items-center sm:transition-colors sm:w-full",
        "sm:hover:bg-[#f5f5f5]",
      )}
      href={url}
    >
      {(image !== undefined && image.length !== 0) && (
        <Image
          alt=""
          className="sm:h-[3.125rem] sm:object-cover sm:w-full"
          height={50}
          src={image[0].url ?? ""}
          width={50}
        />
      )}

      <span className="sm:font-semibold sm:font-roboto sm:text-[#333] sm:text-xs">
        {isVariantOf?.name}
      </span>

      <span className="sm:font-extrabold sm:font-roboto sm:text-black sm:text-sm sm:-tracking-[0.01875rem]">
        {formatPrice(listPrice)}
      </span>
    </a>
  );
};

export default SearchbarCard;
