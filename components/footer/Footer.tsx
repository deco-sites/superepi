import { clx } from "$store/sdk/clx.ts";
import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Group {
  /** @description Nome do grupo */
  name: string;
  /** @description Lista ocm os items */
  items: GroupItem[];
}

/** @titleBy content */
export interface GroupItem {
  /** @description Ícone que fica ao lado do texto [***Use uma resolução de 32x32 e formato webp para melhor performace] */
  icon?: ImageWidget;
  /** @description Conteúdo de texto */
  content: HTMLWidget;
  /** @description Link do item */
  href: string;
}

/** @titleBy alt */
export interface Logo {
  /** @description Texto alternativo do item */
  alt: string;
  /** @description URL da imagem do item */
  src: ImageWidget;
}

export interface Payments {
  /** @description Título do bloco */
  name: string;
  /** @description Lista com os items do bloco */
  items: PaymentsItem[];
}

/** @titleBy alt */
export interface PaymentsItem {
  /** @description Texto alternativo do item */
  alt: string;
  /** @description Define o tamanho do item */
  size: "big" | "small";
  /** @description URL da imagem do item */
  src: ImageWidget;
}

export interface Social {
  /** @description Título do blogo */
  name: string;
  /** @description Descrição do bloco */
  description: string;
  /** @description Lista com os ícones do bloco */
  icons: SocialIcons[];
}

/** @titleBy name */
export interface SocialIcons {
  /** @description Link do social */
  href: string;
  /** @description Nome da rede social */
  name: string;
  /** @description Imagem do ícone [***Use uma resolução de 64x64 e formato webp para melhor performace] */
  src: ImageWidget;
}

export interface Props {
  /** @description Lista de blocos */
  groups: Group[];
  /** @description Lista com as logos de copyrights */
  logos: Logo[];
  /** @description Bloco dos links socials */
  social: Social;
  /** @description Bloco dos pagamentos */
  payments: Payments;
  /** @description Texto seo do footer */
  seo: HTMLWidget;
}

export const Footer = (
  { groups, logos = [], payments, seo, social }: Props,
) => {
  return (
    <div class="bg-[#f0f0f0] flex px-6 w-full">
      <footer
        class={clx(
          "flex flex-col gap-6 max-w-page-container mx-auto py-6 w-full",
          "md:gap-20 md:py-20",
        )}
      >
        <div
          class={clx(
            "gap-6 grid grid-cols-1 w-full",
            "md:grid-cols-3",
            "lg:grid-cols-6",
          )}
        >
          {groups.map(({ items, name }, index) => (
            <div class="flex flex-col gap-4 items-start max-w-full">
              <h4 class="font-roboto font-bold leading-normal text-base text-black">
                {name}
              </h4>

              <ul class="flex flex-col gap-1 items-start w-full">
                {items.map(({ content, href, icon }, jindex) => (
                  <li class="flex" key={jindex}>
                    <a class="flex items-center" href={href}>
                      {icon !== undefined && (
                        <Image
                          alt=""
                          class="flex-shrink-0 h-5 w-5"
                          height={20}
                          src={icon}
                          width={0}
                        />
                      )}

                      <span
                        class={clx(
                          "duration-300 ease-in-out font-roboto font-normal leading-normal text-black text-sm transition-colors",
                          "[&_strong]",
                          "hover:text-[#f8a531]",
                        )}
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div class="flex flex-col gap-4 items-start w-full">
            <h4 class="font-roboto font-bold leading-normal text-base text-black">
              {social.name}
            </h4>

            <p class="font-roboto font-normal leading-tight text-sm text-black">
              {social.description}
            </p>

            <ul class="flex flex-wrap gap-3 items-center w-full">
              {social.icons.map(({ href, name, src }, index) => (
                <li class="flex">
                  <a class="flex" href={href}>
                    <Image
                      alt={name}
                      class="h-10 object-cover w-10"
                      height={40}
                      src={src}
                      width={0}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div class="flex flex-col gap-4 h-fit items-start w-full">
            <h4 class="font-roboto font-bold leading-normal text-base text-black">
              {payments.name}
            </h4>

            <Image
              alt=""
              class="aspect-[250/130] max-w-[15.625rem] object-contain w-full"
              height={130}
              src="/meios-pagamento.webp"
              width={0}
            />
          </div>
        </div>

        <div
          class={clx(
            "gap-6 grid grid-cols-1 items-center w-full",
            "lg:gap-8 lg:grid-cols-[57.6920%_1fr]",
          )}
        >
          <div
            class="font-normal font-roboto leading-tight text-[#999999] text-sm w-full"
            dangerouslySetInnerHTML={{ __html: seo }}
          />

          {logos.length !== 0 && (
            <div class="flex flex-wrap gap-6 items-center justify-start w-full">
              {logos.map(({ alt, src }, index) => (
                <Image
                  alt={alt}
                  class="flex-shrink-0 h-5 max-w-full object-contain w-auto"
                  height={0}
                  src={src}
                  width={500}
                />
              ))}
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
