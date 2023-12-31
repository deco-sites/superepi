import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

/** @titleBy alt */
export interface Banner {
  /** @description Texto alternativo do banner */
  alt: string;
  /** @description Link do banner */
  href: string;
  /** @description URL da imagem do banner [***Use uma resolução de 420x545 e formato webp para melhor performace] */
  src: ImageWidget;
}

export interface Props {
  banners: Banner[];
}

export const GridBanners = ({
  banners = [],
}: Props) => {
  if (banners.length === 0) return null;

  return (
    <div
      className={clx(
        "sm:flex sm:px-6 sm:py-5 sm:w-full",
        "lg:py-7",
      )}
    >
      <ul
        className={clx(
          "sm:gap-6 sm:grid sm:grid-cols-1 sm:max-w-page-container sm:mx-auto sm:w-full",
          "md:grid-cols-2",
          "lg:grid-cols-3",
        )}
      >
        {banners.map(({
          alt,
          href,
          src,
        }, index) => (
          <li
            className="sm:aspect-[420/545] sm:flex sm:h-full sm:w-full"
            key={index}
          >
            <a
              aria-label={`Navegar para ${alt}`}
              className="sm:flex sm:h-full sm:w-full"
              href={href}
            >
              <Image
                alt={alt}
                className="sm:h-full sm:object-cover sm:w-full"
                height={545}
                src={src}
                width={420}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GridBanners;
