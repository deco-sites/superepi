import { Product as ProductType } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";
import { formatPrice } from "deco-sites/superepi/sdk/format.ts";
import { useOffer } from "deco-sites/superepi/sdk/useOffer.ts";

export type ProductProps = {
  product: ProductType;
};

export const Product = ({
  product
}: ProductProps) => {
  const {
    brand,
    image,
    offers,
    url
  } = product;

  const {
    installments,
    listPrice = 0,
    price = 0
  } = useOffer(offers);

  const discount = listPrice !== price;
  console.log(product);

  return (
    <article className="group sm:duration-300 sm:ease-in-out sm:flex sm:flex-col sm:gap-4 sm:h-full sm:p-4 sm:relative sm:transition-shadow sm:w-full" >
      <Image
        alt=""
        className="sm:aspect-square sm:object-cover sm:w-full"
        height={284}
        src={image?.[0].url ?? ""}
        width={284}
      />

      <div className="sm:flex sm:flex-col sm:gap-6 sm:h-full sm:w-full">
        <div className="sm:flex sm:flex-col sm:w-full">
          {brand !== undefined && (
            <span className="sm:font-medium sm:font-roboto sm:leading-normal sm:text-[#999999] sm:text-xs">
              {brand.name}
            </span>
          )}

          <h3 className="sm:font-medium sm:font-roboto sm:leading-normal sm:text-sm sm:text-black">
            {product.name}
          </h3>
        </div>

        <div className="sm:flex sm:flex-col sm:items-start sm:justify-center sm:mt-auto sm:w-full">
          <strong className="sm:font-roboto sm:leading-normal sm:font-medium sm:text-[#151515] sm:text-2xl">
            {formatPrice(listPrice)} <span className="sm:font-black sm:leading-normal sm:text-base">no Pix/Boleto</span>
          </strong>

          <span>
            ou 3x de {formatPrice(listPrice / 3)}
          </span>
        </div>
      </div>

      <a
        className={clx(
          "sm:absolute sm:bg-[#ffffffcc] sm:duration-300 sm:cursor-pointer sm:ease-in-out sm:flex sm:flex-col sm:gap-2 sm:font-normal sm:font-roboto sm:leading-normal sm:h-[calc(100%-0.625rem)] sm:items-center sm:justify-center sm:left-1/2 sm:opacity-0 sm:pointer-events-none sm:text-sm sm:text-[#151515] sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:transition-opacity sm:w-[calc(100%-0.625rem)] sm:z-10",
          "sm:hover:opacity-100 sm:group-hover:pointer-events-auto sm:hover:shadow-[0_0_0.625rem_0_#00000033]"
        )}
        href={url}
      >
        <div className="sm:bg-[#f8a531] sm:h-16 sm:flex sm:items-center sm:justify-center sm:text-white sm:w-16">
          <Icon
            className="sm:h-8 sm:w-8"
            id="Search"
          />
        </div>

        <span>
          Comprar
        </span>
      </a>
    </article >
  );
};

export default Product;