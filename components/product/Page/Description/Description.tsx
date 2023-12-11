import { Product } from "apps/commerce/types.ts";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export type DescriptionProps = {
  product: Product | null;
};

export const Description = ({
  product
}: DescriptionProps) => {
  if (product === null) return null;

  return (
    <article className={clx(
      "sm:gap-10 sm:grid sm:grid-cols-1 sm:w-full",
      "lg:grid-cols-2"
    )}>
      <h2 className="sm:font-roboto sm:font-bold sm:leading-none sm:text-[#151515] sm:text-4xl">
        Descrição completa
      </h2>

      {product.description !== undefined && (
        <div className="sm:font-roboto sm:font-normal sm:leading-5 sm:text-sm sm:text-[#999999]">
          {product.description}
        </div>
      )}
    </article>
  );
};

export default Description;