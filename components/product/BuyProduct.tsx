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
import BtnPayment from "$store/islands/BtnPayment.tsx"
import Icon from "$store/components/ui/Icon.tsx";

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

function BuyProduct({ page, layout }: Props) {
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

  return (
    <div class="flex flex-col">
      {/* Sku Selector */}
      <div class="mt-4 sm:mt-6">
        <ProductSelector product={product} />
      </div>
      {/* Prices */}
      <div class="mt-4">
        <div class="flex flex-col gap-2 items-start justify-center">
          {(listPrice ?? 0) > price && (
            <span class="line-through text-base-300 text-xs">
              {formatPrice(listPrice, offers?.priceCurrency)}
            </span>
          )}
          { discountTicket ? (
            <span class="font-semibold text-xl md:text-3xl text-[#37CC6D] flex flex-col gap-2 items-start">
            <span class="text-sm text-base-300 text-medium">à vista com <strong class="text-base-300">5% OFF no Boleto ou PIX</strong></span>
            {formatPrice(discountTicket, offers?.priceCurrency)}
          </span>
          ) : (
            <span class="font-semibold text-xl text-secondary">
              {formatPrice(price, offers?.priceCurrency)}
            </span>
          ) }
        </div>
        <span class="text-sm text-base-300">
          { discountTicket ? `ou ${formatPrice(price, offers?.priceCurrency)} em até ${installments} ` : installments}
        </span>
      </div>
      {/* Add to Cart and Favorites button */}
      <div class="mt-4 sm:mt-10 flex flex-col gap-2">
        {availability === "https://schema.org/InStock"
          ? (
            <>
              {platform === "vtex" && (
                <>
                  <AddToCartButtonVTEX
                    url={url || ""}
                    name={name}
                    productID={productID}
                    productGroupID={productGroupID}
                    price={price}
                    discount={discount}
                    seller={seller}
                  />
                  <WishlistButton
                    variant="full"
                    productID={productID}
                    productGroupID={productGroupID}
                  />
                </>
              )}
              {platform === "wake" && (
                <AddToCartButtonWake
                  url={url || ""}
                  name={name}
                  productID={productID}
                  productGroupID={productGroupID}
                  price={price}
                  discount={discount}
                />
              )}
              {platform === "linx" && (
                <AddToCartButtonLinx
                  url={url || ""}
                  name={name}
                  productID={productID}
                  productGroupID={productGroupID}
                  price={price}
                  discount={discount}
                />
              )}
              {platform === "vnda" && (
                <AddToCartButtonVNDA
                  url={url || ""}
                  name={name}
                  productID={productID}
                  productGroupID={productGroupID}
                  price={price}
                  discount={discount}
                  additionalProperty={additionalProperty}
                />
              )}
              {platform === "shopify" && (
                <AddToCartButtonShopify
                  url={url || ""}
                  name={name}
                  productID={productID}
                  productGroupID={productGroupID}
                  price={price}
                  discount={discount}
                />
              )}
            </>
          )
          : <OutOfStock productID={productID} />}
      </div>
      {availability === "https://schema.org/InStock" && (
        <div class="flex items-center mt-8">
          <Icon id="CreditCards" size={30} />
          <BtnPayment cardPayment={price} ticketPayment={discountTicket} />
        </div>
      )}
      {/* Shipping Simulation */}
      <div class="mt-8">
        {platform === "vtex" && (
          <ShippingSimulation
            items={[{
              id: Number(product.sku),
              quantity: 1,
              seller: seller,
            }]}
          />
        )}
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

export default BuyProduct;
