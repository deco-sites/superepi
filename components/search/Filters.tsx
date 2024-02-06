import { Range } from "$store/components/search/Range/Range.tsx";
import { tags } from "$store/components/search/tags.ts";
import Icon from "$store/components/ui/Icon.tsx";
import type {
  Filter,
  FilterToggle,
  FilterToggleValue,
  ProductListingPage,
} from "apps/commerce/types.ts";

interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function Filters({ filters }: Props) {
  const tag = tags(filters);

  return (
    <div class="flex flex-col gap-4 w-full">
      {tag.length !== 0 && (
        <div class="flex flex-col gap-4 mb-4 w-full">
          <h3 class="font-roboto font-bold text-lg text-[#151515]">
            Filtros selecionados
          </h3>

          <ul class="flex flex-col gap-3 w-full">
            {tag.map(({ label, url }, index) => (
              <li class="flex items-center justify-between w-full">
                <a
                  class="flex font-roboto font-normal items-center justify-between text-[#151515] text-sm w-full"
                  href={url}
                >
                  <span class="underline">{label}</span>

                  <Icon class="h-3 text-[#777] w-3" id="Close" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <span class="font-roboto font-normal text-sm text-[#151515]">
        Use os filtros abaixo para adicionar itens à sua pesquisa:
      </span>

      <ul class="flex flex-col gap-3 w-full">
        {filters.filter(isToggle).map(
          ({ label, values: valuesProp }, index) => {
            const values = valuesProp as FilterToggleValue[];

            if (values.length == 0) return null;

            return (
              <li class="collapse collapse-arrow bg-[#fcfcfc] rounded-none shadow-[0_0.25rem_0.375rem_#00000012] w-full">
                <input class="min-h-0 p-0" type="checkbox" />

                <h3 class="collapse-title font-bold font-roboto min-h-0 p-4 text-sm text-[#151515] uppercase">
                  {label}
                </h3>

                <div class="collapse-content p-0 !pb-0">
                  {label === "Preço"
                    ? (
                      <Range
                        max={Math.floor(
                          parseFloat(
                            values.at(-1)?.value.split(":").at(-1) ?? "0",
                          ),
                        )}
                        min={Math.floor(
                          parseFloat(
                            values.at(0)?.value.split(":").at(0) ?? "0",
                          ),
                        )}
                      />
                    )
                    : (
                      <ul class="bg-[#FFFFFF] flex flex-col gap-3 p-4 w-full">
                        {values.map(({ label, quantity, url }, index) => (
                          <li class="flex">
                            <a
                              class="font-roboto font-normal text-[#333] text-sm"
                              href={url}
                            >
                              {label} ({quantity})
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
}

export default Filters;
