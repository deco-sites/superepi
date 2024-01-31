import Icon from '$store/components/ui/Icon.tsx'
import Slider from '$store/components/ui/Slider.tsx'
import SliderJS from '$store/components/ui/SliderJS.tsx'
import { clx } from '$store/sdk/clx.ts'
import { useId } from '$store/sdk/useId.ts'
import type { ImageWidget } from 'apps/admin/widgets.ts'
import Image from 'apps/website/components/Image.tsx'

/** @titleBy alt */
export interface Partner {
    /** @description Texto alternativo da logo */
    alt: string
    /** @description Link do parceiro */
    href: string
    /** @description Logo [***Use uam resolução de Wx64 e formato webp para melhor performace] */
    logo: ImageWidget
}

export interface Props {
    /** @description Lista com as parcerias */
    partners: Partner[]
}

export const Partners = ({ partners = [] }: Props) => {
    const id = useId()

    if (partners.length === 0) return null

    return (
        <div class={clx('sm:flex sm:px-6 sm:py-5 sm:w-full', 'lg:py-7')} id={id}>
            <div class='sm:flex sm:items-center sm:gap-3 sm:max-w-[81.25rem] sm:mx-auto sm:w-full'>
                <Slider.PrevButton
                    class={clx(
                        'sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9',
                        'sm:hover:bg-black sm:hover:text-white',
                        'sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black',
                    )}
                >
                    <Icon class='sm:h-4 sm:w-4' id='ChevronLeft' />
                </Slider.PrevButton>

                <Slider class='sm:carousel sm:gap-16 sm:w-full'>
                    {partners.map(({ alt, href, logo }, index) => (
                        <Slider.Item class='sm:carousel-item sm:flex sm:w-fit' index={index}>
                            <a aria-label={`Navegar para ${alt}`} class='sm:flex' href={href}>
                                <Image
                                    alt=''
                                    class={clx(
                                        'sm:duration-300 sm:ease-in-out sm:h-16 sm:object-contain sm:grayscale sm:transition-[filter] sm:w-auto',
                                        'sm:hover:grayscale-0',
                                    )}
                                    height={64}
                                    src={logo}
                                    width={0}
                                />
                            </a>
                        </Slider.Item>
                    ))}
                </Slider>

                <Slider.NextButton
                    class={clx(
                        'sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9',
                        'sm:hover:bg-black sm:hover:text-white',
                        'sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black',
                    )}
                >
                    <Icon class='sm:h-4 sm:w-4' id='ChevronRight' />
                </Slider.NextButton>
            </div>

            <SliderJS rootId={id} />
        </div>
    )
}

export default Partners
