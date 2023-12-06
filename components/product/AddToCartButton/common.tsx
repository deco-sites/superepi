import Button from "$store/components/ui/Button.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { useUI } from "$store/sdk/useUI.ts";
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

export default function AddToCartButton({...props}: Props) {
  const quantity = useSignal(1);
  const btnProps = useAddToCart(props);

  const QUANTITY_MAX_VALUE = 100;

  return (
    <div class="flex gap-2 items-end">
      <div class="flex flex-col gap-2">
        <p class="font-semibold text-sm">Quantidade</p>
        <div class="flex items-center">
          <div class="flex flex-col justify-center items-center">
            <Button
              class={`btn-xs border border-base-300 join-item ${
                quantity.value === 1 ? "bg-[#f2f2f2]" : "bg-white"
              } hover:bg-[#F8A531]`}
              onClick={() => quantity.value > 1 ? quantity.value -= 1 : 0}
            >
              -
            </Button>
            <Button
              class={`btn-xs border border-base-300 join-item ${
                quantity.value > 99 ? "bg-[#f2f2f2]" : "bg-white"
              } hover:bg-[#F8A531]`}
              onClick={() =>
                QUANTITY_MAX_VALUE > quantity.value ? quantity.value += 1 : 0}
            >
              +
            </Button>
          </div>
          <input
            class="input text-center join-item px-0 w-9 border border-base-300"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            value={quantity.value}
            max={QUANTITY_MAX_VALUE}
            min={1}
            // onBlur={(e) => onChange?.(e.currentTarget.valueAsNumber)}
          />
        </div>
      </div>
      <Button {...btnProps} onClick={(e) => btnProps?.onClick(e, quantity.value)} data-deco="add-to-cart" class="btn-primary bg-[#37CC6D] hover:bg-[rgba(0, 0, 0, 0.8)] w-full">
        Adicionar à Sacola
      </Button>
    </div>
  );
}
