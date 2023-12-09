import { SendEventOnLoad } from "$store/components/Analytics.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import AddToCartButtonLinx from "$store/islands/AddToCartButton/linx.tsx";
import AddToCartButtonShopify from "$store/islands/AddToCartButton/shopify.tsx";
import AddToCartButtonVNDA from "$store/islands/AddToCartButton/vnda.tsx";
import AddToCartButtonVTEX from "$store/islands/AddToCartButton/vtex.tsx";
import AddToCartButtonWake from "$store/islands/AddToCartButton/wake.tsx";
import OutOfStock from "$store/islands/OutOfStock.tsx";
import ShippingSimulation from "$store/islands/ShippingSimulation.tsx";
import WishlistButton from "$store/islands/WishlistButton.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import { ProductDetailsPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import ProductSelector from "./ProductVariantSelector.tsx";

interface Props {
  page: ProductDetailsPage | null;
  layout: {
    /**
     * @title Product Name
     * @description How product title will be displayed. Concat to concatenate product and sku names.
     * @default product
     */
    name?: "concat" | "productGroup" | "product";
  };
}

function ProductInfo({ page, layout }: Props) {
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

  const sku = product.sku?.includes("SKU")
    ? product.sku?.split("SKU-")[1]
    : product.sku?.split("/")[0];
  const content = additionalProperty.length > 1
    ? additionalProperty.find(({ name }) => name === "Variações")
    : "";

  return (
    <div class="flex flex-col max-w-[450px]">
      <div class="mt-4 sm:mt-8">
        <div class="hidden md:flex">
          {/* Breadcrumb */}
          <Breadcrumb
            itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
          />
        </div>
        {/* Name */}
        <h1>
          <span class="text-[22px] text-[#151515] font-semibold capitalize">
            {layout?.name === "concat"
              ? `${isVariantOf?.name} ${name}`
              : layout?.name === "productGroup"
              ? isVariantOf?.name
              : name}
          </span>
        </h1>
      </div>
      {/* Infos */}
      <div className="grid grid-cols-2 gap-4">
        {brand?.logo && (
          <div className="flex gap-2">
            <img
              src={brand?.logo}
              alt={`Logo ${brand?.name}`}
              className="w-10 object-contain"
            />
          </div>
        )}
        <div className="flex gap-1 flex-col">
          <span class="font-semibold">Marca:</span>
          <span>{brand?.name}</span>
        </div>
        <div className="flex gap-1 flex-col">
          <span class="font-semibold">Referência:</span>
          <span>{sku}</span>
        </div>
        {content && (
          <div className="flex gap-1 flex-col">
            <span class="font-semibold">Conteúdo:</span>
            <span>{content?.value}</span>
          </div>
        )}
        <div className="flex gap-1 flex-col">
          <span class="font-semibold">Disponilidade:</span>
          <span>
            {availability === "https://schema.org/InStock"
              ? "Em estoque"
              : "Indisponível"}
          </span>
        </div>
      </div>
      {/* Description card */}
      <div class="mt-4 sm:mt-6">
        <span class="text-sm">
          {description && (
            // <details>
            //   <summary class="cursor-pointer">Descrição</summary>
            <>
              <h2 class="text-lg md:text-xl font-semibold">Descrição</h2>
              <div
                class="ml-2 mt-2"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </>
            // </details>
          )}
        </span>
      </div>
      {/* Analytics Event */}
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
}

export default ProductInfo;
