import { clx } from '$store/sdk/clx.ts'
import Image from 'apps/website/components/Image.tsx'

export const SuperStores = () => {
    return (
        <div
            class={clx(
                'carousel-item dropdown dropdown-hover ml-auto',
                '[&_div]:pointer-events-auto',
            )}
            style={{ position: 'initial' }}
        >
            <div
                class='bg-[#000] flex flex-shrink-0 gap-1 h-8 items-center px-2'
                role='button'
                tabIndex={0}
            >
                <Image
                    alt=''
                    class='h-4 object-contain w-4'
                    height={16}
                    src='/selo-epi.png'
                    width={0}
                />

                <span class='font-medium font-roboto leading-normal text-white text-sm whitespace-nowrap'>
                    Super <span class='text-[#F8A531]'>Lojas</span>
                </span>
            </div>

            <div
                class={clx(
                    'dropdown-content absolute bottom-0 h-fit left-0 top-full pointer-events-none px-6 w-full',
                    'data-[background=true]:focus:bg-[#00000080]',
                )}
                data-size='large'
                tabIndex={0}
            >
                <div class='flex justify-end max-w-page-container mx-auto relative w-full'>
                    <a class='flex w-fit' href='/super-lojas'>
                        <Image
                            alt=''
                            class='aspect-[300/200] max-w-[18.75rem] object-cover w-full'
                            height={200}
                            src='/seal.webp'
                            width={0}
                        />
                    </a>

                    <div class='absolute bg-[#000000bf] h-[100vh] left-1/2 top-0 -translate-x-1/2 w-[100vw] -z-10' />
                </div>
            </div>
        </div>
    )
}

export default SuperStores
