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
    <div class="sm:flex sm:flex-col sm:gap-[1.25rem] sm:w-full">
      <div class="sm:flex sm:items-center sm:relative sm:w-full">
        <div class="sm:bg-[#ddd] sm:flex sm:h-1 sm:items-center sm:relative sm:w-full">
          <div
            class="sm:absolute sm:bg-[#cf6196] sm:h-full sm:flex"
            style={{
              left: `${(100 * (price.value.min - min)) / interval}%`,
              right: `${(100 * (price.value.max - min)) / interval}%`,
              width: `${
                (100 * (price.value.max - price.value.min)) / interval
              }%`,
            }}
          />
        </div>

        <label class="sm:absolute sm:flex sm:w-full">
          <span class="sm:absolute sm:h-0 sm:overflow-hidden sm:w-0">
            Preço mínimo
          </span>

          <input
            aria-label="Ranger de preço"
            class={clx("custom-range", "sm:w-full")}
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

        <label class="sm:absolute sm:flex sm:w-full">
          <span class="sm:absolute sm:h-0 sm:overflow-hidden sm:w-0">
            Preço máximo
          </span>

          <input
            aria-label="Ranger de preço"
            class={clx("custom-range", "sm:w-full")}
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

      <div class="sm:gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:w-full">
        <button
          class={clx(
            "sm:bg-[#2e294e] sm:duration-300 sm:ease-in-out sm:flex sm:font-normal sm:items-center sm:justify-center sm:h-9 sm:leading-normal sm:rounded sm:text-[#FFFFFF] sm:text-base sm:transition-colors sm:w-16",
            "sm:hover:text-[#cf6196]",
          )}
          onClick={() => POST(price.value)}
        >
          Filtrar
        </button>

        <span class="sm:font-normal sm:leading-normal sm:text-sm sm:text-[#646a7c]">
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
