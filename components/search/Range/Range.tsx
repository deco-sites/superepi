import { clx } from "$store/sdk/clx.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useSignal } from "@preact/signals";

export type RangeProps = {
  max: number;
  min: number;
};

type RangeValue = {
  max: number;
  min: number;
  pl: string;
  pr: string;
  width: string;
};

export const Range = ({ max, min }: RangeProps) => {
  const params = new URLSearchParams(location.search);
  const paramsValue = params.get("filter.price");
  const paramsMax = paramsValue?.split(":").at(-1);
  const paramsMin = paramsValue?.split(":").at(0);

  const price = useSignal<RangeValue>({
    max: paramsMax !== undefined ? parseFloat(paramsMax) : max,
    min: paramsMin !== undefined ? parseFloat(paramsMin) : min,
    pl: "0%",
    pr: "0%",
    width: "100%",
  });

  const nearest = (max - min) / 10;
  const interval = max - min;

  return (
    <div class="flex flex-col gap-[1.25rem] w-full">
      <div class="flex items-center relative w-full">
        <div class="bg-[#ddd] flex h-1 items-center relative w-full">
          <div
            class="absolute bg-[#cf6196] h-full flex"
            style={{
              left: `${(100 * (price.value.min - min)) / interval}%`,
              right: `${(100 * (price.value.max - min)) / interval}%`,
              width: `${(100 * (price.value.max - price.value.min)) / interval
                }%`,
            }}
          />
        </div>

        <label class="absolute flex w-full">
          <span class="absolute h-0 overflow-hidden w-0">
            Preço mínimo
          </span>

          <input
            aria-label="Ranger de preço"
            class={clx("custom-range", "w-full")}
            max={max}
            min={min}
            onChange={(event) => {
              const target = event.target as HTMLInputElement;
              const float = parseFloat(target.value);

              if (float >= price.value.max - nearest) {
                price.value = {
                  ...price.value,
                  min: price.value.max - nearest,
                };

                return;
              }

              price.value = {
                ...price.value,
                min: float,
              };
            }}
            step={(max - min) / 100}
            type="range"
            value={price.value.min}
          />
        </label>

        <label class="absolute flex w-full">
          <span class="absolute h-0 overflow-hidden w-0">
            Preço máximo
          </span>

          <input
            aria-label="Ranger de preço"
            class={clx("custom-range", "w-full")}
            max={max}
            min={min}
            onChange={(event) => {
              const target = event.target as HTMLInputElement;
              const float = parseFloat(target.value);

              if (float <= price.value.min + nearest) {
                price.value = {
                  ...price.value,
                  max: price.value.min + nearest,
                };

                return;
              }

              price.value = {
                ...price.value,
                max: float,
              };
            }}
            step={(max - min) / 100}
            type="range"
            value={price.value.max}
          />
        </label>
      </div>

      <div class="gap-2 flex flex-wrap items-center justify-between w-full">
        <button
          class={clx(
            "bg-[#2e294e] duration-300 ease-in-out flex font-normal items-center justify-center h-9 leading-normal rounded text-[#FFFFFF] text-base transition-colors w-16",
            "hover:text-[#cf6196]",
          )}
          onClick={() => POST(price.value)}
        >
          Filtrar
        </button>

        <span class="font-normal leading-normal text-sm text-[#646a7c]">
          Preço: {formatPrice(price.value.min)} - {formatPrice(price.value.max)}
        </span>
      </div>
    </div>
  );
};

const POST = ({ max, min }: RangeValue) => {
  const params = new URLSearchParams(location.search);
  params.set("filter.price", `${min}:${max}`);

  location.search = params.toString();
};

export default Range;
