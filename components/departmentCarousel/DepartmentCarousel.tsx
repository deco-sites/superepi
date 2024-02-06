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
      class={clx("sm:flex sm:px-6 sm:py-5 sm:w-full", "lg:py-7")}
    >
      <div class="sm:flex sm:flex-col sm:gap-8 sm:max-w-page-container sm:mx-auto sm:w-full">
        <div class="sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:w-full">
          <h2
            class={clx(
              "sm:font-roboto sm:font-medium sm:leading-normal sm:tracking-[0.125rem] sm:text-[#000000] sm:text-lg sm:uppercase",
              "lg:leading-normal lg:text-xl",
            )}
          >
            {heading}
          </h2>

          <div
            class={clx(
              "sm:gap-8 sm:hidden sm:items-center sm:w-fit",
              "lg:flex",
            )}
          >
            <Slider.PrevButton
              class={clx(
                "sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9",
                "sm:hover:bg-black sm:hover:text-white",
                "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black",
              )}
            >
              <Icon class="sm:h-4 sm:w-4" id="ChevronLeft" />
            </Slider.PrevButton>

            <Slider.NextButton
              class={clx(
                "sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9",
                "sm:hover:bg-black sm:hover:text-white",
                "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black",
              )}
            >
              <Icon class="sm:h-4 sm:w-4" id="ChevronRight" />
            </Slider.NextButton>
          </div>
        </div>

        <div
          class={clx(
            "sm:flex sm:flex-col sm:gap-3 sm:items-center sm:justify-center sm:px-12 sm:relative sm:w-full",
            "lg:px-0",
          )}
        >
          <div
            class={clx(
              "sm:absolute sm:flex sm:items-center sm:justify-between sm:pointer-events-none sm:w-full",
              "lg:hidden",
            )}
          >
            <Slider.PrevButton class="sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:w-9">
              <Icon class="sm:h-4 sm:w-4" id="ChevronLeft" />
            </Slider.PrevButton>

            <Slider.NextButton class="sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:w-9">
              <Icon class="sm:h-4 sm:w-4" id="ChevronRight" />
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
