import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";
import Slider from "deco-sites/superepi/components/ui/Slider.tsx";
import SliderJS from "deco-sites/superepi/components/ui/SliderJS.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";
import { useId } from "deco-sites/superepi/sdk/useId.ts";

/** @titleBy alt */
export interface Partner {
  /** @description Texto alternativo da logo */
  alt: string;
  /** @description Link do parceiro */
  href: string;
  /** @description Logo [***Use uam resolução de Wx64 e formato webp para melhor performace] */
  logo: ImageWidget;
}

export interface Props {
  /** @description Lista com as parcerias */
  partners: Partner[];
}

export const Partners = ({
  partners = [],
}: Props) => {
  const id = useId();

  if (partners.length === 0) return null;

  return (
    <div
      className={clx(
        "sm:flex sm:px-6 sm:py-5 sm:w-full",
        "lg:py-7",
      )}
      id={id}
    >
      <div className="sm:flex sm:items-center sm:gap-3 sm:max-w-[81.25rem] sm:mx-auto sm:w-full">
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

        <Slider className="sm:carousel sm:gap-16 sm:w-full">
          {partners.map(({
            alt,
            href,
            logo,
          }, index) => (
            <Slider.Item
              className="sm:carousel-item sm:flex sm:w-fit"
              index={index}
              key={index}
            >
              <a
                aria-label={`Navegar para ${alt}`}
                className="sm:flex"
                href={href}
              >
                <Image
                  alt=""
                  className={clx(
                    "sm:duration-300 sm:ease-in-out sm:h-16 sm:object-contain sm:grayscale sm:transition-[filter] sm:w-auto",
                    "sm:hover:grayscale-0",
                  )}
                  height={64}
                  src={logo}
                  width={0}
                />
              </a>
            </Slider.Item>
          ))}
        </Slider>

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

      <SliderJS rootId={id} />
    </div>
  );
};

export default Partners;
