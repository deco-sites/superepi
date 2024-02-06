import { Product } from "$store/components/product/ProductCard.tsx";
import { clx } from "$store/sdk/clx.ts";
import type { ProductListingPage } from "apps/commerce/types.ts";

export type ShelfProps = {
  id: string;
  page: ProductListingPage | null;
};

export const Shelf = ({ id, page }: ShelfProps) => {
  if (page === null) return null;

  const { products } = page;

  return (
    <div class="flex flex-col w-full">
      <ul
        class={clx(
          "gap-4 grid grid-cols-1 w-full",
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
