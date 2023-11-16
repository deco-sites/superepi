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
  onAddItem: () => Promise<void>;
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

    console.log("ONCLICK")

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
    <div class="flex">
      <div class="join border border-gray-500 rounded-full">
        <Button
          class={`btn-md bg-white border-none join-item rounded-l-full ${
            quantity.value > 1 && "text-[#0054A6]"
          } hover:bg-white`}
          onClick={() => quantity.value > 1 ? quantity.value -= 1 : 0}
        >
          -
        </Button>
        <input
          class="input text-center join-item px-0 w-9"
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          value={quantity.value}
          max={QUANTITY_MAX_VALUE}
          min={1}
          // onBlur={(e) => onChange?.(e.currentTarget.valueAsNumber)}
        />
        <Button
          class={`btn-md bg-white border-none join-item rounded-r-full ${
            quantity.value < 100 && "text-[#0054A6]"
          } hover:bg-white`}
          onClick={() =>
            QUANTITY_MAX_VALUE > quantity.value ? quantity.value += 1 : 0}
        >
          +
        </Button>
      </div>
      <Button {...btnProps} onClick={(e) => btnProps?.onClick(e, quantity.value)} data-deco="add-to-cart" class="btn-primary">
        Adicionar à Sacola
      </Button>
    </div>
  );
}
