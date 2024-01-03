import { SendEventOnLoad } from "$store/components/Analytics.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import { ProductDetailsPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import ProductSelector from "deco-sites/superepi/components/product/ProductVariantSelector.tsx";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";

interface Props {
  page: ProductDetailsPage | null;
}

export const ProductInfo = ({ page }: Props) => {
  const platform = usePlatform();

  if (page === null) {
    throw new Error("Missing Product Details Page Info");
  }

  const {
    breadcrumbList,
    product,
  } = page;
  const {
    url,
    productID,
    offers,
    name = "",
    gtin,
    isVariantOf,
    additionalProperty = [],
    brand = {},
  } = product;
  const description = product.description || isVariantOf?.description;
  const {
    price = 0,
    listPrice,
    seller = "1",
    discountTicket,
    installments,
    availability,
  } = useOffer(offers);
  const productGroupID = isVariantOf?.productGroupID ?? "";
  const discount = price && listPrice ? listPrice - price : 0;

  const CA = product.name?.split("Ca ")[1]?.split(" ")[0];

  const sku = product.sku?.includes("SKU")
    ? product.sku?.split("SKU-")[1]
    : product.sku?.split("/")[0];
  const content = additionalProperty.length > 1
    ? additionalProperty.find(({ name }) => name === "Variações")
    : "";

  return (
    <div class="sm:flex sm:flex-col sm:gap-5 sm:w-full">
      <h1 className="sm:font-roboto sm:font-bold sm:leading-tight sm:text-[#151515] sm:text-xl sm:-tracking-[0.0625rem]">
        {product.isVariantOf?.name}
      </h1>

      <ul className="sm:gap-3 sm:grid sm:grid-cols-2 sm:w-full">
        {(content !== undefined && content !== "") && (
          <li className="sm:font-roboto sm:font-normal sm:leading-normal sm:text-xs sm:text-[#151515]">
            <strong className="sm:font-bold">Conteúdo:</strong> {content.value}
          </li>
        )}

        <li className="sm:font-roboto sm:font-normal sm:leading-normal sm:text-xs sm:text-[#151515]">
          <strong className="sm:font-bold">Marca:</strong> {product.brand?.name}
        </li>

        <li className="sm:font-roboto sm:font-normal sm:leading-normal sm:text-xs sm:text-[#151515]">
          <strong className="sm:font-bold">Referência:</strong> {product.sku}
        </li>

        <li className="sm:font-roboto sm:font-normal sm:leading-normal sm:text-xs sm:text-[#151515]">
          <strong className="sm:font-bold">Disponibilidade:</strong>{" "}
          {availability === "https://schema.org/InStock"
            ? "Em estoque"
            : "Indisponível"}
        </li>
      </ul>

      {(product.isVariantOf?.description !== undefined &&
        product.isVariantOf.description !== "") && (
        <div
          className="sm:font-normal sm:font-roboto sm:leading-normal sm:text-sm sm:text-[#212529]"
          dangerouslySetInnerHTML={{ __html: product.isVariantOf?.description }}
        />
      )}

      {CA !== undefined && (
        <div className="sm:flex sm:flex-wrap sm:gap-2 sm:items-center sm:justify-start sm:w-full">
          <strong className="sm:font-bold sm:font-roboto sm:leading-normal sm:text-sm sm:text-[#151515]">
            CA: {CA}
          </strong>

          <a
            className="sm:border-[#ffab00] sm:border-[0.125rem] sm:flex sm:font-roboto sm:font-bold sm:leading-normal sm:items-center sm:justify-center sm:min-h-8 sm:px-1 sm:text-sm sm:text-[#333]"
            href={`https://consultaca.com/${CA}`}
            target="_blank"
          >
            Consultar CA
          </a>

          <a
            aria-label="Compartilhar no Facebook"
            className="sm:bg-[#007bff] sm:flex sm:h-fit sm:text-white sm:w-fit"
            href={`https://www.addtoany.com/add_to/facebook?linkurl=${window.location}`}
          >
            <Icon
              className="sm:h-8 sm:w-8"
              id="Facebook"
            />
          </a>
        </div>
      )}

      <SendEventOnLoad
        event={{
          name: "view_item",
          params: {
            items: [
              mapProductToAnalyticsItem({
                product,
                breadcrumbList,
                price,
                listPrice,
              }),
            ],
          },
        }}
      />
    </div>
  );
};

export default ProductInfo;
