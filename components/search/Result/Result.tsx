import type { ProductListingPage } from "apps/commerce/types.ts";
import { LayoutControl } from "deco-sites/superepi/components/search/LayoutControl/LayoutControl.tsx";
import Filters from "deco-sites/superepi/components/search/Filters.tsx";
import { Shelf } from "deco-sites/superepi/components/search/Shelf/Shelf.tsx";
import { Sort } from "deco-sites/superepi/components/search/Sort/Sort.tsx";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";
import { useId } from "deco-sites/superepi/sdk/useId.ts";

export type ResultProps = {
  page: ProductListingPage | null;
};

export const Result = ({ page }: ResultProps) => {
  const id = useId();

  if (page === null) return null;

  const {
    filters,
    sortOptions
  } = page;

  return (
    <div className={clx(
      "sm:gap-6 sm:grid sm:grid-cols-1 sm:w-full",
      "lg:grid-cols-[15.625rem_1fr]"
    )}>
      <div className={clx(
        "sm:bg-[#f0f0f0] sm:flex sm:flex-wrap sm:gap-3 sm:items-center sm:px-8 sm:py-5 sm:w-full",
        "lg:col-span-2"
      )}>
        <h2 className="sm:flex sm:font-roboto sm:font-bold sm:gap-3 sm:items-center sm:text-base sm:text-[#151515]">
          <Icon
            className="sm:h-4 sm:w-4"
            id="Options"
          />

          Filtros
        </h2>

        <div className="sm:flex sm:flex-shrink-0 sm:gap-3 sm:items-center sm:ml-auto sm:w-fit">
          <span className="sm:flex-shrink-0 sm:font-roboto sm:font-medium sm:text-sm sm:text-[#999999]">
            Ordenar por:
          </span>

          <Sort sortOptions={sortOptions} />
        </div>

        <div className={clx(
          "sm:hidden sm:ml-3",
          "lg:flex"
        )}>
          <LayoutControl id={id} />
        </div>
      </div>

      <div className="sm:flex sm:w-full">
        <Filters filters={filters} />
      </div>

      <div className="sm:flex sm:w-full">
        <Shelf
          id={id}
          page={page}
        />
      </div>
    </div>
  );
};

export default Result;