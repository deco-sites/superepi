import { useCart } from "apps/linx/hooks/useCart.ts";
import Button, { Props as BtnProps } from "./common.tsx";

export type Props = Omit<BtnProps, "onAddItem" | "platform">;

function AddToCartButton(props: Props) {
  const { addItem, cart } = useCart();

  return (
    <Button
      {...props}
      onAddItem={(quantity: number) =>
        addItem({
          ProductID: props.productGroupID,
          SkuID: props.productID,
          Quantity: quantity,
        })}
    />
  );
}

export default AddToCartButton;
