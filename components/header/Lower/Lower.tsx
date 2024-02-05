import { Props } from '$store/components/header/Header.tsx'
import { MenuDropdown } from '$store/components/header/Lower/MenuDropdown/MenuDropdown.tsx'
import { SuperStores } from '$store/components/header/Lower/SuperStores/SuperStores.tsx'
import Icon from '$store/components/ui/Icon.tsx'
import { clx } from '$store/sdk/clx.ts'

export type LowerProps = Props['lower']

export const Lower = ({ menus = [], nothing }: LowerProps) => {
    if (menus.length === 0) return null

    return (
        <div
            class={clx(
                'carousel hidden gap-4 items-stretch max-w-full min-w-full overflow-y-hidden w-fit',
                'lg:flex lg:gap-[1.875rem]',
            )}
        >
            {menus.map(({ name, href, icon, ...other }) => (
                <div
                    class={clx(
                        'carousel-item dropdown dropdown-hover flex justify-center items-center',
                        '[&_div]:pointer-events-auto',
                    )}
                    style={{ position: 'initial' }}
                >
                    {href ? (
                        <span class='hover:border-b-[#f8a531] border-b-4 border-b-transparent mb-2 pb-1 duration-300 ease-in-out flex font-medium font-roboto gap-1 items-center leading-normal text-[#000] text-sm transition-colors'>
                            {icon !== undefined && icon !== 'ArrowsPointingOut' && (
                                <Icon id={icon} width={10} height={10} />
                            )}

                            {name}
                        </span>
                    ) : (
                        <a
                            class='hover:border-b-[#f8a531] border-b-4 border-b-transparent mb-2 pb-1 duration-300 ease-in-out flex font-medium font-roboto gap-1 items-center leading-normal text-[#000] text-sm transition-colors'
                            href={href}
                        >
                            {icon !== undefined && icon !== 'ArrowsPointingOut' && (
                                <Icon id={icon} width={10} height={10} />
                            )}

                            {name}
                        </a>
                    )}

                    <div
                        class={clx(
                            'bg-[#f0f0f0] dropdown-content absolute bottom-0 h-fit left-0 max-h-[calc(100vh-14.25rem)] top-full overflow-y-auto pointer-events-none px-6 w-full',
                            'data-[background=true]:focus:bg-[#00000080]',
                        )}
                        data-size='large'
                        tabIndex={0}
                    >
                        <MenuDropdown {...other} name={name} />
                    </div>
                </div>
            ))}

            <SuperStores />
        </div>
    )
}

export default Lower
