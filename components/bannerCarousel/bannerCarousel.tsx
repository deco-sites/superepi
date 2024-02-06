import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/ui/SliderJS.tsx";
import { clx } from "$store/sdk/clx.ts";
import { useId } from "$store/sdk/useId.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/** @titleBy alt */
export interface Banner {
  /** @description Texto alternativo do banner */
  alt: string;
  /** @description Link do banner */
  href: string;
  /** @description URL da imagem do banner [***Use uma resolução de 1440x400 e formato webp para melhor performace] */
  src: ImageWidget;
}

export interface Props {
  /** @description Lista com os banners */
  banners: Banner[];
}

export const BannerCarousel = ({ banners = [] }: Props) => {
  const id = useId();

  if (banners.length === 0) return null;

  return (
    <div class={clx("flex pb-5 w-full", "lg:pb-7")} id={id}>
      <div class="flex items-center justify-center relative w-full">
        <Slider class="carousel w-full" role="list">
          {banners.map(({ alt, href, src }, index) => (
            <Slider.Item
              class="carousel-item w-full"
              index={index}
              role="listitem"
            >
              <a class="flex w-full" href={href}>
                <Image
                  alt={alt}
                  class="aspect-[1440/400] w-full"
                  height={400}
                  loading={index === 0 ? "eager" : "lazy"}
                  src={src}
                  width={1440}
                />
              </a>
            </Slider.Item>
          ))}
        </Slider>

        <div class="absolute flex gap-8 items-center justify-between max-w-[83.25rem] mx-auto pointer-events-none px-4 w-full z-10">
          <Slider.PrevButton
            class={clx(
              "bg-transparent border-[0.125rem] border-[#c7bcbc] duration-300 ease-in-out flex h-9 items-center justify-center pointer-events-auto text-[#c7bcbc] transition-colors w-9",
              "hover:bg-black hover:text-white",
              "disabled:cursor-not-allowed disabled:bg-transparent",
              "lg:h-12 lg:w-12",
            )}
          >
            <Icon class="h-4 w-4" id="ChevronLeft" />
          </Slider.PrevButton>

          <Slider.NextButton
            class={clx(
              "bg-transparent border-[0.125rem] border-[#c7bcbc] duration-300 ease-in-out flex h-9 items-center justify-center pointer-events-auto text-[#c7bcbc] transition-colors w-9",
              "hover:bg-black hover:text-white",
              "disabled:cursor-not-allowed disabled:bg-transparent",
              "lg:h-12 lg:w-12",
            )}
          >
            <Icon class="h-4 w-4" id="ChevronRight" />
          </Slider.NextButton>
        </div>

        <ul class="absolute bottom-6 flex gap-3 items-center justify-center max-w-full px-3 w-fit z-10">
          {banners.map(({ }, index) => (
            <li
              class={clx(
                "flex",
                "[&_button]:bg-[#f1f1f1] [&_button]:border-none [&_button]:w-4 [&_button]:h-4",
                "disabled:[&_button]:bg-[#F8A531]",
              )}
            >
              <Slider.Dot children={undefined} index={index} />
            </li>
          ))}
        </ul>
      </div>

      <SliderJS rootId={id} />
    </div>
  );
};

export default BannerCarousel;
