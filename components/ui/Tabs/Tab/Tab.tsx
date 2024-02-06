import { JSX } from "preact";
import { forwardRef } from "preact/compat";

export type TabProps = Omit<JSX.HTMLAttributes<HTMLButtonElement>, "value"> & {
  value: number;
};

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ value: valueProp, ...props }, ref) => {
    return <button {...props} data-value={valueProp} ref={ref} role="tab" />;
  },
);

export default Tab;
