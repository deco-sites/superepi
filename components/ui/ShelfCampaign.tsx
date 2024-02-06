import { SendEventOnLoad } from "$store/components/Analytics.tsx";
import { Product as ProductCard } from "$store/components/product/ProductCard.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Props as TimerProps } from "$store/components/ui/TimerCampaign.tsx";
import TimerCampaign from "$store/islands/TimerCampaign.tsx";
import SliderJS from "$store/islands/ui/SliderJS.tsx";
import { clx } from "$store/sdk/clx.ts";
import { useId } from "$store/sdk/useId.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { Product } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";

export interface ShelfCampaignProps {
  title?: string;
  description?: string;
  cta?: {
    text?: string;
    href?: string;
  };
  date: TimerProps;
  products: Product[] | null;
}

export default function ShelfCampaign({
  title,
  description,
  cta,
  date,
  products,
}: ShelfCampaignProps) {
  const id = useId();
  const platform = usePlatform();

  if (!products || products.length === 0) {
    return null;
  }

  const ctaComponent = !cta?.text ? <></> : (
    <div>
      <a
        href={cta?.href ?? "#"}
        class="bg-black text-white font-semibold px-6 py-4"
      >
        {cta?.text}
      </a>
    </div>
  );

  return (
    <div class={clx("flex py-5 w-full", "lg:py-7")} id={id}>
      <div
        class={clx(
          "bg-[#f5f5f5] flex px-4 py-8 w-full",
          "lg:py-4",
        )}
      >
        <div
          class={clx(
            "gap-5 grid grid-cols-1 items-center justify-items-center max-w-page-container mx-auto w-full",
            "lg:grid-cols-2",
          )}
        >
          <div
            class={clx(
              "flex flex-col items-center w-full",
              "lg:max-w-[26.25rem] lg:items-start",
            )}
          >
            <h3
              class={clx(
                "flex font-roboto font-black gap-5 items-center leading-tight max-w-full text-4xl text-black text-center uppercase",
                "lg:text-left",
              )}
            >
              <Icon
                class="flex-shrink-0 h-10 w-10"
                id="TimerCampaign"
              />

              {title}
            </h3>

            <p
              class={clx(
                "font-roboto font-normal leading-normal text-black text-base text-center",
                "lg:text-left",
              )}
            >
              {description}
            </p>

            <div
              class={clx(
                "flex justify-center my-5 w-full",
                "lg:justify-start",
              )}
            >
              <TimerCampaign finish={date?.finish} initial={date?.initial} />
            </div>

            <a
              class="bg-black flex font-roboto font-normal items-center justify-center leading-normal min-h-12 min-w-[13.75rem] text-white text-sm text-center"
              href={cta?.href}
            >
              {cta?.text}
            </a>
          </div>

          <div class="flex items-center justify-center relative w-full">
            <Slider.PrevButton
              class={clx(
                "bg-transparent border-[0.125rem] border-[#000] duration-300 ease-in-out flex h-9 items-center justify-center -mr-[1.125rem] pointer-events-auto transition-colors w-9 z-30",
                "hover:bg-black hover:text-white",
                "disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black",
              )}
            >
              <Icon class="h-4 w-4" id="ChevronLeft" />
            </Slider.PrevButton>

            <Slider
              class={clx(
                "carousel gap-3 items-stretch w-full",
                "lg:max-w-[35.75rem]",
              )}
            >
              {products.map((product, index) => (
                <Slider.Item
                  class="carousel-item h-auto w-[17.5rem]"
                  index={index}
                >
                  <ProductCard
                    backgroundColor="#FFFFFF"
                    index={index}
                    product={product}
                    list={`${id}-timer-campaing`}
                  />
                </Slider.Item>
              ))}
            </Slider>

            <Slider.NextButton
              class={clx(
                "bg-transparent border-[0.125rem] border-[#000] duration-300 ease-in-out flex h-9 items-center justify-center -ml-[1.125rem] pointer-events-auto transition-colors w-9 z-30",
                "hover:bg-black hover:text-white",
                "disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black",
              )}
            >
              <Icon class="h-4 w-4" id="ChevronRight" />
            </Slider.NextButton>
          </div>
        </div>
      </div>

      <SliderJS rootId={id} />

      <SendEventOnLoad
        event={{
          name: "view_item_list",
          params: {
            item_list_name: title,
            items: products.map((product) =>
              mapProductToAnalyticsItem({
                product,
                ...useOffer(product.offers),
              })
            ),
          },
        }}
      />
    </div>
  );
}
