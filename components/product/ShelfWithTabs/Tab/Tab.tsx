import { Product } from "apps/commerce/types.ts";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";
import Slider from "deco-sites/superepi/components/ui/Slider.tsx";
import { Product as ProductComponent } from "deco-sites/superepi/components/product/ShelfWithTabs/Product/Product.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

/** @titleBy name */
export interface TabProps {
  /** @description Nome da tab */
  name: string;
  /** @description Integração dos produtos */
  products: Product[] | null;
}

export const Tab = ({
  name,
  products = [],
}: TabProps) => {
  if (
    products === null ||
    products.length === 0
  ) return null;

  return (
    <div
      className={clx(
        "sm:gap-3 sm:grid sm:grid-cols-[auto_1fr_auto] sm:items-center sm:w-full",
        "lg:grid-cols-1",
      )}
    >
      <Slider.PrevButton
        className={clx(
          "sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9",
          "sm:hover:bg-black sm:hover:text-white",
          "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black",
          "lg:hidden",
        )}
      >
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

      <Slider.NextButton
        className={clx(
          "sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9",
          "sm:hover:bg-black sm:hover:text-white",
          "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black",
          "lg:hidden",
        )}
      >
        <Icon
          className="sm:h-4 sm:w-4"
          id="ChevronRight"
        />
      </Slider.NextButton>
    </div>
  );
};

export default Tab;
