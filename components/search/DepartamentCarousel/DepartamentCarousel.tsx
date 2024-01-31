'use client'

import { CarouselsDepartamentItem } from '$store/components/search/SearchResult.tsx'
import Icon from '$store/components/ui/Icon.tsx'
import Slider from '$store/components/ui/Slider.tsx'
import SliderJS from '$store/components/ui/SliderJS.tsx'
import { clx } from '$store/sdk/clx.ts'
import { useId } from '$store/sdk/useId.ts'
import Image from 'apps/website/components/Image.tsx'

export type DepartamentCarouselProps = {
    carouselDepartament: CarouselsDepartamentItem[]
}

export const DepartamentCarousel = ({ carouselDepartament }: DepartamentCarouselProps) => {
    const id = useId()

    return (
        <div
            class={clx(
                'sm:gap-6 sm:grid sm:grid-cols-1 sm:items-center sm:max-w-page-container sm:mx-auto sm:w-full',
                'lg:grid-cols-[auto_1fr_auto]',
            )}
            id={id}
        >
            <Slider.PrevButton
                class={clx(
                    'sm:bg-transparent sm:border-[0.125rem] sm:border-[#000000] sm:duration-300 sm:ease-in-out sm:h-9 sm:hidden sm:items-center sm:justify-center sm:pointer-events-auto sm:text-[#000000] sm:transition-colors sm:w-9',
                    'sm:hover:bg-black sm:hover:text-white',
                    'sm:disabled:cursor-not-allowed sm:disabled:bg-transparent',
                    'lg:flex',
                )}
            >
                <Icon class='sm:h-4 sm:w-4' id='ChevronLeft' />
            </Slider.PrevButton>

            <Slider class='carousel sm:gap-6 sm:items-stretch sm:w-full' role='list'>
                {carouselDepartament.map(({ href, image, name }, index) => (
                    <Slider.Item
                        class='carousel-item sm:h-auto sm:w-32'
                        index={index}
                        role='listitem'
                    >
                        <a
                            class='sm:flex sm:flex-col sm:gap-4 sm:h-full sm:items-center sm:justify-start sm:w-full'
                            href={href}
                        >
                            <Image
                                alt=''
                                class='sm:border-[0.125rem] sm:border-[#f0f0f0] sm:h-32 sm:object-cover sm:rounded-full sm:w-full'
                                height={130}
                                src={image}
                                width={130}
                            />

                            <span class='sm:font-roboto sm:font-normal sm:text-[#151515] sm:text-sm sm:text-center'>
                                {name}
                            </span>
                        </a>
                    </Slider.Item>
                ))}
            </Slider>

            <Slider.NextButton
                class={clx(
                    'sm:bg-transparent sm:border-[0.125rem] sm:border-[#000000] sm:duration-300 sm:ease-in-out sm:h-9 sm:hidden sm:items-center sm:justify-center sm:pointer-events-auto sm:text-[#000000] sm:transition-colors sm:w-9',
                    'sm:hover:bg-black sm:hover:text-white',
                    'sm:disabled:cursor-not-allowed sm:disabled:bg-transparent',
                    'lg:flex',
                )}
            >
                <Icon class='sm:h-4 sm:w-4' id='ChevronRight' />
            </Slider.NextButton>

            <SliderJS rootId={id} />
        </div>
    )
}

export default DepartamentCarousel
