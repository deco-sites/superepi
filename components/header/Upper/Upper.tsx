import SliderJS from "$store/islands/ui/SliderJS.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/** @titleBy name */
export interface LinkWithBackground {
  /** @description Cor do fundo do link */
  backgroundColor: string;
  /** @description Cor do texto do link */
  color: string;
  /** @description Endereço do link */
  href: string;
  /** @description Nome do link */
  name: string;
}

/** @titleBy name */
export interface LinkWithIcons {
  /** @description Cor do texto do link */
  color: string;
  /** @description Ícone do link [***Use uma resolução de 64x64 e formato webp para melhor performace] */
  icon: ImageWidget;
  /** @description Endereço do link */
  href: string;
  /** @description Nome do link */
  name: string;
}

export interface Props {
  /** @description Lista com os links preenchidos */
  linksWithBackground: LinkWithBackground[];
  linksWithIcons: LinkWithIcons[];
  isMobile: boolean;
}

export const Upper = (props: Props) => {
  if (!props) return null;
  const { linksWithBackground, linksWithIcons, isMobile } = props;

  return (
    <div
      class="group-data-[micro-header=true]:hidden bg-[#f0f0f0] w-full"
      id="header-alerts"
    >
      <div class="flex max-w-[1300px] mx-auto w-full gap-4 items-center justify-between h-[40px] lg:px-6">
        <ul
          data-slider
          class="flex gap-8 items-center w-full lg:w-fit carousel"
        >
          {linksWithIcons.map(({ color, href, icon, name }, index) => (
            <li
              data-slider-item={index}
              class="shrink-0 w-full lg:w-fit carousel-item"
            >
              <a
                class="flex w-full justify-center gap-1 items-center font-bold font-roboto leading-normal text-sm tracking-[0.025rem]"
                href={href}
                style={{ color: color }}
              >
                <Image
                  alt=""
                  class="h-6 w-6"
                  height={24}
                  src={icon}
                  width={24}
                />

                {name}
              </a>
            </li>
          ))}
        </ul>

        {!isMobile && (
          <ul class="shrink-0 items-center justify-end w-fit hidden lg:flex">
            {linksWithBackground.map((
              { backgroundColor, color, href, name },
            ) => (
              <li class="flex shrink-0">
                <a
                  class="border-none flex font-bold font-roboto items-center justify-center leading-normal px-8 text-sm min-h-[2.5rem]"
                  href={href}
                  style={{
                    backgroundColor: backgroundColor,
                    color: color,
                  }}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <SliderJS rootId="header-alerts" infinite interval={4000} />
    </div>
  );
};

export default Upper;
