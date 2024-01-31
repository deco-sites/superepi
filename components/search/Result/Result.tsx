import Filters from '$store/components/search/Filters.tsx'
import { LayoutControl } from '$store/components/search/LayoutControl/LayoutControl.tsx'
import { Shelf } from '$store/components/search/Shelf/Shelf.tsx'
import { Sort } from '$store/components/search/Sort/Sort.tsx'
import Icon from '$store/components/ui/Icon.tsx'
import { clx } from '$store/sdk/clx.ts'
import { useId } from '$store/sdk/useId.ts'
import type { ProductListingPage } from 'apps/commerce/types.ts'

export type ResultProps = {
    page: ProductListingPage | null
}

export const Result = ({ page }: ResultProps) => {
    const id = useId()

    if (page === null) return null

    const { filters, sortOptions } = page

    return (
        <div
            class={clx('sm:gap-6 sm:grid sm:grid-cols-1 sm:w-full', 'lg:grid-cols-[15.625rem_1fr]')}
        >
            <div
                class={clx(
                    'sm:bg-[#f0f0f0] sm:flex sm:flex-wrap sm:gap-3 sm:items-center sm:px-8 sm:py-5 sm:w-full',
                    'lg:col-span-2',
                )}
            >
                <h2 class='sm:flex sm:font-roboto sm:font-bold sm:gap-3 sm:items-center sm:text-base sm:text-[#151515]'>
                    <Icon class='sm:h-4 sm:w-4' id='Options' />
                    Filtros
                </h2>

                <div class='sm:flex sm:flex-shrink-0 sm:gap-3 sm:items-center sm:ml-auto sm:w-fit'>
                    <span class='sm:flex-shrink-0 sm:font-roboto sm:font-medium sm:text-sm sm:text-[#999999]'>
                        Ordenar por:
                    </span>

                    <Sort sortOptions={sortOptions} />
                </div>

                <div class={clx('sm:hidden sm:ml-3', 'lg:flex')}>
                    <LayoutControl id={id} />
                </div>
            </div>

            <div class='sm:flex sm:w-full'>
                <Filters filters={filters} />
            </div>

            <div class='sm:flex sm:w-full'>
                <Shelf id={id} page={page} />
            </div>
        </div>
    )
}

export default Result
