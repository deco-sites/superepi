import { Menu } from "$store/components/institutional/Menu/Menu.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import { clx } from "$store/sdk/clx.ts";
import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { SectionProps } from "deco/types.ts";

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
    <div class="flex w-full">
      <div
        class={clx(
          "bg-[#f0f0f0] flex flex-col pb-6 pt-12 px-6 w-full",
          "lg:py-20",
        )}
      >
        <div class="flex flex-col max-w-page-container mx-auto w-full">
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

          <h2 class="font-black font-roboto mb-12 mt-6 text-[#151515] text-2xl -tracking-[0.078125rem] uppercase">
            {article?.name}
          </h2>

          <div
            class={clx(
              "gap-4 grid grid-cols-1 items-start w-full",
              "lg:gap-10 lg:grid-cols-[18.75rem_1fr]",
            )}
          >
            <Menu article={article} articles={articles} />

            <div
              class={clx(
                "bg-white flex flex-col font-normal font-roboto p-6 shadow-[0_0_0.625rem_#00000033] text-sm text-black w-full",
                "[&_a]:font-black [&_a]:text-[#f39c12]",
                "[&_h2]:font-black [&_h2]:text-base",
                "[&_img]:h-auto [&_img]:w-full",
                "[&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-6 [&_ul]:w-full lg:[&_ul]:pl-12",
                "[&_li]:flex [&_li]:flex-col",
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
