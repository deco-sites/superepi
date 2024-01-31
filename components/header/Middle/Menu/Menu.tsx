import { Props } from '$store/components/header/Header.tsx'
import Icon from '$store/components/ui/Icon.tsx'
import { clx } from '$store/sdk/clx.ts'
import { useId } from '$store/sdk/useId.ts'

export type MenuProps = {
    lower: Props['lower']
}

export const Menu = ({ lower }: MenuProps) => {
    const id = useId()

    return (
        <div class={clx('drawer drawer-end sm:ml-auto sm:w-fit', 'lg:hidden')}>
            <input class='drawer-toggle' id={id} type='checkbox' />

            <div class='drawer-content'>
                <label
                    class='sm:flex sm:items-center sm:h-12 sm:justify-center sm:w-12'
                    htmlFor={id}
                >
                    <Icon class='sm:h-8 sm:text-black sm:w-8' id='Menu' />
                </label>
            </div>

            <div class='drawer-side'>
                <label htmlFor={id} aria-label='close sidebar' class='drawer-overlay'></label>

                <div class='menu sm:bg-[#f0f0f0] sm:p-6 sm:max-w-full sm:min-h-full sm:w-64'>
                    {lower.menus.map(({ items, name }, index) => (
                        <div class='collapse sm:rounded-none'>
                            <input type='checkbox' />

                            <strong class='collapse-title sm:font-roboto sm:font-black sm:leading-normal sm:min-h-0 sm:p-0 sm:text-black sm:text-base'>
                                {name}
                            </strong>

                            <div class='collapse-content sm:flex sm:flex-col sm:gap-6 sm:w-full'>
                                {items.map(({ name, links }, jindex) => (
                                    <div
                                        class='sm:flex sm:flex-col sm:gap-4 sm:w-full'
                                        key={jindex}
                                    >
                                        <span class='sm:font-roboto sm:font-medium sm:leading-normal sm:min-h-0 sm:p-0 sm:text-black sm:text-sm'>
                                            {name}
                                        </span>

                                        <ul class='sm:flex sm:flex-col sm:gap-3 sm:items-start sm:w-full'>
                                            {links.map(({ href, name }, kindex) => (
                                                <li class='sm:flex' key={kindex}>
                                                    <a
                                                        class='sm:font-roboto sm:font-normal sm:leading-normal sm:min-h-0 sm:p-0 sm:text-black sm:text-sm'
                                                        href={href}
                                                    >
                                                        {name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu
