'use client'

import { SendEventOnLoad } from '$store/components/Analytics.tsx'
import { BuyProduct } from '$store/components/product/Page/BuyProduct.tsx'
import { Description } from '$store/components/product/Page/Description.tsx'
import { Gallery } from '$store/components/product/Page/Gallery.tsx'
import { ProductInfo } from '$store/components/product/Page/Information.tsx'
import Breadcrumb from '$store/components/ui/Breadcrumb.tsx'
import { rawProduct } from '$store/mocked-pdp.ts'
import { clx } from '$store/sdk/clx.ts'
import { useOffer } from '$store/sdk/useOffer.ts'
import { ProductDetailsPage } from 'apps/commerce/types.ts'
import { mapProductToAnalyticsItem } from 'apps/commerce/utils/productToAnalyticsItem.ts'

export interface Props {
    page: ProductDetailsPage | null
}

export const Page = ({ page }: Props) => {
    const { breadcrumbList, product } = page
    const { isVariantOf, offers } = product

    console.log(product)

    console.log(
        rawProduct.Model.Items.flatMap(i =>
            i.Items.flatMap(j => j.Price.BestInstallment.PaymentName),
        ),
    )

    // const mostCheapAndAvailableSKU = isVariantOf?.hasVariant.reduce((acc, cur) => {
    //     const { price = 0, availability } = useOffer(cur.offers)

    //     if (
    //         availability === 'https://schema.org/InStock' &&
    //         price < (useOffer(acc.offers).price ?? 0)
    //     ) {
    //         return cur
    //     }
    //     return acc
    // }) as Product

    const { price = 0, listPrice } = useOffer(offers)

    return (
        <>
            <div class={clx('flex flex-col py-5 w-full', 'lg:py-7')}>
                <div class='flex px-6 w-full'>
                    <div class='flex max-w-page-container mx-auto w-full'>
                        <Breadcrumb itemListElement={breadcrumbList.itemListElement} home={false} />
                    </div>
                </div>

                <div class={clx('flex px-6 py-5 w-full', 'lg:py-7 lg:pb-56')}>
                    <div
                        class={clx(
                            'flex flex-col lg:flex-row gap-10 max-w-page-container mx-auto w-full',
                        )}
                    >
                        <ProductInfo product={product} />

                        <Gallery product={product} />

                        <BuyProduct product={product} />
                    </div>
                </div>

                <div class={clx('bg-[#f0f0f0] flex flex-col px-6 py-6 w-full', 'lg:py-24')}>
                    <div class='flex mx-auto max-w-page-container w-full'>
                        <Description product={product} />
                    </div>
                </div>
            </div>
            <SendEventOnLoad
                event={{
                    name: 'view_item',
                    params: {
                        items: [
                            mapProductToAnalyticsItem({
                                product,
                                breadcrumbList,
                                price,
                                listPrice,
                            }),
                        ],
                    },
                }}
            />
        </>
    )
}

export default Page
