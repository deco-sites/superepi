import { Product } from "apps/commerce/types.ts";

/** @titleBy name */
export interface TabProps {
  /** @description Nome da tab */
  name: string;
  /** @description Integração dos produtos */
  products: Product[] | null;
};

export const Tab = ({
  name,
  products = []
}: TabProps) => {
  if (products?.length === 0) return;

  return (
    <div>
      Tab {Math.random() * 100}
    </div>
  );
};

export default Tab;