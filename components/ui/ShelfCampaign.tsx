import type { Product } from "apps/commerce/types.ts";
import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";

export interface ShelfCampaignProps {
  title?: string;
  description?: string;
  cta?: {
    text?: string;
    href?: string;
  }
  date: {
    initial: Date
    finish: Date
  },
  products: Product[] | null;
  cardLayout: cardLayout 
}

export default function ShelfCampaign({ 
  title, 
  description, 
  cta, 
  date, 
  products, 
  cardLayout 
}: ShelfCampaignProps) {
  const id = useId();
  const platform = usePlatform();

  if (!products || products.length === 0) {
    return null;
  }

  const cta = !cta?.text ? <></> : (
    <div>
      <a href={cta?.href ?? "#"} class="bg-black text-white font-semibold">
        {cta?.text}
      </a>
    </div>
  )

  console.log(date, "DATE")

  return (
    <div class="bg-[#F5F5F5]">
      <div class="lg:container flex justify-center">
        <div class="flex flex-col">
          { title && (
            <h2>{title}</h2>
          ) }
          { description && (
            <p>{description}</p>
          ) }
          <div></div>
          {cta}
        </div>
        <div
          id={id}
          class="container grid grid-cols-[48px_1fr_48px] px-0 sm:px-5"
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
              <Slider.PrevButton class="btn btn-circle btn-outline absolute right-1/2 bg-base-100">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} />
              </Slider.PrevButton>
            </div>
            <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
              <Slider.NextButton class="btn btn-circle btn-outline absolute left-1/2 bg-base-100">
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
    </div>
  )
}
