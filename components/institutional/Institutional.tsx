import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { SectionProps } from "deco/types.ts";
import { Menu } from "deco-sites/superepi/components/institutional/Menu/Menu.tsx";
import Breadcrumb from "deco-sites/superepi/components/ui/Breadcrumb.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

/** @titleBy name */
export interface Article {
  /** @description URL a ser comparada [***Use $ no final para uma busca exata] */
  matcher: string;
  /** @description Nome do artigo */
  name: string;
  /** @description Conteúdo HTML do artigo */
  content?: HTMLWidget;
}

/** @titleBy name */
export interface Content {
  /** @description Conteúdo HTML */
  content: "AB" | "BC";
  /** @description Nome de identificação */
  name: string;
}

/** @titleBy name */
export interface Image {
  /** @description Texto alternativo da imagem */
  alt: string;
  /** @description URL da imagem */
  src: ImageWidget;
  /** @description Tamanho da largura natural da imagem */
  width: number;
  /** @description Tamanho da altura natural da imagem */
  height: number;
  /** @description Nome de identificação */
  name: string;
}

export interface RichText {
  /** @description Conteúdo de texto */
  content: HTMLWidget;
}

export interface Props {
  articles: Article[];
}

export const loader = (props: Props, req: Request) => {
  const { articles = [] } = props;
  const pathname = new URL(req.url).pathname;

  const article = articles.find(({ matcher }) =>
    new RegExp(`^${matcher}`).test(pathname)
  );

  return {
    ...props,
    article: article,
  };
};

export const Institutional = ({
  article,
  articles = [],
}: SectionProps<ReturnType<typeof loader>>) => {
  return (
    <div className="sm:flex sm:w-full">
      <div
        className={clx(
          "sm:bg-[#f0f0f0] sm:flex sm:flex-col sm:pb-6 sm:pt-12 sm:px-6 sm:w-full",
          "lg:py-20",
        )}
      >
        <div className="sm:flex sm:flex-col sm:max-w-page-container sm:mx-auto sm:w-full">
          <Breadcrumb
            itemListElement={[
              {
                "@type": "ListItem",
                item: "/",
                position: 0,
                name: "Página Inicial",
              },
              {
                "@type": "ListItem",
                item: "/",
                position: 1,
                name: article?.name,
              },
            ]}
          />

          <h2 className="sm:font-black sm:font-roboto sm:mb-12 sm:mt-6 sm:text-[#151515] sm:text-2xl sm:-tracking-[0.078125rem] sm:uppercase">
            {article?.name}
          </h2>

          <div
            className={clx(
              "sm:gap-4 sm:grid sm:grid-cols-1 sm:items-start sm:w-full",
              "lg:gap-10 lg:grid-cols-[18.75rem_1fr]",
            )}
          >
            <Menu
              article={article}
              articles={articles}
            />

            <div
              className={clx(
                "sm:bg-white sm:flex sm:flex-col sm:font-normal sm:font-roboto sm:p-6 sm:shadow-[0_0_0.625rem_#00000033] sm:text-sm sm:text-black sm:w-full",
                "sm:[&_a]:font-black sm:[&_a]:text-[#f39c12]",
                "sm:[&_h2]:font-black sm:[&_h2]:text-base",
                "sm:[&_img]:h-auto sm:[&_img]:w-full",
                "sm:[&_ul]:flex sm:[&_ul]:flex-col sm:[&_ul]:gap-2 sm:[&_ul]:pl-6 sm:[&_ul]:w-full lg:[&_ul]:pl-12",
                "sm:[&_li]:flex sm:[&_li]:flex-col",
                "lg:p-10",
              )}
              dangerouslySetInnerHTML={{ __html: article?.content ?? "" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institutional;
