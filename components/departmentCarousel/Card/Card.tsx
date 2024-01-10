import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

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

export const Card = ({
  background,
  links,
  title,
}: CardProps) => {
  return (
    <div className="group aspect-square sm:flex sm:overflow-hidden sm:relative sm:w-full">
      <Image
        alt={background.alt}
        className="sm:h-full sm:object-cover sm:w-full"
        height={250}
        src={background.src}
        width={250}
      />

      <div
        className={clx(
          "sm:absolute sm:bg-[#000000b8] sm:bottom-[4.6875rem] sm:duration-300 sm:ease-in-out sm:flex sm:flex-col sm:h-full sm:overflow-y-hidden sm:pb-8 sm:transition-transform sm:transform-gpu sm:translate-y-full sm:w-full",
          "sm:group-hover:overflow-y-auto sm:group-hover:translate-y-[4.6875rem]",
        )}
      >
        <h3 className="sm:flex sm:flex-shrink-0 sm:h-[4.6875rem] sm:items-center sm:justify-center sm:w-full">
          <a
            className={clx(
              "sm:block sm:duration-300 sm:ease-in-out sm:font-bold sm:font-roboto sm:leading-normal sm:overflow-hidden sm:px-1 sm:text-ellipsis sm:text-white sm:text-base sm:text-center sm:transform-gpu sm:transition-colors sm:uppercase sm:w-full sm:whitespace-nowrap",
              "sm:hover:text-[#ffab00]",
            )}
            href={links.general}
          >
            {title}
          </a>
        </h3>

        <ul
          className={clx(
            "sm:duration-300 sm:ease-in-out sm:flex sm:flex-col sm:flex-shrink-0 sm:gap-2 sm:mt-auto sm:opacity-0 sm:px-8 sm:transition-opacity sm:transform-gpu sm:w-full",
            "sm:group-hover:opacity-100",
          )}
        >
          {links.categories.map(({
            href,
            name,
          }, index) => (
            <li className="sm:flex sm:w-full">
              <a
                className={clx(
                  "sm:block sm:duration-300 sm:ease-in-out sm:font-normal sm:font-roboto sm:leading-normal sm:max-w-full sm:overflow-hidden sm:text-xs sm:text-white sm:text-ellipsis sm:transition-colors sm:transform-gpu sm:w-fit sm:whitespace-nowrap",
                  "sm:hover:text-[#ffab00] sm:hover:underline",
                )}
                href={href}
              >
                {name}
              </a>
            </li>
          ))}

          <li>
            <a
              className={clx(
                "sm:block sm:duration-300 sm:ease-in-out sm:font-normal sm:font-roboto sm:leading-normal sm:max-w-full sm:overflow-hidden sm:text-xs sm:text-[#ffab00] sm:text-ellipsis sm:transition-colors sm:transform-gpu sm:w-fit sm:whitespace-nowrap",
                "sm:hover:underline",
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
