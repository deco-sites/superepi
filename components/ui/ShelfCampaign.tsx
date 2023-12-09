import type { Product } from "apps/commerce/types.ts";
import { Product as ProductCard } from "$store/components/product/ProductCard.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import Icon from "$store/components/ui/Icon.tsx";
import TimerCampaign from "$store/islands/TimerCampaign.tsx";
import { SendEventOnLoad } from "$store/components/Analytics.tsx";
import type { Props as TimerProps } from "$store/components/ui/TimerCampaign.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

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
    <div
      className={clx(
        "sm:flex sm:py-5 sm:w-full",
        "lg:py-7",
      )}
      id={id}
    >
      <div
        className={clx(
          "sm:bg-[#f5f5f5] sm:flex sm:px-4 sm:py-8 sm:w-full",
          "lg:py-4",
        )}
      >
        <div
          className={clx(
            "sm:gap-5 sm:grid sm:grid-cols-1 sm:items-center sm:justify-items-center sm:max-w-page-container sm:mx-auto sm:w-full",
            "lg:grid-cols-2",
          )}
        >
          <div
            className={clx(
              "sm:flex sm:flex-col sm:items-center sm:w-full",
              "lg:max-w-[26.25rem] lg:items-start",
            )}
          >
            <h3
              className={clx(
                "sm:flex sm:font-roboto sm:font-black sm:gap-5 sm:items-center sm:leading-tight sm:max-w-full sm:text-4xl sm:text-black sm:text-center sm:uppercase",
                "lg:text-left",
              )}
            >
              <Icon
                className="sm:flex-shrink-0 sm:h-10 sm:w-10"
                id="TimerCampaign"
              />

              {title}
            </h3>

            <p
              className={clx(
                "sm:font-roboto sm:font-normal sm:leading-normal sm:text-black sm:text-base sm:text-center",
                "lg:text-left",
              )}
            >
              {description}
            </p>

            <div
              className={clx(
                "sm:flex sm:justify-center sm:my-5 sm:w-full",
                "lg:justify-start",
              )}
            >
              <TimerCampaign
                finish={date?.finish}
                initial={date?.initial}
              />
            </div>

            <a
              className="sm:bg-black sm:flex sm:font-roboto sm:font-normal sm:items-center sm:justify-center sm:leading-normal sm:min-h-12 sm:min-w-[13.75rem] sm:text-white sm:text-sm sm:text-center"
              href={cta?.href}
            >
              {cta?.text}
            </a>
          </div>

          <div className="sm:flex sm:items-center sm:justify-center sm:relative sm:w-full">
            <Slider.PrevButton
              className={clx(
                "sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:-mr-[1.125rem] sm:pointer-events-auto sm:transition-colors sm:w-9 sm:z-30",
                "sm:hover:bg-black sm:hover:text-white",
                "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black",
              )}
            >
              <Icon
                className="sm:h-4 sm:w-4"
                id="ChevronLeft"
              />
            </Slider.PrevButton>

            <Slider
              className={clx(
                "carousel sm:gap-3 sm:items-stretch sm:w-full",
                "lg:max-w-[35.75rem]",
              )}
            >
              {products.map((product, index) => (
                <Slider.Item
                  className="carousel-item sm:h-auto sm:w-[17.5rem]"
                  index={index}
                  key={index}
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
              className={clx(
                "sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:-ml-[1.125rem] sm:pointer-events-auto sm:transition-colors sm:w-9 sm:z-30",
                "sm:hover:bg-black sm:hover:text-white",
                "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black",
              )}
            >
              <Icon
                className="sm:h-4 sm:w-4"
                id="ChevronRight"
              />
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
                ...(useOffer(product.offers)),
              })
            ),
          },
        }}
      />
    </div>
  );
}

{
  /* <div class="bg-[#F5F5F5]">
      <div class="max-w-[1300px] mx-auto grid grid-cols-2 grid-row-3 py-4">
        <div class="flex flex-col justify-center items-center row-span-full">
          <div class="flex gap-2 items-center">
            <Icon id="TimerCampaign" size={40} />
            {title && <h2 class="text-[35px] font-semibold text-[#000]">{title}</h2>}
          </div>
          {description && <p class="text-[#000] font-medium pb-2">{description}</p>}
          <div class="pb-8">

          </div>
          {ctaComponent}
        </div>
        <div
          id={id}
          class="row-span-full grid grid-cols-[48px_1fr_48px] px-0 sm:px-5 grid-rows-[48px_1fr_1fr_1fr_48px]"
        >
          <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5">
            {products?.map((product, index) => (
              <Slider.Item
                index={index}
                class="carousel-item w-[270px] sm:w-[292px] first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0"
              >
                <ProductCard
                  product={product}
                  itemListName={title}
                  layout={cardLayout}
                  platform={platform}
                  index={index}
                />
              </Slider.Item>
            ))}
          </Slider>

          <>
            <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
              <Slider.PrevButton class="btn btn-circle btn-outline absolute rounded-none right-1/2 bg-base-100">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} />
              </Slider.PrevButton>
            </div>
            <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
              <Slider.NextButton class="btn btn-circle btn-outline absolute rounded-none left-1/2 bg-base-100">
                <Icon size={24} id="ChevronRight" strokeWidth={3} />
              </Slider.NextButton>
            </div>
          </>
          <SliderJS rootId={id} />
          <SendEventOnLoad
            event={{
              name: "view_item_list",
              params: {
                item_list_name: title,
                items: products.map((product) =>
                  mapProductToAnalyticsItem({
                    product,
                    ...(useOffer(product.offers)),
                  })
                ),
              },
            }}
          />
        </div>
      </div>
    </div> */
}
