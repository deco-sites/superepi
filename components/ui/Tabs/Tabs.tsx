import { JSX } from "preact";
import { forwardRef } from "preact/compat";
import { Tab } from "deco-sites/superepi/components/ui/Tabs/Tab/Tab.tsx";
import { TabPanel } from "deco-sites/superepi/components/ui/Tabs/TabPanel/TabPanel.tsx";
import { TabsList } from "deco-sites/superepi/components/ui/Tabs/TabsList/TabsList.tsx";
import { TabsJS } from "deco-sites/superepi/components/ui/Tabs/TabsJS.tsx";
import { useId } from "deco-sites/superepi/sdk/useId.ts";

export type TabsProps =
  & Omit<JSX.HTMLAttributes<HTMLDivElement>, "defaultValue">
  & {
    defaultValue?: number;
  };

export const Base = forwardRef<HTMLDivElement, TabsProps>(({
  defaultValue = 0,
  ...props
}, ref) => {
  const id = useId();

  return (<>
    <div
      {...props}
      id={id}
      ref={ref}
    />

    <TabsJS id={id} />
  </>);
});

export const Tabs = Object.assign(Base, {
  Tab: Tab,
  TabPanel: TabPanel,
  TabsList: TabsList,
});

export default Tabs;
