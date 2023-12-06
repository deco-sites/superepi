import type { Product } from "apps/commerce/types.ts";

export interface Props {
  /** @description Integração dos produtos */
  products: Product[] | null;
  /** @des */
  heading: string;
};

export const Shelf = ({
  heading,
  products
}: Props) => {
  return (
    <h1>
      Shelf
    </h1>
  );
};

export default Shelf;