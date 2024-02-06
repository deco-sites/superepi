import { clx } from "$store/sdk/clx.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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

export const GridBanners = ({ banners = [] }: Props) => {
  if (banners.length === 0) return null;

  return (
    <div class={clx("flex px-6 py-5 w-full", "lg:py-7")}>
      <ul
        class={clx(
          "gap-6 grid grid-cols-1 max-w-page-container mx-auto w-full",
          "md:grid-cols-2",
          "lg:grid-cols-3",
        )}
      >
        {banners.map(({ alt, href, src }, index) => (
          <li class="aspect-[420/545] flex h-full w-full">
            <a
              aria-label={`Navegar para ${alt}`}
              class="flex h-full w-full"
              href={href}
            >
              <Image
                alt={alt}
                class="h-full object-cover w-full"
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
