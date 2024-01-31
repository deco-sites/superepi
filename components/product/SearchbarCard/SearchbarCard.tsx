import { clx } from '$store/sdk/clx.ts'
import { formatPrice } from '$store/sdk/format.ts'
import { useOffer } from '$store/sdk/useOffer.ts'
import { Product } from 'apps/commerce/types.ts'
import Image from 'apps/website/components/Image.tsx'

export type SearchbarCardProps = {
    product: Product
}

export const SearchbarCard = ({ product }: SearchbarCardProps) => {
    const { image, isVariantOf, offers, url } = product

    const { listPrice = 0 } = useOffer(offers)

    return (
        <a
            class={clx(
                'sm:duration-300 sm:ease-in-out sm:gap-6 sm:grid sm:grid-cols-[3.125rem_1fr_auto] sm:items-center sm:transition-colors sm:w-full',
                'sm:hover:bg-[#f5f5f5]',
            )}
            href={url}
        >
            {image !== undefined && image.length !== 0 && (
                <Image
                    alt=''
                    class='sm:h-[3.125rem] sm:object-cover sm:w-full'
                    height={50}
                    src={image[0].url ?? ''}
                    width={50}
                />
            )}

            <span class='sm:font-semibold sm:font-roboto sm:text-[#333] sm:text-xs'>
                {isVariantOf?.name}
            </span>

            <span class='sm:font-extrabold sm:font-roboto sm:text-black sm:text-sm sm:-tracking-[0.01875rem]'>
                {formatPrice(listPrice)}
            </span>
        </a>
    )
}

export default SearchbarCard
