import { ProductListingPage } from "apps/commerce/types.ts";
import { Result } from "deco-sites/superepi/components/search/Result/Result.tsx";
import Breadcrumb from "deco-sites/superepi/components/ui/Breadcrumb.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export interface Props {
  /** @title Integration */
  page: ProductListingPage | null;
};

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <span>Not Found!</span>
    </div>
  );
};

function SearchResult({ page, ...props }: Props) {
  if (page === null) {
    return <NotFound />;
  };

  const { breadcrumb } = page;

  return (
    <div className={clx(
      "sm:flex sm:flex-col sm:pb-5 sm:w-full",
      "lg:pb-7"
    )}>
      <div className="sm:flex sm:p-6 sm:w-full">
        <div className={clx(
          "sm:flex sm:justify-center sm:max-w-page-container sm:mx-auto sm:w-full",
          "[&_ul]:!max-w-full [&_ul]:!w-fit"
        )}>
          <Breadcrumb itemListElement={breadcrumb.itemListElement} />
        </div>
      </div>

      <div className={clx(
        "sm:bg-[#f0f0f0] sm:border-b-[0.3125rem] sm:border-b-[#F8A531] sm:flex sm:mb-6 sm:px-6 sm:py-10",
        "lg:mb-12"
      )}>
        <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
          <h1 className="sm:font-bold sm:font-roboto sm:text-[#151515] sm:text-3xl">
            {breadcrumb.itemListElement.slice(-1)[0].name}
          </h1>
        </div>
      </div>

      <div className="sm:flex sm:px-6 sm:w-full">
        <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
          <Result page={page} />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
