'use client'

import { rawProduct } from '$store/mocked-pdp.ts'
import { clx } from '$store/sdk/clx.ts'
import { useOffer } from '$store/sdk/useOffer.ts'
import { useVariantPossibilities } from '$store/sdk/useVariantPossiblities.ts'
import type { Product } from 'apps/commerce/types.ts'

interface Props {
    product: Product
}

function VariantSelector({ product }: Props) {
    const { url, isVariantOf } = product
    const hasVariant = isVariantOf?.hasVariant ?? []
    const possibilities = useVariantPossibilities(hasVariant, product)

    const hasMoreThanOneVariation = Object.keys(possibilities).length > 1

    const variationName = rawProduct.Model.ExtendedMetadatas.find(
        i => i.Name === 'Titulo das variações:',
    )?.Value

    return (
        <ul class='flex flex-col gap-3 w-full'>
            {Object.keys(possibilities).map((name, index) => (
                <li class='flex flex-col gap-3 w-full'>
                    <span class='font-roboto font-medium leading-normal text-xs text-[#151515]'>
                        {hasMoreThanOneVariation
                            ? index === 0
                                ? 'Escolha a 1º Opção:'
                                : `Agora escolha a ${index + 1}º Opção:`
                            : variationName}
                    </span>

                    <ul class='flex gap-3 flex-wrap max-w-[290px] items-center justify-start w-full'>
                        {Object.entries(possibilities[name]).map(([value, link]) => {
                            const availability =
                                useOffer(
                                    hasVariant.find(variant =>
                                        variant.additionalProperty?.some(i => i.value === value),
                                    )?.offers,
                                )?.availability === 'https://schema.org/InStock'

                            return (
                                <li class='flex h-7 min-w-[1.75rem]'>
                                    <a
                                        class={clx(
                                            'border-[#999999] flex font-normal font-roboto items-center justify-center leading-normal p-1 text-xs w-full relative',
                                            link !== url && 'text-[#151515]',
                                            link === url && 'bg-black text-white',
                                            !availability &&
                                                'border-2 text-[#e9e8e8] border-[#e9e8e8]',
                                            availability && 'border text-[#999999]',
                                        )}
                                        href={link}
                                    >
                                        {value}
                                        {!availability && (
                                            <div class='w-3 h-3 rounded-full text-white bg-black absolute -top-1.5 -right-1.5 text-[8px] flex justify-center items-center'>
                                                X
                                            </div>
                                        )}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default VariantSelector
