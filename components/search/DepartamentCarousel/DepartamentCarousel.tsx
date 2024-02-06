"use client";

import { CarouselsDepartamentItem } from "$store/components/search/SearchResult.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/components/ui/SliderJS.tsx";
import { clx } from "$store/sdk/clx.ts";
import { useId } from "$store/sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";

export type DepartamentCarouselProps = {
  carouselDepartament: CarouselsDepartamentItem[];
};

export const DepartamentCarousel = (
  { carouselDepartament }: DepartamentCarouselProps,
) => {
  const id = useId();

  return (
    <div
      class={clx(
        "gap-6 grid grid-cols-1 items-center max-w-page-container mx-auto w-full",
        "lg:grid-cols-[auto_1fr_auto]",
      )}
      id={id}
    >
      <Slider.PrevButton
        class={clx(
          "bg-transparent border-[0.125rem] border-[#000000] duration-300 ease-in-out h-9 hidden items-center justify-center pointer-events-auto text-[#000000] transition-colors w-9",
          "hover:bg-black hover:text-white",
          "disabled:cursor-not-allowed disabled:bg-transparent",
          "lg:flex",
        )}
      >
        <Icon class="h-4 w-4" id="ChevronLeft" />
      </Slider.PrevButton>

      <Slider class="carousel gap-6 items-stretch w-full" role="list">
        {carouselDepartament.map(({ href, image, name }, index) => (
          <Slider.Item
            class="carousel-item h-auto w-32"
            index={index}
            role="listitem"
          >
            <a
              class="flex flex-col gap-4 h-full items-center justify-start w-full"
              href={href}
            >
              <Image
                alt=""
                class="border-[0.125rem] border-[#f0f0f0] h-32 object-cover rounded-full w-full"
                height={130}
                src={image}
                width={130}
              />

              <span class="font-roboto font-normal text-[#151515] text-sm text-center">
                {name}
              </span>
            </a>
          </Slider.Item>
        ))}
      </Slider>

      <Slider.NextButton
        class={clx(
          "bg-transparent border-[0.125rem] border-[#000000] duration-300 ease-in-out h-9 hidden items-center justify-center pointer-events-auto text-[#000000] transition-colors w-9",
          "hover:bg-black hover:text-white",
          "disabled:cursor-not-allowed disabled:bg-transparent",
          "lg:flex",
        )}
      >
        <Icon class="h-4 w-4" id="ChevronRight" />
      </Slider.NextButton>

      <SliderJS rootId={id} />
    </div>
  );
};

export default DepartamentCarousel;
