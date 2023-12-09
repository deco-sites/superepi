import {
  ImageWidget,
  HTMLWidget
} from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export interface Group {
  /** @description Nome do grupo */
  name: string;
  /** @description Lista ocm os items */
  items: GroupItem[];
};

/** @titleBy content */
export interface GroupItem {
  /** @description Ícone que fica ao lado do texto [***Use uma resolução de 32x32 e formato webp para melhor performace] */
  icon?: ImageWidget;
  /** @description Conteúdo de texto */
  content: HTMLWidget;
  /** @description Link do item */
  href: string;
};

export interface Payments {
  /** @description Título do bloco */
  name: string;
  /** @description Lista com os items do bloco */
  items: PaymentsItem[];
};

/** @titleBy alt */
export interface PaymentsItem {
  /** @description Texto alternativo do item */
  alt: string;
  /** @description Define o tamanho do item */
  size: "big" | "small";
  /** @description URL da imagem do item */
  src: ImageWidget;
};

export interface Social {
  /** @description Título do blogo */
  name: string;
  /** @description Descrição do bloco */
  description: string;
  /** @description Lista com os ícones do bloco */
  icons: SocialIcons[];
};

/** @titleBy name */
export interface SocialIcons {
  /** @description Link do social */
  href: string;
  /** @description Nome da rede social */
  name: string;
  /** @description Imagem do ícone [***Use uma resolução de 64x64 e formato webp para melhor performace] */
  src: ImageWidget;
};

export interface Props {
  /** @description Lista de blocos */
  groups: Group[];
  /** @description Bloco dos links socials */
  social: Social;
  /** @description Bloco dos pagamentos */
  payments: Payments;
  /** @description Texto seo do footer */
  seo: HTMLWidget;
};

export const Footer = ({
  groups,
  payments,
  seo,
  social
}: Props) => {
  return (
    <div className="sm:bg-[#f0f0f0] sm:flex sm:px-6 sm:w-full">
      <footer className={clx(
        "sm:flex sm:flex-col sm:gap-6 sm:max-w-page-container sm:mx-auto sm:py-6 sm:w-full",
        "md:gap-20 md:py-20"
      )}>
        <div className={clx(
          "sm:gap-8 sm:grid sm:grid-cols-1 sm:w-full",
          "smA:grid-cols-2",
          "md:grid-cols-3",
          "mdA:grid-cols-4",
          "lg:grid-cols-5"
        )}>
          {groups.map(({
            items,
            name
          }, index) => (
            <div
              className="sm:flex sm:flex-col sm:gap-4 sm:items-start sm:max-w-full"
              key={index}
            >
              <h4 className="sm:font-roboto sm:font-bold sm:leading-normal sm:text-base sm:text-black">
                {name}
              </h4>

              <ul className="sm:flex sm:flex-col sm:gap-1 sm:items-start sm:w-full">
                {items.map(({
                  content,
                  href,
                  icon
                }, jindex) => (
                  <li
                    className="sm:flex"
                    key={jindex}
                  >
                    <a
                      className="sm:flex sm:items-center"
                      href={href}
                    >
                      {icon !== undefined && (
                        <Image
                          alt=""
                          className="sm:flex-shrink-0 sm:h-5 sm:w-5"
                          height={20}
                          src={icon}
                          width={20}
                        />
                      )}

                      <span
                        className={clx(
                          "sm:duration-300 sm:ease-in-out sm:font-roboto sm:font-normal sm:leading-normal sm:text-black sm:text-sm sm:transition-colors",
                          "[&_strong]",
                          "sm:hover:text-[#f8a531]"
                        )}
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:flex sm:flex-col sm:gap-4 sm:items-start sm:w-full">
            <h4 className="sm:font-roboto sm:font-bold sm:leading-normal sm:text-base sm:text-black">
              {social.name}
            </h4>

            <p className="sm:font-roboto sm:font-normal sm:leading-tight sm:text-sm sm:text-black">
              {social.description}
            </p>

            <ul className="sm:flex sm:flex-wrap sm:gap-3 sm:items-center sm:w-full">
              {social.icons.map(({
                href,
                name,
                src
              }, index) => (
                <li
                  className="sm:flex"
                  key={index}
                >
                  <a
                    className="sm:flex"
                    href={href}
                  >
                    <Image
                      alt={name}
                      className="sm:h-10 sm:object-cover sm:w-10"
                      height={40}
                      src={src}
                      width={40}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:flex sm:flex-col sm:gap-4 sm:items-start sm:w-full">
            <h4 className="sm:font-roboto sm:font-bold sm:leading-normal sm:text-base sm:text-black">
              {payments.name}
            </h4>

            <ul className="sm:auto-rows-[1.75rem] sm:gap-3 sm:grid sm:grid-cols-5 sm:w-full">
              {payments.items.map(({
                alt,
                size,
                src
              }, index) => (
                <div
                  className={clx(
                    size === "small" && "sm:col-span-1 sm:row-span-1",
                    size === "big" && "sm:col-span-5 sm:row-span-2"
                  )}
                  key={index}
                >
                  <Image
                    alt={alt}
                    className="sm:h-full sm:object-contain sm:w-full"
                    height={108}
                    src={src}
                    width={192}
                  />
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="sm:font-normal sm:font-roboto sm:leading-tight sm:max-w-[46.875rem] sm:text-[#999999] sm:text-sm sm:w-full"
          dangerouslySetInnerHTML={{ __html: seo }}
        />
      </footer>
    </div>
  );
};

export default Footer;