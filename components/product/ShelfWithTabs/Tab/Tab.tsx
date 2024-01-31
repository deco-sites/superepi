import { IS_BROWSER } from '$fresh/runtime.ts'
import { Product as ProductComponent } from '$store/components/product/ShelfWithTabs/Product/Product.tsx'
import Icon from '$store/components/ui/Icon.tsx'
import Slider from '$store/components/ui/Slider.tsx'
import { invoke } from '$store/runtime.ts'
import { clx } from '$store/sdk/clx.ts'
import { useSignal } from '@preact/signals'
import { Product } from 'apps/commerce/types.ts'

/** @titleBy name */
export interface TabProps {
    /** @description Nome da tab */
    name: string
    /** @description Integração dos produtos */
    productsPath: string
}

export const Tab = ({ productsPath }: TabProps) => {
    console.log(productsPath, 'tab')
    const products = useSignal<Product[]>([])

    if (IS_BROWSER && !products.value.length) {
        invoke.linx.loaders.product.list({ path: productsPath }).then(i => {
            products.value = i || []
        })
    }

    if (!products.value.length) return null

    return (
        <div
            class={clx(
                'sm:gap-3 sm:grid sm:grid-cols-[auto_1fr_auto] sm:items-center sm:w-full',
                'lg:grid-cols-1',
            )}
        >
            <Slider.PrevButton
                class={clx(
                    'sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9',
                    'sm:hover:bg-black sm:hover:text-white',
                    'sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black',
                    'lg:hidden',
                )}
            >
                <Icon class='sm:h-4 sm:w-4' id='ChevronLeft' />
            </Slider.PrevButton>

            <Slider class='carousel sm:gap-3 sm:items-stretch sm:w-full' role='list'>
                {products.value.map((product, index) => (
                    <Slider.Item
                        class='carousel-item sm:h-auto sm:max-w-full sm:w-[19.75rem]'
                        index={index}
                    >
                        <ProductComponent product={product} />
                    </Slider.Item>
                ))}
            </Slider>

            <Slider.NextButton
                class={clx(
                    'sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9',
                    'sm:hover:bg-black sm:hover:text-white',
                    'sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black',
                    'lg:hidden',
                )}
            >
                <Icon class='sm:h-4 sm:w-4' id='ChevronRight' />
            </Slider.NextButton>
        </div>
    )
}

export default Tab
