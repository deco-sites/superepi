import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Product, ProductListingPage } from "apps/commerce/types.ts";
import { SectionProps } from "deco/types.ts";
import { DepartamentCarousel } from "deco-sites/superepi/components/search/DepartamentCarousel/DepartamentCarousel.tsx";
import { Result } from "deco-sites/superepi/components/search/Result/Result.tsx";
import Breadcrumb from "deco-sites/superepi/components/ui/Breadcrumb.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

/** @titleBy name */
export interface CarouselsDepartamentItem {
  /** @description Link do item do carousel */
  href: string;
  /** @description Nome da lista no admin */
  name: string;
  /** @description Imagem do item do carousel [***Use uma resolução de 150x150 para melhor performace] */
  image: ImageWidget;
};

/** @titleBy matcher */
export interface CarouselsDepartament {
  /** @description URL a ser comparada [***Use $ no final para uma busca exata] */
  matcher: string;
  /** @description Lista com os carouseis */
  carousel: CarouselsDepartamentItem[];
};

/** @titleBy matcher */
export interface Seo {
  /** @description URL a ser comparada [***Use $ no final para uma busca exata] */
  matcher: string;
  /** @description Texto SEO da página página */
  seo: HTMLWidget
};

export interface Props {
  /** @title Integration */
  page: ProductListingPage | null;
  seos?: Seo[];
  carouselsDepartament?: CarouselsDepartament[];
};

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <span>Not Found!</span>
    </div>
  );
}

function SearchResult({
  carouselDepartament,
  page,
  seo
}: SectionProps<ReturnType<typeof loader>>) {
  if (page === null) {
    return <NotFound />;
  }

  const { breadcrumb } = page;

  return (
    <div
      className={clx(
        "sm:flex sm:flex-col sm:pb-5 sm:w-full",
        "lg:pb-7",
      )}
    >
      <div className="sm:flex sm:p-6 sm:w-full">
        <div
          className={clx(
            "sm:flex sm:justify-center sm:max-w-page-container sm:mx-auto sm:w-full",
            "[&_ul]:!max-w-full [&_ul]:!w-fit",
          )}
        >
          <Breadcrumb itemListElement={breadcrumb.itemListElement} />
        </div>
      </div>

      <div
        className={clx(
          "sm:bg-[#f0f0f0] sm:border-b-[0.3125rem] sm:border-b-[#F8A531] sm:flex sm:mb-6 sm:px-6 sm:py-10",
          "lg:mb-12",
        )}
      >
        <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
          {seo === undefined ? (
            <h1 className="sm:font-bold sm:font-roboto sm:text-[#151515] sm:text-3xl">
              {breadcrumb.itemListElement.slice(-1)[0].name}
            </h1>
          ) : (
            <div
              className={clx(
                "sm:font-roboto sm:font-normal sm:text-[#151515] sm:text-sm",
                "sm:[&_h1]:font-bold sm:[&_h1]:font-roboto sm:[&_h1]:text-[#151515] sm:[&_h1]:text-3xl",
                "sm:[&_strong]:font-bold sm:[&_a]:text-[#f8a531]"
              )}
              dangerouslySetInnerHTML={{ __html: seo.seo }}
            />
          )}
        </div>
      </div>

      {carouselDepartament !== undefined && (
        <div className="sm:flex sm:mb-6 sm:px-6 sm:w-full">
          <DepartamentCarousel carouselDepartament={carouselDepartament} />
        </div>
      )}

      <div className="sm:flex sm:px-6 sm:w-full">
        <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
          <Result page={page} />
        </div>
      </div>
    </div>
  );
}

export const loader = (props: Props, req: Request) => {
  const {
    carouselsDepartament = [],
    seos = []
  } = props;
  const pathname = new URL(req.url).pathname;

  const carouselDepartament = carouselsDepartament.find(({ matcher }) => new RegExp(`^${matcher}`).test(pathname));
  const seo = seos.find(({ matcher }) => new RegExp(`^${matcher}`).test(pathname));

  return {
    ...props,
    carouselDepartament: carouselDepartament,
    seo: seo
  };
};

export default SearchResult;
