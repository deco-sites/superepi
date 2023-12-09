import { CardProps } from "deco-sites/superepi/components/departmentCarousel/Card/Card.tsx";
import { Carousel } from "deco-sites/superepi/components/departmentCarousel/Carousel/Carousel.tsx";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";
import Slider from "deco-sites/superepi/components/ui/Slider.tsx";
import SliderJS from "deco-sites/superepi/components/ui/SliderJS.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export interface Props {
  /** @description Título da sessão */
  heading: string;
  cards?: CardProps[];
}

export const DepartmentCarousel = ({
  heading,
  cards = [],
}: Props) => {
  if (cards.length === 0) return null;

  return (
    <div
      id="department-carousel"
      className={clx(
        "sm:flex sm:px-6 sm:py-5 sm:w-full",
        "lg:py-7",
      )}
    >
      <div className="sm:flex sm:flex-col sm:gap-8 sm:max-w-page-container sm:mx-auto sm:w-full">
        <div className="sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:w-full">
          <h2
            className={clx(
              "sm:font-roboto sm:font-medium sm:leading-normal sm:tracking-[0.125rem] sm:text-[#000000] sm:text-lg sm:uppercase",
              "lg:leading-normal lg:text-xl",
            )}
          >
            {heading}
          </h2>

          <div
            className={clx(
              "sm:gap-8 sm:hidden sm:items-center sm:w-fit",
              "lg:flex",
            )}
          >
            <Slider.PrevButton
              className={clx(
                "sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9",
                "sm:hover:bg-black sm:hover:text-white",
                "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black",
              )}
            >
              <Icon
                className="sm:h-4 sm:w-4"
                id="ChevronLeft"
              />
            </Slider.PrevButton>

            <Slider.NextButton
              className={clx(
                "sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9",
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

        <div
          className={clx(
            "sm:flex sm:flex-col sm:gap-3 sm:items-center sm:justify-center sm:px-12 sm:relative sm:w-full",
            "lg:px-0",
          )}
        >
          <div
            className={clx(
              "sm:absolute sm:flex sm:items-center sm:justify-between sm:pointer-events-none sm:w-full",
              "lg:hidden",
            )}
          >
            <Slider.PrevButton className="sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:w-9">
              <Icon
                className="sm:h-4 sm:w-4"
                id="ChevronLeft"
              />
            </Slider.PrevButton>

            <Slider.NextButton className="sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:w-9">
              <Icon
                className="sm:h-4 sm:w-4"
                id="ChevronRight"
              />
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
