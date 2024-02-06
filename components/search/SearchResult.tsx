import { DepartamentCarousel } from "$store/components/search/DepartamentCarousel/DepartamentCarousel.tsx";
import { Result } from "$store/components/search/Result/Result.tsx";
import TopProducts from "$store/components/search/TopProducts.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Collapsable from "$store/components/ui/Collapsable.tsx";
import { clx } from "$store/sdk/clx.ts";
import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Product, ProductListingPage } from "apps/commerce/types.ts";
import { SectionProps } from "deco/types.ts";
import { globToRegExp } from "std/path/glob.ts";

/** @titleBy name */
export interface CarouselsDepartamentItem {
  /** @description Link do item do carousel */
  href: string;
  /** @description Nome da lista no admin */
  name: string;
  /** @description Imagem do item do carousel [***Use uma resolução de 150x150 para melhor performace] */
  image: ImageWidget;
}

/** @titleBy matcher */
export interface Seo {
  /** @description URL a ser comparada [***Use $ no final para uma busca exata] */
  matcher: string;
  /** @description Texto SEO da página página */
  seo: HTMLWidget;
  /** @description Lista com os carouseis */
  carousel?: CarouselsDepartamentItem[];
  /** @description Lista de produtos do topo da página */
  topProducts?: Product[] | null;
}

export interface Props {
  /** @title Integration */
  page: ProductListingPage | null;
  seos?: Seo[];
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <span>Not Found!</span>
    </div>
  );
}

function SearchResult({ page, seo }: SectionProps<ReturnType<typeof loader>>) {
  if (page === null) {
    return <NotFound />;
  }

  const { breadcrumb } = page;

  return (
    <div class={clx("flex flex-col pb-5 w-full", "lg:pb-7")}>
      <div class="flex p-6 w-full">
        <div
          class={clx(
            "flex justify-center max-w-page-container mx-auto w-full",
            "[&_ul]:!max-w-full [&_ul]:!w-fit",
          )}
        >
          <Breadcrumb
            itemListElement={breadcrumb.itemListElement}
            home={false}
          />
        </div>
      </div>

      <div
        class={clx(
          "bg-[#f0f0f0] border-b-[0.3125rem] border-b-[#F8A531] flex mb-6 px-6 py-10",
          "lg:mb-4 pb-20",
        )}
      >
        <Collapsable class="relative max-w-page-container mx-auto w-full">
          <Collapsable.Trigger class="absolute top-full bg-[#f8a531] py-2 px-3 group text-black">
            <span class="block peer-checked:group-[]:hidden">Leia mais +</span>
            <span class="hidden peer-checked:group-[]:block">Leia menos -</span>
          </Collapsable.Trigger>
          <Collapsable.ContentWrapper
            customTransition
            class="grid-rows-[0.08fr] peer-checked:grid-rows-[1fr]"
          >
            <Collapsable.Content>
              {seo === undefined
                ? (
                  <h1 class="font-bold font-roboto text-[#151515] text-3xl">
                    {breadcrumb.itemListElement.slice(-1)[0].name}
                  </h1>
                )
                : (
                  <div
                    class="plp-seo-text"
                    dangerouslySetInnerHTML={{ __html: seo.seo }}
                  />
                )}
            </Collapsable.Content>
          </Collapsable.ContentWrapper>
        </Collapsable>
      </div>

      {seo?.topProducts && <TopProducts products={seo.topProducts} />}

      {seo?.carousel !== undefined && (
        <div class="flex mb-6 px-6 w-full">
          <DepartamentCarousel carouselDepartament={seo.carousel} />
        </div>
      )}

      <div class="flex px-6 w-full">
        <div class="flex max-w-page-container mx-auto w-full">
          <Result page={page} />
        </div>
      </div>
    </div>
  );
}

export const loader = (props: Props, req: Request) => {
  const { seos = [] } = props;
  const pathname = new URL(req.url).pathname;

  const seo = seos.find(({ matcher }) => globToRegExp(matcher).test(pathname));

  return {
    ...props,
    seo: seo,
  };
};

export default SearchResult;
