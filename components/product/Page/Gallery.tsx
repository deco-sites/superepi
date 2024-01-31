import Icon from '$store/components/ui/Icon.tsx'
import Slider from '$store/components/ui/PDPSlider/PDPSlider.tsx'
import { rawProduct } from '$store/mocked-pdp.ts'
import { useId } from '$store/sdk/useId.ts'
import { useSignal } from '@preact/signals'
import { Product, ProductDetailsPage, ProductGroup } from 'apps/commerce/types.ts'
import Image from 'apps/website/components/Image.tsx'

export type GalleryProps = {
    product: Product
}

export const Gallery = ({ product }: GalleryProps) => {
    const id = useId()

    const image = product.image ?? []

    const mediaGroups = rawProduct.Model.MediaGroups

    const CDN = 'https://d3bhvz7al37iy6.cloudfront.net'

    const smallImages = mediaGroups.map(({ Small: { MediaPath } }) => CDN + MediaPath)
    const mediumImages = mediaGroups.map(({ Medium: { MediaPath } }) => CDN + MediaPath)

    console.log(smallImages)

    return (
        <div class='flex flex-col gap-2 w-full max-w-[505px]'>
            {/* <ul class='carousel border-[#e9e8e8] border-[0.125rem] gap-2 w-full'>
                {mediumImages.map((url, index) => (
                    <li class='carousel-item aspect-square flex w-full' id={`${id}-${index}`}>
                        <Image
                            alt=''
                            class='h-full object-cover w-full'
                            height={450}
                            src={url ?? ''}
                            width={450}
                        />
                    </li>
                ))}
            </ul> */}
            <Slider.Root id={id}>
                <Slider.Carousel
                    id={id}
                    class='carousel border-[#e9e8e8] border-[0.125rem] gap-2 w-full'
                >
                    {[...mediumImages, ...mediumImages, ...mediumImages].map((url, index) => (
                        <Slider.Item index={index} class='carousel-item flex w-full'>
                            <Image
                                alt=''
                                class='h-full object-cover w-full'
                                height={390}
                                src={url ?? ''}
                                width={460}
                            />
                        </Slider.Item>
                    ))}
                </Slider.Carousel>
                <div class='flex items-center gap-2'>
                    <Slider.PrevButton
                        id={id}
                        class='shrink-0 border-2 border-black w-6 h-6 group hover:bg-black transition-colors flex justify-center items-center cursor-pointer'
                    >
                        <Icon
                            class='text-black group-hover:text-white'
                            id='ChevronLeftPDPGallery'
                            width={10}
                            height={16}
                        />
                    </Slider.PrevButton>
                    <ul class='carousel gap-2 w-full'>
                        {[...smallImages, ...smallImages, ...smallImages].map((url, index) => (
                            <Slider.Dot index={index}>
                                <div class='carousel-item border-[#e9e8e8] border-[0.125rem] aspect-square flex w-[6.25rem] group-data-[active]:border-black'>
                                    <Image
                                        alt=''
                                        class='h-full object-cover w-full'
                                        height={100}
                                        src={url ?? ''}
                                        width={100}
                                    />
                                </div>
                            </Slider.Dot>
                        ))}
                    </ul>
                    <Slider.NextButton
                        id={id}
                        class='shrink-0 border-2 border-black w-6 h-6 group hover:bg-black transition-colors flex justify-center items-center cursor-pointer'
                    >
                        <Icon
                            class='text-black group-hover:text-white rotate-180'
                            id='ChevronLeftPDPGallery'
                            width={10}
                            height={16}
                        />
                    </Slider.NextButton>
                </div>
            </Slider.Root>
        </div>
    )
}

export default Gallery
