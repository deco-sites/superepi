import { CardProps } from "$store/components/departmentCarousel/Card/Card.tsx";
import { Carousel } from "$store/components/departmentCarousel/Carousel/Carousel.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/ui/SliderJS.tsx";
import { clx } from "$store/sdk/clx.ts";

export interface Props {
  /** @description Título da sessão */
  heading: string;
  cards?: CardProps[];
}

export const DepartmentCarousel = ({ heading, cards = [] }: Props) => {
  if (cards.length === 0) return null;

  return (
    <div
      id="department-carousel"
      class={clx("flex px-6 py-5 w-full", "lg:py-7")}
    >
      <div class="flex flex-col gap-8 max-w-page-container mx-auto w-full">
        <div class="grid grid-cols-[1fr_auto] items-center w-full">
          <h2
            class={clx(
              "font-roboto font-medium leading-normal tracking-[0.125rem] text-[#000000] text-lg uppercase",
              "lg:leading-normal lg:text-xl",
            )}
          >
            {heading}
          </h2>

          <div
            class={clx(
              "gap-8 hidden items-center w-fit",
              "lg:flex",
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
            "flex flex-col gap-3 items-center justify-center px-12 relative w-full",
            "lg:px-0",
          )}
        >
          <div
            class={clx(
              "absolute flex items-center justify-between pointer-events-none w-full",
              "lg:hidden",
            )}
          >
            <Slider.PrevButton class="bg-transparent border-[0.125rem] border-[#000] flex h-9 items-center justify-center pointer-events-auto w-9">
              <Icon class="h-4 w-4" id="ChevronLeft" />
            </Slider.PrevButton>

            <Slider.NextButton class="bg-transparent border-[0.125rem] border-[#000] flex h-9 items-center justify-center pointer-events-auto w-9">
              <Icon class="h-4 w-4" id="ChevronRight" />
            </Slider.NextButton>
          </div>

          <Carousel cards={cards} />
        </div>

        <SliderJS rootId="department-carousel" />
      </div>
    </div>
  );
};

export default DepartmentCarousel;
