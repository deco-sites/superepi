import { clx } from '$store/sdk/clx.ts'
import { useId } from '$store/sdk/useId.ts'
import type { ProductListingPage } from 'apps/commerce/types.ts'
import { useRef } from 'preact/hooks'

export type SortProps = {
    sortOptions: ProductListingPage['sortOptions']
}

export const Sort = ({ sortOptions = [] }: SortProps) => {
    const id = useId()
    const ref = useRef<HTMLFormElement>(null)

    const sort = new URLSearchParams(location.search).get('o')

    if (sortOptions.length === 0) return null

    return (
        <form
            class={clx('flex items-center justify-center relative w-full', 'smA:max-w-xs')}
            method='GET'
            ref={ref}
        >
            <label class='absolute h-0 opacity-0 overflow-hidden w-0' htmlFor={id}>
                Ordenar prioridade
            </label>

            <select
                class={clx(
                    'appearance-none bg-white border-solid border-[0.0625rem] border-[#999999] flex font-medium h-9 outline-none px-3 relative rounded-none shadow-none text-[#999999] text-sm w-full',
                    'focus:text-[#495057]',
                )}
                id={id}
                defaultValue={sort === null ? undefined : sort}
                name={`o`}
                onChange={event => ref.current?.submit()}
            >
                {sortOptions.map(({ label, value }, index) => (
                    <option value={value}>{label}</option>
                ))}
            </select>
        </form>
    )
}

export default Sort
