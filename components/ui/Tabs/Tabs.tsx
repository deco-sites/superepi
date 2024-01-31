import { Tab } from '$store/components/ui/Tabs/Tab/Tab.tsx'
import { TabPanel } from '$store/components/ui/Tabs/TabPanel/TabPanel.tsx'
import { TabsJS } from '$store/components/ui/Tabs/TabsJS.tsx'
import { TabsList } from '$store/components/ui/Tabs/TabsList/TabsList.tsx'
import { useId } from '$store/sdk/useId.ts'
import { JSX } from 'preact'
import { forwardRef } from 'preact/compat'

export type TabsProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, 'defaultValue'> & {
    defaultValue?: number
}

export const Base = forwardRef<HTMLDivElement, TabsProps>(({ defaultValue = 0, ...props }, ref) => {
    const id = useId()

    return (
        <>
            <div {...props} id={id} ref={ref} />

            <TabsJS id={id} />
        </>
    )
})

export const Tabs = Object.assign(Base, {
    Tab: Tab,
    TabPanel: TabPanel,
    TabsList: TabsList,
})

export default Tabs
