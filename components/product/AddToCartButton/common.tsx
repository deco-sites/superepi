import Button from "$store/components/ui/Button.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { clx } from "$store/sdk/clx.ts";
import { useUI } from "$store/sdk/useUI.ts";
import { useSignal } from "@preact/signals";
import { useState } from "preact/hooks";

export interface Props {
  /** @description: sku name */
  name: string;
  productID: string;
  productGroupID: string;
  price: number;
  discount: number;
  url: string;
  onAddItem: (quantity: number) => Promise<void>;
  variant?: "PDP";
}

const useAddToCart = ({
  price,
  name,
  discount,
  productGroupID,
  productID,
  url,
  onAddItem,
  variant,
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
          items: [
            {
              quantity: quantity,
              price,
              item_url: url,
              item_name: name,
              discount: discount,
              item_id: productID,
              item_variant: name,
            },
          ],
        },
      });

      displayCart.value = true;
    } finally {
      setLoading(false);
    }
  };

  return { onClick, loading };
};

export default function AddToCartButton({ variant, ...props }: Props) {
  const quantity = useSignal(1);
  const btnProps = useAddToCart(props);

  const QUANTITY_MAX_VALUE = 100;

  return (
    <div class="flex gap-2 items-end w-full">
      <div class="flex flex-col gap-1 justify-end">
        <p class="font-normal font-roboto leading-normal text-xs text-[#999999]">
          Quantidade:
        </p>

        <div class="flex items-center">
          <div class="flex flex-col justify-center items-center">
            <button
              type="button"
              class={clx(
                "border-[#999999] border-[0.0625rem] border-b-0 duration-300 ease-in-out font-bold flex flex-shrink-0 items-center h-6 justify-center text-[#999999] text-sm transition-colors w-6",
                "hover:bg-[#ffab00] hover:text-white",
              )}
              onClick={() =>
                QUANTITY_MAX_VALUE > quantity.value ? (quantity.value += 1) : 0}
            >
              +
            </button>

            <button
              type="button"
              class={clx(
                "border-[#999999] border-[0.0625rem] duration-300 ease-in-out font-bold flex flex-shrink-0 items-center h-6 justify-center text-[#999999] text-sm transition-colors w-6",
                "hover:bg-[#ffab00] hover:text-white",
              )}
              onClick={() => (quantity.value > 1 ? (quantity.value -= 1) : 0)}
            >
              -
            </button>
          </div>

          <input
            class="border-[#999999] border-[0.0625rem] border-l-0 flex-shrink-0 h-12 text-[#999999] text-sm text-center w-12"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            value={quantity.value}
            max={QUANTITY_MAX_VALUE}
            min={1}
          />
        </div>
      </div>

      <button
        type="button"
        {...btnProps}
        onClick={(e) => btnProps?.onClick(e, quantity.value)}
        data-deco="add-to-cart"
        class={clx(
          "flex font-normal font-roboto h-12 items-center justify-center leading-normal max-w-[18.75rem] text-white w-full",
          variant === "PDP"
            ? "bg-[#1E90FF] hover:bg-[#333] transition-colors text-xl"
            : "text-sm bg-[#37cc6d]",
        )}
      >
        Comprar
      </button>
    </div>
  );
}
