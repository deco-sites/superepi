import Button from "$store/components/ui/Button.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { clx } from "deco-sites/superepi/sdk/clx.ts";
import { useState } from "preact/hooks";
import { useSignal } from "@preact/signals";

export interface Props {
  /** @description: sku name */
  name: string;
  productID: string;
  productGroupID: string;
  price: number;
  discount: number;
  url: string;
  onAddItem: (quantity: number) => Promise<void>;
}

const useAddToCart = ({
  price,
  name,
  discount,
  productGroupID,
  productID,
  url,
  onAddItem,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const { displayCart } = useUI();

  const onClick = async (e: MouseEvent, quantity: number) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      setLoading(true);

      await onAddItem(quantity);

      sendEvent({
        name: "add_to_cart",
        params: {
          items: [{
            quantity: quantity,
            price,
            item_url: url,
            item_name: name,
            discount: discount,
            item_id: productID,
            item_variant: name,
          }],
        },
      });

      displayCart.value = true;
    } finally {
      setLoading(false);
    }
  };

  return { onClick, loading };
};

export default function AddToCartButton({ ...props }: Props) {
  const quantity = useSignal(1);
  const btnProps = useAddToCart(props);

  const QUANTITY_MAX_VALUE = 100;

  return (
    <div className="sm:flex sm:gap-2 sm:items-end sm:w-full">
      <div className="sm:flex sm:flex-col sm:gap-1 sm:justify-end">
        <p className="sm:font-normal sm:font-roboto sm:leading-normal sm:text-xs sm:text-[#999999]">
          Quantidade:
        </p>

        <div className="sm:flex sm:items-center">
          <div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
            <Button
              className={clx(
                "sm:border-[#999999] sm:border-[0.0625rem] sm:border-b-0 sm:duration-300 sm:ease-in-out sm:font-bold sm:flex sm:flex-shrink-0 sm:items-center sm:h-6 sm:justify-center sm:text-[#999999] sm:text-sm sm:transition-colors sm:w-6",
                "sm:hover:bg-[#ffab00] sm:hover:text-white",
              )}
              onClick={() =>
                QUANTITY_MAX_VALUE > quantity.value ? quantity.value += 1 : 0}
            >
              +
            </Button>

            <Button
              className={clx(
                "sm:border-[#999999] sm:border-[0.0625rem] sm:duration-300 sm:ease-in-out sm:font-bold sm:flex sm:flex-shrink-0 sm:items-center sm:h-6 sm:justify-center sm:text-[#999999] sm:text-sm sm:transition-colors sm:w-6",
                "sm:hover:bg-[#ffab00] sm:hover:text-white",
              )}
              onClick={() => quantity.value > 1 ? quantity.value -= 1 : 0}
            >
              -
            </Button>
          </div>

          <input
            className="sm:border-[#999999] sm:border-[0.0625rem] sm:border-l-0 sm:flex-shrink-0 sm:h-12 sm:text-[#999999] sm:text-sm sm:text-center sm:w-12"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            value={quantity.value}
            max={QUANTITY_MAX_VALUE}
            min={1}
          />
        </div>
      </div>

      <Button
        {...btnProps}
        onClick={(e) => btnProps?.onClick(e, quantity.value)}
        data-deco="add-to-cart"
        className="sm:bg-[#37cc6d] sm:flex sm:font-normal sm:font-roboto sm:h-12 sm:items-center sm:justify-center sm:leading-normal sm:max-w-[18.75rem] sm:text-white sm:text-sm sm:w-full"
      >
        Comprar
      </Button>
    </div>
  );
}
