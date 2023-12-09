import { JSX } from "preact";
import { forwardRef } from "preact/compat";
import { useContext } from "preact/hooks";
import { Context } from "deco-sites/superepi/components/ui/Tabs/Context/Context.tsx";

export type TabPanelProps = JSX.HTMLAttributes<HTMLDivElement> & {
  value: number;
};

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(({
  value: valueProp,
  ...props
}, ref) => {
  const {
    id,
    value,
  } = useContext(Context);

  return (
    <div
      {...props}
      aria-labelledby={`tab-${valueProp}-${id}`}
      id={`tabpanel-${valueProp}-${id}`}
      hidden={value.value !== valueProp}
      ref={ref}
      role="tabpanel"
      tabIndex={0}
    />
  );
});

export default TabPanel;
