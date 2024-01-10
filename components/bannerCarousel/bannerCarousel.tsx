import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";
import Slider from "deco-sites/superepi/components/ui/Slider.tsx";
import SliderJS from "deco-sites/superepi/islands/ui/SliderJS.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";
import { useId } from "deco-sites/superepi/sdk/useId.ts";

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

export const BannerCarousel = ({
  banners = [],
}: Props) => {
  const id = useId();

  if (banners.length === 0) return null;

  return (
    <div
      className={clx(
        "sm:flex sm:pb-5 sm:w-full",
        "lg:pb-7",
      )}
      id={id}
    >
      <div className="sm:flex sm:items-center sm:justify-center sm:relative sm:w-full">
        <Slider
          className="carousel sm:w-full"
          role="list"
        >
          {banners.map(({
            alt,
            href,
            src,
          }, index) => (
            <Slider.Item
              className="carousel-item sm:w-full"
              index={index}
              role="listitem"
            >
              <a
                className="sm:flex sm:w-full"
                href={href}
              >
                <Image
                  alt={alt}
                  className="sm:aspect-[1440/400] sm:w-full"
                  height={400}
                  loading={index === 0 ? "eager" : "lazy"}
                  src={src}
                  width={1440}
                />
              </a>
            </Slider.Item>
          ))}
        </Slider>

        <div className="sm:absolute sm:flex sm:gap-8 sm:items-center sm:justify-between sm:max-w-[83.25rem] sm:mx-auto sm:pointer-events-none sm:px-4 sm:w-full sm:z-10">
          <Slider.PrevButton
            className={clx(
              "sm:bg-transparent sm:border-[0.125rem] sm:border-[#c7bcbc] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:text-[#c7bcbc] sm:transition-colors sm:w-9",
              "sm:hover:bg-black sm:hover:text-white",
              "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent",
              "lg:h-12 lg:w-12",
            )}
          >
            <Icon
              className="sm:h-4 sm:w-4"
              id="ChevronLeft"
            />
          </Slider.PrevButton>

          <Slider.NextButton
            className={clx(
              "sm:bg-transparent sm:border-[0.125rem] sm:border-[#c7bcbc] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:text-[#c7bcbc] sm:transition-colors sm:w-9",
              "sm:hover:bg-black sm:hover:text-white",
              "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent",
              "lg:h-12 lg:w-12",
            )}
          >
            <Icon
              className="sm:h-4 sm:w-4"
              id="ChevronRight"
            />
          </Slider.NextButton>
        </div>

        <ul className="sm:absolute sm:bottom-6 sm:flex sm:gap-3 sm:items-center sm:justify-center sm:max-w-full sm:px-3 sm:w-fit sm:z-10">
          {banners.map(({}, index) => (
            <li
              className={clx(
                "sm:flex",
                "sm:[&_button]:bg-[#f1f1f1] sm:[&_button]:border-none sm:[&_button]:w-4 sm:[&_button]:h-4",
                "sm:disabled:[&_button]:bg-[#F8A531]",
              )}
            >
              <Slider.Dot
                children={undefined}
                index={index}
              />
            </li>
          ))}
        </ul>
      </div>

      <SliderJS rootId={id} />
    </div>
  );
};

export default BannerCarousel;
