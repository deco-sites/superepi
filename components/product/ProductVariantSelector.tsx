import Avatar from "$store/components/ui/Avatar.tsx";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "apps/commerce/types.ts";
import { usePartial } from "apps/website/hooks/usePartial.ts";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

interface Props {
  product: Product;
}

function VariantSelector({ product }: Props) {
  const { url, isVariantOf } = product;
  const hasVariant = isVariantOf?.hasVariant ?? [];
  const possibilities = useVariantPossibilities(hasVariant, product);

  return (
    <ul class="sm:flex sm:flex-col sm:gap-3 sm:w-full">
      {Object.keys(possibilities).map((name) => (
        <li class="sm:flex sm:flex-col sm:gap-3 sm:w-full">
          <span class="sm:font-roboto sm:font-medium sm:leading-normal sm:text-xs sm:text-[#151515]">
            {name}
          </span>

          <ul class="sm:flex sm:gap-3 sm:items-center sm:justify-start sm:w-full">
            {Object.entries(possibilities[name]).map(([value, link]) => {
              const partial = usePartial({ href: link });

              return (
                <li className="sm:flex sm:h-7 sm:min-w-[1.75rem]">
                  <button
                    {...partial}
                    className={clx(
                      "sm:border-[#999999] sm:border-[0.0625rem] sm:flex sm:font-normal sm:font-roboto sm:items-center sm:justify-center sm:leading-normal sm:p-1 sm:text-xs sm:w-full",
                      link !== url && "sm:text-[#151515]",
                      link === url && "sm:bg-black sm:text-white"
                    )}
                  >
                    {value}
                  </button>
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default VariantSelector;
