import { Widget, WidgetProps } from '$store/components/header/Middle/Widget/Widget.tsx'
import Icon from '$store/components/ui/Icon.tsx'
import { clx } from '$store/sdk/clx.ts'
import { formatPrice } from '$store/sdk/format.ts'
import { useId } from '$store/sdk/useId.ts'
import { useCart } from 'apps/linx/hooks/useCart.ts'

export const Cart = (props: WidgetProps) => {
    const id = useId()

    const { cart } = useCart()

    const items = cart.value?.Basket?.Items ?? []
    const length = items?.length ?? 0
    const total = cart.value?.Basket?.Total ?? 0

    return (
        <div class='drawer drawer-end sm:w-fit'>
            <input id={id} type='checkbox' class='drawer-toggle' />

            <div class='drawer-content'>
                <label htmlFor={id} class='sm:cursor-pointer sm:flex'>
                    <Widget
                        {...props}
                        title={`${length} items`}
                        content={formatPrice(total) ?? 'R$ 0,00'}
                    />
                </label>
            </div>

            <div class='drawer-side sm:z-50'>
                <label htmlFor={id} aria-label='close sidebar' class='drawer-overlay'></label>

                <div class='menu sm:bg-white sm:flex sm:flex-col sm:gap-5 sm:items-center sm:max-w-[31.25rem] sm:min-h-full sm:p-10 sm:relative sm:w-full'>
                    <div class='sm:border-b-[0.0625rem] sm:border-b-[#f0f0f0] sm:flex sm:flex-col sm:items-center sm:justify-center sm:pb-4 sm:relative sm:text-center sm:w-full'>
                        <label
                            class='sm:absolute sm:cursor-pointer sm:flex sm:h-8 sm:items-center sm:justify-center sm:left-0 sm:overflow-hidden sm:rounded-full sm:w-8'
                            htmlFor={id}
                        >
                            <Icon class='sm:h-6 sm:w-6' id='Close' />
                        </label>

                        <h4 class='sm:font-roboto sm:font-black sm:leading-normal sm:text-[#151515] sm:text-2xl sm:-tracking-[0.078125rem] sm:uppercase'>
                            Meu Carrinho
                        </h4>

                        <p class='sm:font-roboto sm:font-medium sm:leading-normal sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]'>
                            Seu carrinho contém {length} itens
                        </p>
                    </div>

                    {items.length === 0 ? (
                        <>
                            <div class='sm:flex sm:flex-col sm:items-center sm:gap-2 sm:text-center sm:w-full'>
                                <span class='sm:font-medium sm:font-roboto sm:leading-normal sm:text-[#999999] sm:text-xl sm:-tracking-[0.078125rem]'>
                                    Seu carrinho está{' '}
                                    <strong class='sm:text-[#151515] sm:font-black'>vazio!</strong>
                                </span>

                                <span class='sm:font-roboto sm:font-medium sm:leading-normal sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]'>
                                    Que tal adicionar algum dos nossos produtos?
                                </span>
                            </div>

                            <a
                                class={clx(
                                    'sm:border-[#f0f0f0] sm:border-[0.0625rem] sm:duration-300 sm:ease-in-out sm:flex sm:font-medium sm:font-roboto sm:items-center sm:justify-center sm:leading-normal sm:max-w-full sm:min-h-12 sm:min-w-[15.625rem] sm:mt-auto sm:uppercase sm:text-sm sm:text-[#151515] sm:transition-colors sm:w-fit',
                                    'sm:hover:bg-[#ffab00]',
                                )}
                                href='/'
                            >
                                Voltar para home
                            </a>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart
