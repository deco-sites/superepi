import type { ProductListingPage } from "apps/commerce/types.ts";
import { Product } from "deco-sites/superepi/components/product/ProductCard.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export type ShelfProps = {
  id: string;
  page: ProductListingPage | null;
};

export const Shelf = ({
  id,
  page,
}: ShelfProps) => {
  if (page === null) return null;

  const { products } = page;

  return (
    <div className="sm:flex sm:flex-col sm:w-full">
      <ul
        className={clx(
          "sm:gap-4 sm:grid sm:grid-cols-1 sm:w-full",
          "smA:grid-cols-2",
          "mdA:grid-cols-3",
        )}
        id={id}
      >
        {products.map((product) => <Product product={product} />)}
      </ul>
    </div>
  );
};

export default Shelf;
