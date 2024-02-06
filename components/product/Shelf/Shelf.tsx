import { IS_BROWSER } from "$fresh/runtime.ts";
import { Product as ProductComponent } from "$store/components/product/ProductCard.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import Rendering from "$store/islands/Rendering.tsx";
import SliderJS from "$store/islands/ui/SliderJS.tsx";
import { invoke } from "$store/runtime.ts";
import { clx } from "$store/sdk/clx.ts";
import { useId } from "$store/sdk/useId.ts";
import { useSignal } from "@preact/signals";
import { ImageWidget } from "apps/admin/widgets.ts";
import { Product } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /** @description Ícone que fica ao lado do título */
  icon?: ImageWidget;
  /** @description Título da sessão */
  heading: string;
  /** @title Caminhos dos produtos a serem exibidos */
  productsPath: string;
  /** @description Justifica o título da sessão */
  variant?: "center" | "left";
}

export const Shelf = (
  { icon, heading, productsPath, variant = "left" }: Props,
) => {
  const products = useSignal<Product[]>([]);

  if (IS_BROWSER && !products.value.length) {
    invoke.linx.loaders.product.list({ path: productsPath }).then((i) => {
      products.value = i || [];
    });
  }

  if (!products.value.length) return null;

  const id = useId();

  return (
    <div class={clx("flex px-6 py-5 w-full", "lg:py-7")} id={id}>
      <div class="flex flex-col gap-8 max-w-page-container mx-auto w-full">
        <div class="flex gap-8 items-center justify-between relative w-full">
          <div
            class={clx(
              "flex gap-4 items-center ",
              variant === "left" && "w-full",
              variant === "center" &&
              "border-b-[0.1875rem] border-b-[#ffa500] mx-auto pb-2 w-fit",
            )}
          >
            {icon !== undefined && (
              <Image
                alt=""
                class="flex-shrink-0 h-8 object-cover w-8"
                height={32}
                src={icon}
                width={32}
              />
            )}

            <h2
              class={clx(
                "font-roboto font-medium leading-normal tracking-[0.125rem] text-[#000000] text-lg uppercase",
                "lg:leading-normal lg:text-xl",
              )}
            >
              {heading}
            </h2>
          </div>

          <div
            class={clx(
              "hidden flex-shrink-0 gap-8 items-center w-fit",
              "lg:flex",
              variant === "center" && "lg:absolute lg:right-0",
            )}
          >
            <Slider.PrevButton
              class={clx(
                "bg-transparent border-[0.125rem] border-[#000] duration-300 ease-in-out flex h-9 items-center justify-center pointer-events-auto transition-colors w-9",
                "hover:bg-black hover:text-white",
                "disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black",
              )}
            >
              <Icon class="h-4 w-4" id="ChevronLeft" />
            </Slider.PrevButton>

            <Slider.NextButton
              class={clx(
                "bg-transparent border-[0.125rem] border-[#000] duration-300 ease-in-out flex h-9 items-center justify-center pointer-events-auto transition-colors w-9",
                "hover:bg-black hover:text-white",
                "disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black",
              )}
            >
              <Icon class="h-4 w-4" id="ChevronRight" />
            </Slider.NextButton>
          </div>
        </div>

        <div
          class={clx(
            "gap-3 grid grid-cols-[auto_1fr_auto] items-center w-full",
            "lg:grid-cols-1",
          )}
        >
          <Slider.PrevButton
            class={clx(
              "bg-transparent border-[0.125rem] border-[#000] duration-300 ease-in-out flex h-9 items-center justify-center pointer-events-auto transition-colors w-9",
              "hover:bg-black hover:text-white",
              "disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black",
              "lg:hidden",
            )}
          >
            <Icon class="h-4 w-4" id="ChevronLeft" />
          </Slider.PrevButton>

          <Slider
            class="carousel gap-3 items-stretch w-full"
            role="list"
          >
            {products.value.map((product, index) => (
              <Slider.Item
                class="carousel-item h-auto max-w-full w-[19.75rem]"
                index={index}
              >
                <ProductComponent product={product} />
              </Slider.Item>
            ))}
          </Slider>

          <Slider.NextButton
            class={clx(
              "bg-transparent border-[0.125rem] border-[#000] duration-300 ease-in-out flex h-9 items-center justify-center pointer-events-auto transition-colors w-9",
              "hover:bg-black hover:text-white",
              "disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black",
              "lg:hidden",
            )}
          >
            <Icon class="h-4 w-4" id="ChevronRight" />
          </Slider.NextButton>
        </div>
      </div>

      <SliderJS rootId={id} />
    </div>
  );
};

export default function (props: Props) {
  return (
    <Rendering on="visible">
      <Shelf {...props} />
    </Rendering>
  );
}
