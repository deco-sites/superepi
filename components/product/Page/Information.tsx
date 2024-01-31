'use client'

import Icon from '$store/components/ui/Icon.tsx'
import useModal from '$store/hooks/useModal.tsx'
import { rawProduct } from '$store/mocked-pdp.ts'
import { useOffer } from '$store/sdk/useOffer.ts'
import { Product } from 'apps/commerce/types.ts'

interface Props {
    product: Product
}

export const ProductInfo = ({ product }: Props) => {
    const { offers, isVariantOf, additionalProperty = [] } = product

    const name = isVariantOf?.name ?? product.name
    const description =
        isVariantOf?.description || product.description || rawProduct.Model.Descriptions[1].Value
    const { availability } = useOffer(offers)

    const showMetadatas = new Set(['Modelo', 'Conteúdo', 'Marca', 'Referência'])
    const metadatas = rawProduct.Model.ExtendedMetadatas.map(({ Name, Value }) => [
        Name,
        Value,
    ]).filter(([k]) => showMetadatas.has(k))

    const fichaComercial = rawProduct.Model.ExtendedMetadatas.find(
        i => i.Name === 'Ficha Comercial',
    )?.Value

    const CA = rawProduct.Model.ExtendedMetadatas.find(i => i.Name === 'ConsultaCA')?.Value
    const video = rawProduct.Model.ExtendedMetadatas.find(i => i.Name === 'Video')?.Value

    const fichaComercialModal = useModal()
    const videoModal = useModal()

    console.log(metadatas)
    console.log(rawProduct.Model.ExtendedMetadatas.map(i => i.Name as string))

    return (
        <div class='flex flex-col gap-5 w-full lg:max-w-[29%]'>
            {fichaComercial && (
                <fichaComercialModal.Modal class='fixed inset-0 z-50 bg-black/80 w-full h-full justify-center items-center'>
                    <fichaComercialModal.Toggle class='w-full h-full absolute inset-0' />
                    <div class='p-5 bg-[#f4f4f4] relative'>
                        <fichaComercialModal.Toggle class='absolute top-0 right-0 w-9 h-9 bg-[#ffab00] hover:bg-[#333] transition-colors text-3xl font-bold text-white flex justify-center items-center cursor-pointer'>
                            ×
                        </fichaComercialModal.Toggle>
                        <iframe
                            src={fichaComercial}
                            width={640}
                            height={780}
                            title={product.name}
                            loading='lazy'
                        />
                    </div>
                </fichaComercialModal.Modal>
            )}

            {video && (
                <videoModal.Modal class='fixed inset-0 z-50 bg-black/80 w-full h-full justify-center items-center'>
                    <videoModal.Toggle class='w-full h-full absolute inset-0' />
                    <div class='p-5 bg-[#f4f4f4] relative'>
                        <videoModal.Toggle class='absolute top-0 right-0 w-9 h-9 bg-[#ffab00] hover:bg-[#333] transition-colors text-3xl font-bold text-white flex justify-center items-center cursor-pointer'>
                            ×
                        </videoModal.Toggle>
                        <div dangerouslySetInnerHTML={{ __html: video }} />
                    </div>
                </videoModal.Modal>
            )}

            <h1 class='font-roboto font-medium leading-tight text-[#151515] text-xl -tracking-[1px]'>
                {name}
            </h1>

            <ul class='gap-3 grid grid-cols-2 w-full'>
                {[...metadatas, ['Marca', product.brand?.name as string]]
                    .sort(
                        ([a], [b]) => [...showMetadatas].indexOf(a) - [...showMetadatas].indexOf(b),
                    )
                    .map(([k, v]) => (
                        <li class='font-roboto font-normal leading-normal text-xs text-[#151515]'>
                            <strong class='font-bold'>{k}:</strong> {v}
                        </li>
                    ))}

                <li class='font-roboto font-normal leading-normal text-xs text-[#151515]'>
                    <strong class='font-bold'>Disponibilidade:</strong>{' '}
                    {availability === 'https://schema.org/InStock' ? 'Em estoque' : 'Indisponível'}
                </li>
            </ul>

            {description && (
                <div
                    id='short-description'
                    class='font-normal font-roboto leading-normal text-[13px] text-[#212529]'
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            )}

            <div class='flex flex-col gap-2'>
                <a href='#description' class='text-[#151515] text-sm font-medium italic'>
                    <span class='underline'>Leia mais</span> +
                </a>

                {fichaComercial && (
                    <div class='font-bold text-[#151515] flex items-center gap-2.5'>
                        <span>Ficha Comercial:</span>
                        <fichaComercialModal.Toggle class='text-sm font-medium border-2 border-black py-1 px-5 flex justify-center items-center cursor-pointer transition-colors hover:bg-black hover:text-white'>
                            Consulta
                        </fichaComercialModal.Toggle>
                    </div>
                )}

                {CA && (
                    <div class='flex flex-wrap gap-2 items-center justify-start w-full'>
                        <strong class='font-bold font-roboto leading-normal text-sm text-[#151515]'>
                            CA: {CA}
                        </strong>

                        <a
                            class='border-[#ffab00] border-[0.125rem] flex font-roboto font-bold leading-normal items-center justify-center min-h-8 px-1 text-sm text-[#333]'
                            href={`https://consultaca.com/${CA}`}
                            target='_blank'
                            rel='noreferrer'
                        >
                            Consultar CA
                        </a>

                        {/* <a
                        aria-label='Compartilhar no Facebook'
                        class='bg-[#007bff] flex h-fit text-white w-fit'
                        href={`https://www.addtoany.com/add_to/facebook?linkurl=${location}`}
                    >
                        <Icon class='h-8 w-8' id='Facebook' />
                    </a> */}
                    </div>
                )}

                {video && (
                    <div class='flex items-center gap-2 mt-3'>
                        <videoModal.Toggle class='cursor-pointer'>
                            <Icon id='PDP-YT' width={32} height={32} />
                        </videoModal.Toggle>
                        <span class='text-[#333] font-bold max-w-[200px] text-sm'>
                            <videoModal.Toggle class='text-[red] underline cursor-pointer'>
                                Assista ao video
                            </videoModal.Toggle>{' '}
                            explicativo deste produto
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductInfo
