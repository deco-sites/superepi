import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description Texto alternativo da imagem */
  alt: string;
  /** @description Link do banner */
  href: string;
  /** @description URL da imagem [***Use uma resolução de 1440x400 e formato webp para melhor performace] */
  src: ImageWidget;
};

export const Banner = ({
  alt,
  href,
  src
}: Banner) => {
  return (
    <div className={clx(
      "sm:flex sm:px-4 sm:py-5 sm:w-full",
      "py-7"
    )}>
      <a
        className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full"
        href={href}
      >
        <Image
          alt={alt}
          className="aspect-[1440/400] sm:h-auto sm:object-cover sm:w-full"
          height={400}
          src={src}
          width={1440}
        />
      </a>
    </div>
  );
};

export default Banner;