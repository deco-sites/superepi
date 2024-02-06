import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/components/ui/SliderJS.tsx";
import { clx } from "$store/sdk/clx.ts";
import { useId } from "$store/sdk/useId.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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

export const Partners = ({ partners = [] }: Props) => {
  const id = useId();

  if (partners.length === 0) return null;

  return (
    <div class={clx("flex px-6 py-5 w-full", "lg:py-7")} id={id}>
      <div class="flex items-center gap-3 max-w-[81.25rem] mx-auto w-full">
        <Slider.PrevButton
          class={clx(
            "bg-transparent border-[0.125rem] border-[#000] duration-300 ease-in-out flex h-9 items-center justify-center pointer-events-auto transition-colors w-9",
            "hover:bg-black hover:text-white",
            "disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black",
          )}
        >
          <Icon class="h-4 w-4" id="ChevronLeft" />
        </Slider.PrevButton>

        <Slider class="carousel gap-16 w-full">
          {partners.map(({ alt, href, logo }, index) => (
            <Slider.Item
              class="carousel-item flex w-fit"
              index={index}
            >
              <a aria-label={`Navegar para ${alt}`} class="flex" href={href}>
                <Image
                  alt=""
                  class={clx(
                    "duration-300 ease-in-out h-16 object-contain grayscale transition-[filter] w-auto",
                    "hover:grayscale-0",
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
          class={clx(
            "bg-transparent border-[0.125rem] border-[#000] duration-300 ease-in-out flex h-9 items-center justify-center pointer-events-auto transition-colors w-9",
            "hover:bg-black hover:text-white",
            "disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black",
          )}
        >
          <Icon class="h-4 w-4" id="ChevronRight" />
        </Slider.NextButton>
      </div>

      <SliderJS rootId={id} />
    </div>
  );
};

export default Partners;
