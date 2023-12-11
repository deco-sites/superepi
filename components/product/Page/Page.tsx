import { ProductDetailsPage } from "apps/commerce/types.ts";
import { Description } from "deco-sites/superepi/components/product/Page/Description/Description.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export interface Props {
  page: ProductDetailsPage | null;
};

export const Page = ({
  page
}: Props) => {
  if (page === null) return null;

  const { product } = page;

  return (
    <div className={clx(
      "sm:flex sm:py-5 sm:w-full",
      "lg:py-7"
    )}>
      <div className={clx(
        "sm:bg-[#f0f0f0] sm:flex sm:flex-col sm:py-6 sm:w-full",
        "lg:py-24"
      )}>
        <div className="sm:flex sm:mx-auto sm:max-w-page-container sm:w-full">
          <Description product={product} />
        </div>
      </div>
    </div>
  );
};

export default Page;