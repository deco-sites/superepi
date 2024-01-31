import { Props } from '$store/components/header/Header.tsx'
import { Assistance } from '$store/components/header/Middle/Assistance/Assistance.tsx'
import { Cart } from '$store/components/header/Middle/Cart/Cart.tsx'
import { Menu } from '$store/components/header/Middle/Menu/Menu.tsx'
/* import { Searchbar } from "$store/components/header/Middle/Searchbar/Searchbar.tsx"; */
import { Widget } from '$store/components/header/Middle/Widget/Widget.tsx'
import Searchbar, { Props as SearchbarProps } from '$store/components/search/Searchbar.tsx'
import { clx } from '$store/sdk/clx.ts'
import Image from 'apps/website/components/Image.tsx'

export type MiddleProps = {
    lower: Props['lower']
    middle: Props['middle']
    searchbar?: SearchbarProps
}

export const Middle = ({ lower, middle, searchbar }: MiddleProps) => {
    const { assistance, cart, logo, visitant } = middle

    return (
        <div
            class={clx(
                'sm:gap-4 sm:grid sm:grid-cols-[auto_1fr] sm:items-center sm:min-h-[6rem] sm:py-5 sm:w-full',
                'lg:gap-8 lg:grid-cols-[auto_1fr_auto]',
            )}
        >
            <a class='/' href='/'>
                <Image
                    alt={logo.alt}
                    class='sm:h-[3.125rem] sm:max-w-full sm:object-contain sm:order-1 sm:w-auto'
                    height={50}
                    loading='eager'
                    fit='contain'
                    src={logo.src}
                    width={170}
                />
            </a>

            {searchbar !== undefined && (
                <div
                    class={clx(
                        'sm:col-span-2 sm:flex sm:order-3 sm:w-full',
                        'lg:col-span-1 lg:order-2',
                    )}
                >
                    <Searchbar {...searchbar} />
                </div>
            )}

            <div
                class={clx(
                    'sm:hidden sm:flex-wrap sm:gap-[1rem_1rem] justify-end sm:order-2 sm:w-full',
                    'lg:flex lg:gap-[1rem_2rem] lg:order-3',
                )}
            >
                <Assistance assistance={assistance} />

                <Widget {...visitant} aria-label='Ir para página de login' href='/login' />

                <Cart content='R$ 0,00' icon={cart} title='0 items' />
            </div>

            <Menu lower={lower} />
        </div>
    )
}

export default Middle
