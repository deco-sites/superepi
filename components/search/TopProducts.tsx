'use client'

import { SendEventOnClick } from '$store/components/Analytics.tsx'
import Icon from '$store/components/ui/Icon.tsx'
import Slider from '$store/components/ui/Slider.tsx'
import SliderJS from '$store/islands/ui/SliderJS.tsx'
import calcOFF from '$store/sdk/calcOFF.tsx'
import { formatPrice } from '$store/sdk/format.ts'
import { useId } from '$store/sdk/useId.ts'
import { useOffer } from '$store/sdk/useOffer.ts'
import { Product } from 'apps/commerce/types.ts'
import { mapProductToAnalyticsItem } from 'apps/commerce/utils/productToAnalyticsItem.ts'
import Image from 'apps/website/components/Image.tsx'
import { sample } from 'std/collections/mod.ts'
import { rawProducts } from '../../mocked-plp.ts'

type Props = {
    products: Product[]
}

export default function ({ products }: Props) {
    const id = useId()

    return (
        <div
            id={id}
            class='max-w-page-container mx-auto relative border-2 border-[#f0f0f0] hover:border-[#d9d9d9] transition mb-20 w-[90%] lg:w-full hover:shadow-[0_0_5px_3px_rgba(0,0,0,0.07)]'
        >
            <Slider class='carousel w-full'>
                {products.map((product, index) => {
                    const { brand, image, offers, url } = product

                    const { listPrice = 0, price = 0 } = useOffer(offers)

                    const flags = rawProducts.Model.Grid.Products.filter(
                        i => i.Flags.length > 0,
                    ).map(i => i.Flags[0])

                    return (
                        <Slider.Item index={index} class='carousel-item w-full'>
                            <a
                                href={url}
                                class='group duration-300 ease-in-out flex flex-col lg:flex-row gap-4 h-full px-4 py-2.5 pt-6 lg:py-16 relative transition-shadow w-full'
                            >
                                <Image
                                    src={`https://d3bhvz7al37iy6.cloudfront.net/Custom/Content${
                                        sample(flags)?.ImagePath
                                    }`}
                                    alt=''
                                    class='absolute top-4 right-0'
                                    width={75}
                                    height={55}
                                />

                                <div class='lg:ml-24 lg:mr-28 max-lg:w-full lg:h-full object-cover shrink-0'>
                                    <Image
                                        alt=''
                                        class='object-cover max-lg:w-full max-lg:h-[300px]'
                                        height={300}
                                        width={300}
                                        src={image?.[0].url ?? ''}
                                    />
                                </div>

                                <div class='flex flex-col max-lg:gap-3 justify-between relative w-full mb-5'>
                                    <div class='flex flex-col w-full'>
                                        {brand !== undefined && (
                                            <span class='font-medium leading-normal text-[#999999] text-xs'>
                                                {brand.name}
                                            </span>
                                        )}

                                        <h3 class='font-bold leading-normal text-xs lg:text-base text-black uppercase max-lg:h-14'>
                                            {product.name}
                                        </h3>
                                    </div>

                                    <div class='gap-4 flex w-full'>
                                        <div class='flex flex-col items-start justify-center'>
                                            <strong class='leading-normal font-bold text-[#151515] text-3xl'>
                                                {formatPrice(listPrice)}{' '}
                                                <span class='font-black leading-normal text-xs'>
                                                    no Pix/Boleto
                                                </span>
                                            </strong>

                                            <span class='text-lg text-[#151515] font-medium'>
                                                ou 3x de {formatPrice(listPrice / 3)}
                                            </span>
                                        </div>

                                        {listPrice !== price && (
                                            <strong class='bg-[#ffff00] flex flex-col font-normal items-center px-3 py-1.5 text-sm text-[#000000] leading-none self-end ml-auto max-lg:mb-6 lg:ml-6'>
                                                <span class='font-black'>
                                                    {calcOFF(price, listPrice)}%
                                                </span>

                                                <span>OFF</span>
                                            </strong>
                                        )}
                                    </div>

                                    <a
                                        href={url}
                                        class='w-full lg:max-w-[290px] h-14 lg:h-9 bg-[#37CC6D] text-white flex justify-center items-center'
                                    >
                                        Comprar
                                    </a>
                                </div>

                                <SendEventOnClick
                                    id={id}
                                    event={{
                                        name: 'select_item' as const,
                                        params: {
                                            items: [
                                                mapProductToAnalyticsItem({
                                                    product,
                                                    price,
                                                    listPrice,
                                                    index,
                                                }),
                                            ],
                                        },
                                    }}
                                />
                            </a>
                        </Slider.Item>
                    )
                })}

                <Slider.PrevButton class='absolute top-1/2 -translate-y-1/2 left-0 bg-transparent border-[0.125rem] border-[#000000] duration-300 ease-in-out h-9 items-center justify-center pointer-events-auto text-[#000000] transition-colors w-9 hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:bg-transparent flex'>
                    <Icon id='ChevronLeft' width={16} height={16} />
                </Slider.PrevButton>
                <Slider.NextButton class='absolute top-1/2 -translate-y-1/2 right-0 bg-transparent border-[0.125rem] border-[#000000] duration-300 ease-in-out h-9 items-center justify-center pointer-events-auto text-[#000000] transition-colors w-9 hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:bg-transparent flex'>
                    <Icon id='ChevronLeft' width={16} height={16} class='rotate-180' />
                </Slider.NextButton>

                <div class='flex flex-wrap gap-3 absolute top-[103%] left-1/2 -translate-x-1/2 w-[95%] justify-center'>
                    {products.map((_, index) => (
                        <Slider.Dot index={index}>
                            <div class='w-4 h-4 bg-[#f1f1f1] rounded-full group-disabled:bg-[#F8A531]' />
                        </Slider.Dot>
                    ))}
                </div>
            </Slider>
            <SliderJS rootId={id} infinite interval={7000} />
        </div>
    )
}
