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
        "gap-10 grid grid-cols-1 w-full",
        "lg:grid-cols-[21.875rem_1fr]",
      )}
    >
      <h2 class="font-roboto font-bold leading-none text-[#151515] text-4xl">
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
