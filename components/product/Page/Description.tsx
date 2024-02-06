import { rawProduct } from "$store/mocked-pdp.ts";
import { clx } from "$store/sdk/clx.ts";
import { Product } from "apps/commerce/types.ts";

export type DescriptionProps = {
  product: Product | null;
};

export const Description = ({ product }: DescriptionProps) => {
  if (product === null) return null;

  return (
    <article
      id="description"
      class={clx(
        "sm:gap-10 sm:grid sm:grid-cols-1 sm:w-full",
        "lg:grid-cols-[21.875rem_1fr]",
      )}
    >
      <h2 class="sm:font-roboto sm:font-bold sm:leading-none sm:text-[#151515] sm:text-4xl">
        Descrição completa
      </h2>

      {product.isVariantOf?.description !== undefined && (
        <div
          class="font-normal font-roboto leading-normal text-sm text-[#212529]"
          dangerouslySetInnerHTML={{
            __html: rawProduct.Model.Descriptions[0].Value,
          }}
        />
      )}
    </article>
  );
};

export default Description;
