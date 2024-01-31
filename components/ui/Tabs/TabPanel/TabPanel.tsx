import { JSX } from 'preact'
import { forwardRef } from 'preact/compat'

export type TabPanelProps = JSX.HTMLAttributes<HTMLDivElement> & {
    value: number
}

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
    ({ value: valueProp, ...props }, ref) => {
        return <div {...props} hidden ref={ref} role='tabpanel' tabIndex={0} />
    },
)

export default TabPanel
