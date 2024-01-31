import { asset } from '$fresh/runtime.ts'
import Icon from '$store/components/ui/Icon.tsx'
import useModal from '$store/hooks/useModal.tsx'
import { invoke } from '$store/runtime.ts'
import { clx } from '$store/sdk/clx.ts'
import { useSignal } from '@preact/signals'
import Image from 'apps/website/components/Image.tsx'
import { useEffect } from 'preact/hooks'

type Props = {
    sku: string
    productId: string
}

export default function ({ sku, productId }: Props) {
    const modal = useModal()

    const paymentMethods = useSignal('')

    useEffect(() => {
        invoke['deco-sites/storefront'].loaders
            .getPaymentMethods({
                sku,
                productId,
            })
            .then(data => {
                paymentMethods.value = data
            })
    }, [])

    return (
        <>
            <modal.Modal class='fixed inset-0 z-50 bg-black/80 w-full h-full justify-center items-center'>
                <modal.Toggle class='w-full h-full absolute inset-0' />
                <div class='p-5 bg-[#f4f4f4] relative max-w-[600px] w-full max-h-full md:max-h-[95%] overflow-y-auto overscroll-contain'>
                    <modal.Toggle class='absolute top-0 right-0 w-9 h-9 bg-[#ffab00] hover:bg-[#333] transition-colors text-3xl font-bold text-white flex justify-center items-center cursor-pointer'>
                        ×
                    </modal.Toggle>
                    <div
                        dangerouslySetInnerHTML={{ __html: paymentMethods.value }}
                        class={clx(
                            '[&_.wd-title]:text-3xl [&_.wd-title]:font-bold [&_.wd-title]:tracking-[-1px] [&_.wd-title]:text-[#333] [&_.wd-title]:mb-5',
                            '[&_.wd-subtitle]:hidden',
                            '[&_th]:flex [&_th]:items-center [&_th]:gap-4 [&_th]:text-[#151515] [&_th]:font-bold [&_th]:text-sm [&_th]:tracking-[-0.65px] [&_th]:py-3',
                            '[&_td]:px-16 [&_td]:tracking-[-0.65px] [&_td]:text-sm [&_td]:text-[#999] [&_td]:leading-[1.05]',
                        )}
                    />
                </div>
            </modal.Modal>
            <modal.Toggle class='flex items-center gap-2 cursor-pointer w-full'>
                <img
                    src='/image/payment-method.avif'
                    alt='Formas de pagamento'
                    width={23}
                    height={14}
                    loading='lazy'
                />

                <span class='underline text-[#999999] text-xs'>Formas de pagamento</span>
            </modal.Toggle>
        </>
    )
}
