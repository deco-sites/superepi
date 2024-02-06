import { clx } from "$store/sdk/clx.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Background {
  /** @description Texto alternativo da imagem */
  alt: string;
  /** @description Endereço da imagem [***Use uma resolução de 250x250 e formato webp para melhor performace] */
  src: ImageWidget;
}

/** @titleBy name */
export interface Categories {
  /** @description Endereço do link */
  href: string;
  /** @description Nome do link */
  name: string;
}

export interface Links {
  /** @description Link geral da página de departamento */
  general: string;
  /** @description Links de categorias */
  categories: Categories[];
}

/** @titleBy title */
export interface CardProps {
  /** @description Plano de fundo do card */
  background: Background;
  /** @description Título do card */
  title: string;
  /** @description Links do card */
  links: Links;
}

export const Card = ({ background, links, title }: CardProps) => {
  return (
    <div class="group aspect-square flex overflow-hidden relative w-full">
      <Image
        alt={background.alt}
        class="h-full object-cover w-full"
        height={250}
        src={background.src}
        width={250}
      />

      <div
        class={clx(
          "absolute bg-[#000000b8] bottom-[4.6875rem] duration-300 ease-in-out flex flex-col h-full overflow-y-hidden pb-8 transition-transform transform-gpu translate-y-full w-full",
          "group-hover:overflow-y-auto group-hover:translate-y-[4.6875rem]",
        )}
      >
        <h3 class="flex flex-shrink-0 h-[4.6875rem] items-center justify-center w-full">
          <a
            class={clx(
              "block duration-300 ease-in-out font-bold font-roboto leading-normal overflow-hidden px-1 text-ellipsis text-white text-base text-center transform-gpu transition-colors uppercase w-full whitespace-nowrap",
              "hover:text-[#ffab00]",
            )}
            href={links.general}
          >
            {title}
          </a>
        </h3>

        <ul
          class={clx(
            "duration-300 ease-in-out flex flex-col flex-shrink-0 gap-2 mt-auto opacity-0 px-8 transition-opacity transform-gpu w-full",
            "group-hover:opacity-100",
          )}
        >
          {links.categories.map(({ href, name }, index) => (
            <li class="flex w-full">
              <a
                class={clx(
                  "block duration-300 ease-in-out font-normal font-roboto leading-normal max-w-full overflow-hidden text-xs text-white text-ellipsis transition-colors transform-gpu w-fit whitespace-nowrap",
                  "hover:text-[#ffab00] hover:underline",
                )}
                href={href}
              >
                {name}
              </a>
            </li>
          ))}

          <li>
            <a
              class={clx(
                "block duration-300 ease-in-out font-normal font-roboto leading-normal max-w-full overflow-hidden text-xs text-[#ffab00] text-ellipsis transition-colors transform-gpu w-fit whitespace-nowrap",
                "hover:underline",
              )}
              href={links.general}
            >
              + veja mais
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
