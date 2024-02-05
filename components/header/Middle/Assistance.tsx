import { Props } from '$store/components/header/Header.tsx'
import { Widget, WidgetProps } from './Widget.tsx'
import { clx } from '$store/sdk/clx.ts'

export type AssistanceProps = {
    assistance: Props['middle']['assistance']
}

export const Assistance = ({ assistance }: AssistanceProps) => {
    const { content, icon, list, title } = assistance

    return (
        <div class='dropdown dropdown-hover sm:w-fit'>
            <div class='sm:flex' role='button' tabIndex={0}>
                <Widget content={content} icon={icon} title={title} />
            </div>

            <div
                class='dropdown-content sm:bg-white sm:border-[0.0625rem] sm:border-[#f1f1f1] sm:flex sm:flex-col sm:gap-3 sm:left-1/2 sm:max-w-[18.75rem] sm:p-6 sm:text-center sm:-translate-x-1/2 sm:w-[100vw] sm:z-50'
                tabIndex={0}
            >
                <strong class='sm:font-bold sm:font-roboto sm:leading-normal sm:text-xl sm:text-[#151515]'>
                    {list.title}
                </strong>

                <ul class='sm:flex sm:flex-col sm:gap-3 sm:w-full'>
                    {list.items.map(({ border, content, href }, index) => (
                        <li class='sm:flex sm:w-full'>
                            <a
                                class={clx(
                                    'sm:font-roboto sm:font-normal sm:leading-tight sm:p-3 sm:text-[#333] sm:text-sm sm:w-full',
                                    'sm:[&_strong]:font-bold',
                                    border === true && 'sm:border-[#808080] sm:border-[0.0625rem]',
                                    href === undefined && 'sm:cursor-text',
                                    href !== undefined && 'sm:cursor-pointer',
                                )}
                                dangerouslySetInnerHTML={{ __html: content }}
                                href={href}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Assistance
