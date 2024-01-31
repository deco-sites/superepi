import { Range } from '$store/components/search/Range/Range.tsx'
import { tags } from '$store/components/search/tags.ts'
import Icon from '$store/components/ui/Icon.tsx'
import type {
    Filter,
    FilterToggle,
    FilterToggleValue,
    ProductListingPage,
} from 'apps/commerce/types.ts'

interface Props {
    filters: ProductListingPage['filters']
}

const isToggle = (filter: Filter): filter is FilterToggle => filter['@type'] === 'FilterToggle'

function Filters({ filters }: Props) {
    const tag = tags(filters)

    return (
        <div class='sm:flex sm:flex-col sm:gap-4 sm:w-full'>
            {tag.length !== 0 && (
                <div class='sm:flex sm:flex-col sm:gap-4 sm:mb-4 sm:w-full'>
                    <h3 class='sm:font-roboto sm:font-bold sm:text-lg sm:text-[#151515]'>
                        Filtros selecionados
                    </h3>

                    <ul class='sm:flex sm:flex-col sm:gap-3 sm:w-full'>
                        {tag.map(({ label, url }, index) => (
                            <li class='sm:flex sm:items-center sm:justify-between sm:w-full'>
                                <a
                                    class='sm:flex sm:font-roboto sm:font-normal sm:items-center sm:justify-between sm:text-[#151515] sm:text-sm sm:w-full'
                                    href={url}
                                >
                                    <span class='sm:underline'>{label}</span>

                                    <Icon class='sm:h-3 sm:text-[#777] sm:w-3' id='Close' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <span class='sm:font-roboto sm:font-normal sm:text-sm sm:text-[#151515]'>
                Use os filtros abaixo para adicionar itens à sua pesquisa:
            </span>

            <ul class='sm:flex sm:flex-col sm:gap-3 sm:w-full'>
                {filters.filter(isToggle).map(({ label, values: valuesProp }, index) => {
                    const values = valuesProp as FilterToggleValue[]

                    if (values.length == 0) return null

                    return (
                        <li class='collapse collapse-arrow sm:bg-[#fcfcfc] sm:rounded-none sm:shadow-[0_0.25rem_0.375rem_#00000012] sm:w-full'>
                            <input class='sm:min-h-0 sm:p-0' type='checkbox' />

                            <h3 class='collapse-title sm:font-bold sm:font-roboto sm:min-h-0 sm:p-4 sm:text-sm sm:text-[#151515] sm:uppercase'>
                                {label}
                            </h3>

                            <div class='collapse-content sm:p-0 sm:!pb-0'>
                                {label === 'Preço' ? (
                                    <Range
                                        max={Math.floor(
                                            parseFloat(
                                                values.at(-1)?.value.split(':').at(-1) ?? '0',
                                            ),
                                        )}
                                        min={Math.floor(
                                            parseFloat(values.at(0)?.value.split(':').at(0) ?? '0'),
                                        )}
                                    />
                                ) : (
                                    <ul class='sm:bg-[#FFFFFF] sm:flex sm:flex-col sm:gap-3 sm:p-4 sm:w-full'>
                                        {values.map(({ label, quantity, url }, index) => (
                                            <li class='sm:flex'>
                                                <a
                                                    class='sm:font-roboto sm:font-normal sm:text-[#333] sm:text-sm'
                                                    href={url}
                                                >
                                                    {label} ({quantity})
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Filters
