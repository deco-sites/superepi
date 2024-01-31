import { ImageWidget } from 'apps/admin/widgets.ts'
import Image from 'apps/website/components/Image.tsx'
import { JSX } from 'preact'

export type WidgetProps = JSX.HTMLAttributes<HTMLAnchorElement> & {
    /** @description Icone lateral [***Use uma resolução de 64x64 e formato webp para melhor performace] */
    icon: ImageWidget
    /** @description Título do card */
    title: string
    /** @description Conteúdo textual do card */
    content: string
}

export const Widget = ({ content, icon, title, ...props }: WidgetProps) => {
    return (
        <a {...props} class='sm:flex sm:gap-3 sm:items-center sm:max-w-full sm:w-fit'>
            <Image
                alt=''
                class='sm:h-8 sm:object-contain sm:w-8'
                height={32}
                loading='eager'
                src={icon}
                width={32}
            />

            <div class='sm:flex sm:flex-col'>
                <strong class='sm:font-bold sm:font-roboto sm:leading-normal sm:text-xs sm:text-black'>
                    {title}
                </strong>

                <span class='sm:font-normal sm:font-roboto sm:leading-normal sm:text-xs sm:text-black'>
                    {content}
                </span>
            </div>
        </a>
    )
}

export default Widget
