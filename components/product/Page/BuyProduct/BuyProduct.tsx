import { ProductDetailsPage } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import ProductSelector from "deco-sites/superepi/components/product/ProductVariantSelector.tsx";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";
import AddToCartButtonLinx from "deco-sites/superepi/islands/AddToCartButton/linx.tsx";
import BtnPayment from "deco-sites/superepi/islands/BtnPayment.tsx";
import OutOfStock from "deco-sites/superepi/islands/OutOfStock.tsx";
import { formatPrice } from "deco-sites/superepi/sdk/format.ts";
import { useOffer } from "deco-sites/superepi/sdk/useOffer.ts";

export type BuyProductProps = {
  page: ProductDetailsPage | null;
};

export const BuyProduct = ({
  page,
}: BuyProductProps) => {
  if (page === null) return null;

  const { product } = page;

  const {
    name,
    isVariantOf,
    offers,
    productID,
    url,
  } = product;

  const {
    availability,
    discountTicket,
    installments,
    listPrice = 0,
    price = 0,
  } = useOffer(offers);

  const discount = price && listPrice ? listPrice - price : 0;
  const productGroupID = isVariantOf?.productGroupID ?? "";

  return (
    <div className="sm:flex sm:flex-col sm:gap-6 sm:w-full">
      <ProductSelector product={product} />

      <div className="sm:flex sm:flex-col sm:w-full">
        <div className="sm:flex sm:flex-col sm:w-full">
          {listPrice > price && (
            <span class="">
              {formatPrice(listPrice, offers?.priceCurrency)}
            </span>
          )}

          {discountTicket !== undefined
            ? (
              <span className="sm:flex sm:flex-col sm:gap-1 sm:font-roboto sm:leading-normal sm:text-[#999999] sm:text-sm sm:w-full">
                <span>
                  à vista com{" "}
                  <strong className="sm:font-bold">
                    5% OFF no Boleto ou PIX
                  </strong>
                </span>

                <strong className="sm:font-black sm:text-[#37cc6d] sm:text-3xl">
                  {formatPrice(discountTicket, offers?.priceCurrency)}
                </strong>

                <span className="sm:font-bold">
                  ou {formatPrice(price, offers?.priceCurrency)} em até{" "}
                  {installments}
                </span>
              </span>
            )
            : (
              <strong className="sm:font-black sm:text-[#37cc6d] sm:text-3xl">
                {formatPrice(discountTicket, offers?.priceCurrency)}
              </strong>
            )}
        </div>
      </div>

      <div class="sm:flex sm:w-full">
        {availability === "https://schema.org/InStock"
          ? (
            <AddToCartButtonLinx
              url={url || ""}
              name={name ?? ""}
              productID={productID}
              productGroupID={productGroupID}
              price={price}
              discount={discount}
            />
          )
          : <OutOfStock productID={productID} />}
      </div>

      {availability === "https://schema.org/InStock" && (
        <div class="sm:flex sm:items-center sm:gap-1">
          <Icon
            className="sm:h-6 sm:w-6"
            id="CreditCard"
          />

          <BtnPayment
            cardPayment={price}
            ticketPayment={discountTicket ?? 0}
          />
        </div>
      )}

      <div class="sm:flex sm:justify-center sm:w-full">
        <Image
          class="sm:h-8 sm:max-w-full sm:object-contain sm:w-auto"
          src="https://seal.siteblindado.com/www.superepi.com.br/seal.png"
          alt="Logo siteblindado"
          width={120}
          height={32}
        />
      </div>
    </div>
  );
};

export default BuyProduct;
