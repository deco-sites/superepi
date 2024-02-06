import { Widget, WidgetProps } from "./Widget.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { clx } from "$store/sdk/clx.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useId } from "$store/sdk/useId.ts";
import { useCart } from "apps/linx/hooks/useCart.ts";

export const Cart = (props: WidgetProps & { isMobile?: boolean }) => {
  const id = useId();

  const { cart } = useCart();

  const items = cart.value?.Basket?.Items ?? [];
  const length = items?.length ?? 0;
  const total = cart.value?.Basket?.Total ?? 0;

  return (
    <div class="drawer drawer-end w-fit">
      <input id={id} type="checkbox" class="drawer-toggle" />

      <div class="drawer-content">
        <label htmlFor={id} class="cursor-pointer flex">
          <Widget
            {...props}
            title={props.isMobile ? "" : `${length} itens`}
            content={props.isMobile ? "" : formatPrice(total) ?? "R$ 0,00"}
          />
        </label>
      </div>

      <div class="drawer-side z-50">
        <label for={id} aria-label="close sidebar" class="drawer-overlay" />

        <div class="menu bg-white flex flex-col gap-5 items-center max-w-[31.25rem] min-h-full p-10 relative w-full">
          <div class="border-b-[0.0625rem] border-b-[#f0f0f0] flex flex-col items-center justify-center pb-4 relative text-center w-full">
            <label
              class="absolute cursor-pointer flex h-8 items-center justify-center left-0 overflow-hidden rounded-full w-8"
              htmlFor={id}
            >
              <Icon class="h-6 w-6" id="Close" />
            </label>

            <h4 class="font-roboto font-black leading-normal text-[#151515] text-2xl -tracking-[0.078125rem] uppercase">
              Meu Carrinho
            </h4>

            <p class="font-roboto font-medium leading-normal text-[#999999] text-sm -tracking-[0.040625rem]">
              Seu carrinho contém {length} itens
            </p>
          </div>

          {items.length === 0
            ? (
              <>
                <div class="flex flex-col items-center gap-2 text-center w-full">
                  <span class="font-medium font-roboto leading-normal text-[#999999] text-xl -tracking-[0.078125rem]">
                    Seu carrinho está{" "}
                    <strong class="text-[#151515] font-black">vazio!</strong>
                  </span>

                  <span class="font-roboto font-medium leading-normal text-[#999999] text-sm -tracking-[0.040625rem]">
                    Que tal adicionar algum dos nossos produtos?
                  </span>
                </div>

                <a
                  class={clx(
                    "border-[#f0f0f0] border-[0.0625rem] duration-300 ease-in-out flex font-medium font-roboto items-center justify-center leading-normal max-w-full min-h-12 min-w-[15.625rem] uppercase text-sm text-[#151515] transition-colors w-fit",
                    "hover:bg-[#ffab00]",
                  )}
                  href="/"
                >
                  Voltar para home
                </a>
              </>
            )
            : <></>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
