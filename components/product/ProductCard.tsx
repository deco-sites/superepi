import { SendEventOnClick } from '$store/components/Analytics.tsx'
import Icon from '$store/components/ui/Icon.tsx'
import calcOFF from '$store/sdk/calcOFF.tsx'
import { clx } from '$store/sdk/clx.ts'
import { formatPrice } from '$store/sdk/format.ts'
import { useId } from '$store/sdk/useId.ts'
import { useOffer } from '$store/sdk/useOffer.ts'
import { Product as ProductType } from 'apps/commerce/types.ts'
import { mapProductToAnalyticsItem } from 'apps/commerce/utils/productToAnalyticsItem.ts'
import Image from 'apps/website/components/Image.tsx'

export type ProductProps = {
    backgroundColor?: string
    index?: number
    list?: string
    product: ProductType
}

export const Product = ({ backgroundColor, index, list, product }: ProductProps) => {
    const id = useId()

    const { brand, image, offers, url } = product

    const { installments, listPrice = 0, price = 0 } = useOffer(offers)

    const discount = listPrice !== price

    return (
        <article
            class='group sm:duration-300 sm:ease-in-out sm:flex sm:flex-col sm:gap-4 sm:h-full sm:p-4 sm:relative sm:transition-shadow sm:w-full'
            style={{ backgroundColor: backgroundColor }}
        >
            <Image
                alt=''
                class='sm:aspect-square sm:object-cover sm:w-full'
                height={284}
                src={image?.[0].url ?? ''}
                width={284}
            />

            <div class='sm:flex sm:flex-col sm:gap-6 sm:h-full sm:relative sm:w-full'>
                <div class='sm:flex sm:flex-col sm:w-full'>
                    {brand !== undefined && (
                        <span class='sm:font-medium sm:font-roboto sm:leading-normal sm:text-[#999999] sm:text-xs'>
                            {brand.name}
                        </span>
                    )}

                    <h3 class='sm:font-medium sm:font-roboto sm:leading-normal sm:text-sm sm:text-black'>
                        {product.name}
                    </h3>
                </div>

                <div class='sm:gap-4 sm:grid sm:grid-cols-[1fr_auto] sm:mt-auto sm:w-full'>
                    <div class='sm:flex sm:flex-col sm:items-start sm:justify-center sm:w-full'>
                        <strong class='sm:font-roboto sm:leading-normal sm:font-medium sm:text-[#151515] sm:text-2xl'>
                            {formatPrice(listPrice)}{' '}
                            <span class='sm:font-black sm:leading-normal sm:text-base'>
                                no Pix/Boleto
                            </span>
                        </strong>

                        <span>ou 3x de {formatPrice(listPrice / 3)}</span>
                    </div>

                    <strong class='sm:bg-[#ffff00] sm:flex sm:flex-col sm:font-roboto sm:font-normal sm:items-center sm:px-2 sm:py-1 sm:text-sm sm:text-[#000000] sm:leading-none sm:self-end'>
                        <span class='sm:font-black'>{calcOFF(price, listPrice)}%</span>

                        <span>OFF</span>
                    </strong>
                </div>
            </div>

            <a
                class={clx(
                    'sm:absolute sm:bg-[#ffffffcc] sm:duration-300 sm:cursor-pointer sm:ease-in-out sm:flex sm:flex-col sm:gap-2 sm:font-normal sm:font-roboto sm:leading-normal sm:h-[calc(100%-0.625rem)] sm:items-center sm:justify-center sm:left-1/2 sm:opacity-0 sm:pointer-events-none sm:text-sm sm:text-[#151515] sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:transition-opacity sm:w-[calc(100%-0.625rem)] sm:z-10',
                    'sm:hover:opacity-100 sm:group-hover:pointer-events-auto sm:hover:shadow-[0_0_0.625rem_0_#00000033]',
                )}
                href={url}
            >
                <div class='sm:bg-[#f8a531] sm:h-16 sm:flex sm:items-center sm:justify-center sm:text-white sm:w-16'>
                    <Icon class='sm:h-8 sm:w-8' id='Search' />
                </div>

                <span>Comprar</span>
            </a>

            <SendEventOnClick
                id={id}
                event={{
                    name: 'select_item' as const,
                    params: {
                        item_list_name: list,
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
        </article>
    )
}

export default Product
