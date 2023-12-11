import { ProductDetailsPage } from "apps/commerce/types.ts";
import { BuyProduct } from "deco-sites/superepi/components/product/Page/BuyProduct/BuyProduct.tsx";
import { Description } from "deco-sites/superepi/components/product/Page/Description/Description.tsx";
import { Gallery } from "deco-sites/superepi/components/product/Page/Gallery/Gallery.tsx";
import { ProductInfo } from "deco-sites/superepi/components/product/Page/Information/Information.tsx";
import Breadcrumb from "deco-sites/superepi/components/ui/Breadcrumb.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export interface Props {
  page: ProductDetailsPage | null;
};

export const Page = ({
  page
}: Props) => {
  if (page === null) return null;

  const {
    breadcrumbList,
    product
  } = page;

  return (
    <div className={clx(
      "sm:flex sm:flex-col sm:py-5 sm:w-full",
      "lg:py-7"
    )}>
      <div className="sm:flex sm:px-6 sm:w-full">
        <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
          <Breadcrumb itemListElement={breadcrumbList.itemListElement} />
        </div>
      </div>

      <div className={clx(
        "sm:flex sm:px-6 sm:py-5 sm:w-full",
        "lg:py-7"
      )}>
        <div className={clx(
          "sm:gap-6 sm:grid sm:grid-cols-1 sm:max-w-page-container sm:mx-auto sm:w-full",
          "lg:grid-cols-3"
        )}>
          <ProductInfo page={page} />

          <Gallery page={page} />

          <BuyProduct page={page} />
        </div>
      </div>

      <div className={clx(
        "sm:bg-[#f0f0f0] sm:flex sm:flex-col sm:px-6 sm:py-6 sm:w-full",
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