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
        <a {...props} class='flex gap-3 items-center max-w-full w-fit'>
            <Image
                alt=''
                class='h-8 object-contain w-8'
                height={32}
                loading='eager'
                src={icon}
                width={32}
            />

            <div class='flex flex-col'>
                <strong class='font-bold font-roboto leading-normal text-xs text-black'>
                    {title}
                </strong>

                <span class='font-normal font-roboto leading-normal text-xs text-black'>
                    {content}
                </span>
            </div>
        </a>
    )
}

export default Widget
