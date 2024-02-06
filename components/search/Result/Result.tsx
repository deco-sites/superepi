import Filters from "$store/components/search/Filters.tsx";
import { LayoutControl } from "$store/components/search/LayoutControl/LayoutControl.tsx";
import { Shelf } from "$store/components/search/Shelf/Shelf.tsx";
import { Sort } from "$store/components/search/Sort/Sort.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { clx } from "$store/sdk/clx.ts";
import { useId } from "$store/sdk/useId.ts";
import type { ProductListingPage } from "apps/commerce/types.ts";

export type ResultProps = {
  page: ProductListingPage | null;
};

export const Result = ({ page }: ResultProps) => {
  const id = useId();

  if (page === null) return null;

  const { filters, sortOptions } = page;

  return (
    <div
      class={clx(
        "gap-6 grid grid-cols-1 w-full",
        "lg:grid-cols-[15.625rem_1fr]",
      )}
    >
      <div
        class={clx(
          "bg-[#f0f0f0] flex flex-wrap gap-3 items-center px-8 py-5 w-full",
          "lg:col-span-2",
        )}
      >
        <h2 class="flex font-roboto font-bold gap-3 items-center text-base text-[#151515]">
          <Icon class="h-4 w-4" id="Options" />
          Filtros
        </h2>

        <div class="flex flex-shrink-0 gap-3 items-center ml-auto w-fit">
          <span class="flex-shrink-0 font-roboto font-medium text-sm text-[#999999]">
            Ordenar por:
          </span>

          <Sort sortOptions={sortOptions} />
        </div>

        <div class={clx("hidden ml-3", "lg:flex")}>
          <LayoutControl id={id} />
        </div>
      </div>

      <div class="flex w-full">
        <Filters filters={filters} />
      </div>

      <div class="flex w-full">
        <Shelf id={id} page={page} />
      </div>
    </div>
  );
};

export default Result;
