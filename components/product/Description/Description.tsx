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
    <div className="sm:flex sm:px-6 sm:w-full">
      <article className={clx(
        "sm:gap-10 sm:grid sm:grid-cols-1 sm:max-w-page-container sm:mx-auto sm:w-full",
        "lg:grid-cols-[21.875rem_1fr]"
      )}>
        <h2 className="sm:font-roboto sm:font-bold sm:leading-none sm:text-[#151515] sm:text-5xl">
          Descrição completa
        </h2>

        <div className="sm:font-roboto sm:font-normal sm:leading-5 sm:text-sm sm:text-[#999999]">
          {product.description}
        </div>
      </article>
    </div>
  );
};

export default Description;