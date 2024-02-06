import { clx } from "$store/sdk/clx.ts";
import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/** @titleBy name */
export interface Seal {
  /** @description Ícone do selo [***Use uma imagem 64x64 e formato webp para melhor performace] */
  icon: ImageWidget;
  /** @description Link do selo */
  href: string;
  /** @description Nome do selo */
  name: HTMLWidget;
}

export interface Props {
  seals?: Seal[];
}

export const Seals = ({ seals = [] }: Props) => {
  if (seals.length === 0) return null;

  return (
    <div class={clx("flex px-4 py-5 w-full", "lg:py-7")}>
      <div class="flex max-w-page-container mx-auto w-full">
        <ul
          class={clx(
            "flex flex-wrap gap-4 items-center justify-center w-full",
            "lg:gap-8",
          )}
        >
          {seals.map(({ icon, href, name }, index) => (
            <li class="flex">
              <a class="flex items-center gap-2" href={href}>
                <Image
                  alt=""
                  class="h-6 object-contain w-6"
                  height={32}
                  src={icon}
                  width={0}
                />

                <div
                  class={clx(
                    "font-normal font-roboto leading-normal text-black text-sm",
                    "[&_strong]:font-bold",
                  )}
                  dangerouslySetInnerHTML={{ __html: name }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Seals;
