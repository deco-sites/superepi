import { clx } from '$store/sdk/clx.ts'
import { HTMLWidget, ImageWidget } from 'apps/admin/widgets.ts'
import Image from 'apps/website/components/Image.tsx'

/** @titleBy name */
export interface Seal {
    /** @description Ícone do selo [***Use uma imagem 64x64 e formato webp para melhor performace] */
    icon: ImageWidget
    /** @description Link do selo */
    href: string
    /** @description Nome do selo */
    name: HTMLWidget
}

export interface Props {
    seals?: Seal[]
}

export const Seals = ({ seals = [] }: Props) => {
    if (seals.length === 0) return null

    return (
        <div class={clx('sm:flex sm:px-4 sm:py-5 sm:w-full', 'lg:py-7')}>
            <div class='sm:flex sm:max-w-page-container sm:mx-auto sm:w-full'>
                <ul
                    class={clx(
                        'sm:flex sm:flex-wrap sm:gap-4 sm:items-center sm:justify-center sm:w-full',
                        'lg:gap-8',
                    )}
                >
                    {seals.map(({ icon, href, name }, index) => (
                        <li class='sm:flex'>
                            <a class='sm:flex sm:items-center sm:gap-2' href={href}>
                                <Image
                                    alt=''
                                    class='sm:h-6 sm:object-contain sm:w-6'
                                    height={32}
                                    src={icon}
                                    width={0}
                                />

                                <div
                                    class={clx(
                                        'sm:font-normal sm:font-roboto sm:leading-normal sm:text-black sm:text-sm',
                                        'sm:[&_strong]:font-bold',
                                    )}
                                    dangerouslySetInnerHTML={{ __html: name }}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Seals
