import PaymentMethods from "$store/components/product/Page/PaymentMethods.tsx";
import Shipping from "$store/components/product/Page/Shipping.tsx";
import ProductSelector from "$store/components/product/ProductVariantSelector.tsx";
import useModal from "$store/hooks/useModal.tsx";
import AddToCartButtonLinx from "$store/islands/AddToCartButton/linx.tsx";
import OutOfStock from "$store/islands/OutOfStock.tsx";
import { rawProduct } from "$store/mocked-pdp.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { Product } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";

export type BuyProductProps = {
  product: Product;
};

export const BuyProduct = ({ product }: BuyProductProps) => {
  const { name = "", isVariantOf, offers, productID, url = "", sku } = product;

  const {
    availability,
    discountTicket,
    installments,
    listPrice = 0,
    price = 0,
  } = useOffer(offers);

  const fichaTecnicaModal = useModal();
  const tabelaDeMedidasModal = useModal();

  const discount = price && listPrice ? listPrice - price : 0;
  const productGroupID = isVariantOf?.productGroupID ?? "";
  const isAvailable = availability === "https://schema.org/InStock";

  const fichaTecnica = rawProduct.Model.ExtendedMetadatas.find(
    (i) => i.Name === "Ficha Técnica",
  )?.Value;

  const tabelaDeMedidas = rawProduct.Model.Descriptions.find((i) =>
    i.Name === "Tabela"
  )?.Value;

  return (
    <>
      {fichaTecnica && (
        <fichaTecnicaModal.Modal class="fixed inset-0 z-50 bg-black/80 w-full h-full justify-center items-center">
          <fichaTecnicaModal.Toggle class="w-full h-full absolute inset-0" />
          <div class="p-5 bg-[#f4f4f4] relative">
            <fichaTecnicaModal.Toggle class="absolute top-0 right-0 w-9 h-9 bg-[#ffab00] hover:bg-[#333] transition-colors text-3xl font-bold text-white flex justify-center items-center cursor-pointer">
              ×
            </fichaTecnicaModal.Toggle>
            <iframe
              src={fichaTecnica}
              width={640}
              height={780}
              title={product.name}
              loading="lazy"
            />
          </div>
        </fichaTecnicaModal.Modal>
      )}
      {tabelaDeMedidas && (
        <tabelaDeMedidasModal.Modal class="fixed inset-0 z-50 bg-black/80 w-full h-full justify-center items-center">
          <tabelaDeMedidasModal.Toggle class="w-full h-full absolute inset-0" />
          <div class="p-10 bg-[#f4f4f4] relative w-full max-w-[1000px]">
            <tabelaDeMedidasModal.Toggle class="absolute top-0 right-0 w-9 h-9 bg-[#ffab00] hover:bg-[#333] transition-colors text-3xl font-bold text-white flex justify-center items-center cursor-pointer">
              ×
            </tabelaDeMedidasModal.Toggle>
            <div
              dangerouslySetInnerHTML={{ __html: tabelaDeMedidas }}
              class="flex justify-center items-center"
            />
          </div>
        </tabelaDeMedidasModal.Modal>
      )}

      <div class="flex flex-col gap-6 w-full lg:max-w-[29%]">
        <div>
          <ProductSelector product={product} />

          {tabelaDeMedidas && (
            <tabelaDeMedidasModal.Toggle class="flex items-center gap-2 cursor-pointer w-full mt-2.5">
              <img
                src="/image/tabela-de-medidas.avif"
                alt="Tabela de Medidas"
                width={16}
                height={20}
                loading="lazy"
              />
              <span class="underline text-[#999999] text-xs">
                Tabela de Medidas
              </span>
            </tabelaDeMedidasModal.Toggle>
          )}
        </div>

        <div class="flex flex-col w-full">
          <div class="flex flex-col w-full">
            {listPrice > price && (
              <span class="">
                {formatPrice(listPrice, offers?.priceCurrency)}
              </span>
            )}

            {discountTicket !== undefined
              ? (
                <span class="flex flex-col gap-1 font-roboto leading-normal text-[#999999] text-sm w-full">
                  <span>
                    à vista com{" "}
                    <strong class="font-bold">5% OFF no Boleto ou PIX</strong>
                  </span>

                  <strong class="font-black text-[#37cc6d] text-3xl">
                    {formatPrice(discountTicket, offers?.priceCurrency)}
                  </strong>

                  <span class="font-bold text-[#37cc6d]">
                    ou {formatPrice(price, offers?.priceCurrency)} em até{" "}
                    {installments}
                  </span>
                </span>
              )
              : (
                <strong class="font-black text-[#37cc6d] text-3xl">
                  {formatPrice(discountTicket, offers?.priceCurrency)}
                </strong>
              )}
          </div>
        </div>

        <div class="flex w-full">
          {isAvailable
            ? (
              <AddToCartButtonLinx
                url={url}
                name={name}
                productID={productID}
                productGroupID={productGroupID}
                price={price}
                discount={discount}
                variant="PDP"
              />
            )
            : <OutOfStock productID={productID} />}
        </div>

        <div class="flex items-center">
          {isAvailable && <PaymentMethods sku={sku} productId={productID} />}

          {fichaTecnica && (
            <fichaTecnicaModal.Toggle class="flex items-center gap-2 cursor-pointer w-full">
              <img
                src="/image/icon-ficha-tecnica.avif"
                alt="Formas de pagamento"
                width={23}
                height={21}
                loading="lazy"
              />
              <span class="underline text-[#999999] text-xs">
                Ficha Técnica
              </span>
            </fichaTecnicaModal.Toggle>
          )}
        </div>

        <Shipping sku={sku} productId={productID} />

        <div class="flex justify-center w-full">
          <Image
            class="h-8 max-w-full object-contain w-auto"
            src="https://seal.siteblindado.com/www.superepi.com.br/seal.png"
            alt="Logo siteblindado"
            width={120}
            height={32}
          />
        </div>
      </div>
    </>
  );
};

export default BuyProduct;
