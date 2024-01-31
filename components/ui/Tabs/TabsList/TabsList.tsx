import { JSX } from 'preact'
import { forwardRef } from 'preact/compat'

export type ListProps = JSX.HTMLAttributes<HTMLDivElement> & {}

export const TabsList = forwardRef<HTMLDivElement, ListProps>((props, ref) => {
    return <div {...props} role='tablist' ref={ref} tabIndex={-1} />
})

export default TabsList
