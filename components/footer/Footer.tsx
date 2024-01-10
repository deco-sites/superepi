import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

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

export const Footer = ({
  groups,
  logos = [],
  payments,
  seo,
  social,
}: Props) => {
  return (
    <div className="sm:bg-[#f0f0f0] sm:flex sm:px-6 sm:w-full">
      <footer
        className={clx(
          "sm:flex sm:flex-col sm:gap-6 sm:max-w-page-container sm:mx-auto sm:py-6 sm:w-full",
          "md:gap-20 md:py-20",
        )}
      >
        <div
          className={clx(
            "sm:gap-6 sm:grid sm:grid-cols-1 sm:w-full",
            "md:grid-cols-3",
            "lg:grid-cols-6",
          )}
        >
          {groups.map(({
            items,
            name,
          }, index) => (
            <div className="sm:flex sm:flex-col sm:gap-4 sm:items-start sm:max-w-full">
              <h4 className="sm:font-roboto sm:font-bold sm:leading-normal sm:text-base sm:text-black">
                {name}
              </h4>

              <ul className="sm:flex sm:flex-col sm:gap-1 sm:items-start sm:w-full">
                {items.map(({
                  content,
                  href,
                  icon,
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
                          width={0}
                        />
                      )}

                      <span
                        className={clx(
                          "sm:duration-300 sm:ease-in-out sm:font-roboto sm:font-normal sm:leading-normal sm:text-black sm:text-sm sm:transition-colors",
                          "[&_strong]",
                          "sm:hover:text-[#f8a531]",
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
                src,
              }, index) => (
                <li className="sm:flex">
                  <a
                    className="sm:flex"
                    href={href}
                  >
                    <Image
                      alt={name}
                      className="sm:h-10 sm:object-cover sm:w-10"
                      height={40}
                      src={src}
                      width={0}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:flex sm:flex-col sm:gap-4 sm:h-fit sm:items-start sm:w-full">
            <h4 className="sm:font-roboto sm:font-bold sm:leading-normal sm:text-base sm:text-black">
              {payments.name}
            </h4>

            <Image
              alt=""
              className="sm:aspect-[250/130] sm:max-w-[15.625rem] sm:object-contain sm:w-full"
              height={130}
              src="/meios-pagamento.webp"
              width={0}
            />
          </div>
        </div>

        <div
          className={clx(
            "sm:gap-6 sm:grid sm:grid-cols-1 sm:items-center sm:w-full",
            "lg:gap-8 lg:grid-cols-[57.6920%_1fr]",
          )}
        >
          <div
            className="sm:font-normal sm:font-roboto sm:leading-tight sm:text-[#999999] sm:text-sm sm:w-full"
            dangerouslySetInnerHTML={{ __html: seo }}
          />

          {logos.length !== 0 && (
            <div className="sm:flex sm:flex-wrap sm:gap-6 sm:items-center sm:justify-start sm:w-full">
              {logos.map(({
                alt,
                src,
              }, index) => (
                <Image
                  alt={alt}
                  className="sm:flex-shrink-0 sm:h-5 sm:max-w-full sm:object-contain sm:w-auto"
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
