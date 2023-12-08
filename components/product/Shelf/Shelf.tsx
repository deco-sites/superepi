import { ImageWidget } from "apps/admin/widgets.ts";
import { Product } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx"
import { Product as ProductComponent } from "deco-sites/superepi/components/product/ProductCard.tsx";;
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";
import Slider from "deco-sites/superepi/components/ui/Slider.tsx";
import SliderJS from "deco-sites/superepi/components/ui/SliderJS.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";
import { useId } from "deco-sites/superepi/sdk/useId.ts";

export interface Props {
  /** @description Ícone que fica ao lado do título */
  icon?: ImageWidget;
  /** @description Título da sessão */
  heading: string;
  /** @description Listagem das tabs */
  products: Product[] | null;
};

export const Shelf = ({
  icon,
  heading,
  products = []
}: Props) => {
  const id = useId();

  if (products === null || products.length === 0) return null;

  return (
    <div
      className={clx(
        "sm:flex sm:px-6 sm:py-5 sm:w-full",
        "lg:py-7"
      )}
      id={id}
    >
      <div className="sm:flex sm:flex-col sm:gap-8 sm:max-w-page-container sm:mx-auto sm:w-full">
        <div className="sm:flex sm:gap-8 sm:items-center sm:justify-between sm:w-full">
          <div className="sm:flex sm:gap-4 sm:w-full">
            {icon !== undefined && (
              <Image
                alt=""
                className="sm:flex-shrink-0 sm:h-8 sm:object-cover sm:w-8"
                height={32}
                src={icon}
                width={32}
              />
            )}

            <h2 className={clx(
              "sm:font-roboto sm:font-medium sm:leading-normal sm:tracking-[0.125rem] sm:text-[#000000] sm:text-lg sm:uppercase",
              "lg:leading-normal lg:text-xl"
            )}>
              {heading}
            </h2>
          </div>

          <div className={clx(
            "sm:hidden sm:flex-shrink-0 sm:gap-8 sm:items-center w-fit",
            "lg:flex"
          )}>
            <Slider.PrevButton className={clx(
              "sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9",
              "sm:hover:bg-black sm:hover:text-white",
              "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black"
            )}>
              <Icon
                className="sm:h-4 sm:w-4"
                id="ChevronLeft"
              />
            </Slider.PrevButton>

            <Slider.NextButton className={clx(
              "sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9",
              "sm:hover:bg-black sm:hover:text-white",
              "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black"
            )}>
              <Icon
                className="sm:h-4 sm:w-4"
                id="ChevronRight"
              />
            </Slider.NextButton>
          </div>
        </div>

        <div className={clx(
          "sm:gap-3 sm:grid sm:grid-cols-[auto_1fr_auto] sm:items-center sm:w-full",
          "lg:grid-cols-1"
        )}>
          <Slider.PrevButton className={clx(
            "sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9",
            "sm:hover:bg-black sm:hover:text-white",
            "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black",
            "lg:hidden"
          )}>
            <Icon
              className="sm:h-4 sm:w-4"
              id="ChevronLeft"
            />
          </Slider.PrevButton>

          <Slider
            className="carousel sm:gap-3 sm:items-stretch sm:w-full"
            role="list"
          >
            {products.map((product, index) => (
              <Slider.Item
                className="carousel-item sm:h-auto sm:max-w-full sm:w-[19.75rem]"
                index={index}
              >
                <ProductComponent product={product} />
              </Slider.Item>
            ))}
          </Slider>

          <Slider.NextButton className={clx(
            "sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9",
            "sm:hover:bg-black sm:hover:text-white",
            "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black",
            "lg:hidden"
          )}>
            <Icon
              className="sm:h-4 sm:w-4"
              id="ChevronRight"
            />
          </Slider.NextButton>
        </div>
      </div>

      <SliderJS rootId={id} />
    </div>
  );
};

export default Shelf;