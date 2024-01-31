import { IS_BROWSER } from '$fresh/runtime.ts'
import { Product as ProductComponent } from '$store/components/product/ProductCard.tsx'
import Icon from '$store/components/ui/Icon.tsx'
import Slider from '$store/components/ui/Slider.tsx'
import Rendering from '$store/islands/Rendering.tsx'
import SliderJS from '$store/islands/ui/SliderJS.tsx'
import { invoke } from '$store/runtime.ts'
import { clx } from '$store/sdk/clx.ts'
import { useId } from '$store/sdk/useId.ts'
import { useSignal } from '@preact/signals'
import { ImageWidget } from 'apps/admin/widgets.ts'
import { Product } from 'apps/commerce/types.ts'
import Image from 'apps/website/components/Image.tsx'

export interface Props {
    /** @description Ícone que fica ao lado do título */
    icon?: ImageWidget
    /** @description Título da sessão */
    heading: string
    /** @title Caminhos dos produtos a serem exibidos */
    productsPath: string
    /** @description Justifica o título da sessão */
    variant?: 'center' | 'left'
}

export const Shelf = ({ icon, heading, productsPath, variant = 'left' }: Props) => {
    const products = useSignal<Product[]>([])

    if (IS_BROWSER && !products.value.length) {
        invoke.linx.loaders.product.list({ path: productsPath }).then(i => {
            products.value = i || []
        })
    }

    if (!products.value.length) return null

    const id = useId()

    return (
        <div class={clx('sm:flex sm:px-6 sm:py-5 sm:w-full', 'lg:py-7')} id={id}>
            <div class='sm:flex sm:flex-col sm:gap-8 sm:max-w-page-container sm:mx-auto sm:w-full'>
                <div class='sm:flex sm:gap-8 sm:items-center sm:justify-between sm:relative sm:w-full'>
                    <div
                        class={clx(
                            'sm:flex sm:gap-4 sm:items-center ',
                            variant === 'left' && 'sm:w-full',
                            variant === 'center' &&
                                'sm:border-b-[0.1875rem] sm:border-b-[#ffa500] sm:mx-auto sm:pb-2 sm:w-fit',
                        )}
                    >
                        {icon !== undefined && (
                            <Image
                                alt=''
                                class='sm:flex-shrink-0 sm:h-8 sm:object-cover sm:w-8'
                                height={32}
                                src={icon}
                                width={32}
                            />
                        )}

                        <h2
                            class={clx(
                                'sm:font-roboto sm:font-medium sm:leading-normal sm:tracking-[0.125rem] sm:text-[#000000] sm:text-lg sm:uppercase',
                                'lg:leading-normal lg:text-xl',
                            )}
                        >
                            {heading}
                        </h2>
                    </div>

                    <div
                        class={clx(
                            'sm:hidden sm:flex-shrink-0 sm:gap-8 sm:items-center w-fit',
                            'lg:flex',
                            variant === 'center' && 'lg:absolute lg:right-0',
                        )}
                    >
                        <Slider.PrevButton
                            class={clx(
                                'sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9',
                                'sm:hover:bg-black sm:hover:text-white',
                                'sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black',
                            )}
                        >
                            <Icon class='sm:h-4 sm:w-4' id='ChevronLeft' />
                        </Slider.PrevButton>

                        <Slider.NextButton
                            class={clx(
                                'sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9',
                                'sm:hover:bg-black sm:hover:text-white',
                                'sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black',
                            )}
                        >
                            <Icon class='sm:h-4 sm:w-4' id='ChevronRight' />
                        </Slider.NextButton>
                    </div>
                </div>

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
            </div>

            <SliderJS rootId={id} />
        </div>
    )
}

export default function (props: Props) {
    return (
        <Rendering on='visible'>
            <Shelf {...props} />
        </Rendering>
    )
}
