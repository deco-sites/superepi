import {
  ComponentChildren,
  JSX
} from "preact";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export type TabProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  'data-value': number;
};

export type TabPanelProps = JSX.HTMLAttributes<HTMLDivElement> & {
  'data-value': number;
  default?: boolean;
};

export type TabsProps = JSX.HTMLAttributes<HTMLDivElement>;

export type TabsListProps = JSX.HTMLAttributes<HTMLDivElement>;

const Tab = ({
  "data-value": dataValue,
  default: defaultProps = false,
  ...props
}: TabProps) => {
  return (
    <button
      {...props}
      data-active={defaultProps}
      onClick={(event) => {
        event.stopPropagation();

        const target = event.target as HTMLButtonElement;

        const list = target.parentElement;
        if (list === null) return;

        const tab = list.querySelectorAll("button");
        const tabElements = Array.from(tab);

        tabElements.forEach((tab) => {
          if (tab === target) tab.setAttribute("data-active", "true");
          else tab.setAttribute("data-active", "false");
        });

        const tabs = target.closest(`[data-tabs-container]`);
        if (tabs === null) return;

        const panels = tabs.querySelectorAll(`[data-value]`);
        const panelsElements = Array.from(panels);

        console.log(panelsElements);

        panelsElements.forEach((panel) => {
          const attribute = panel.getAttribute("data-value") ?? "0";

          if (parseFloat(attribute) === dataValue) panel.setAttribute("data-active", "true");
          else panel.setAttribute("data-active", "false");
        });

        if (props.onClick !== undefined) props.onClick(event);
      }}
      role="tab"
    />
  );
};

const TabPanel = ({
  default: defaultProps = false,
  ...props
}: TabPanelProps) => {
  return (
    <div
      {...props}
      className={clx(
        "sm:w-full",
        "sm:data-[active=false]:hidden",
        "sm:data-[active=true]:flex",
        props.className as string
      )}
      data-active={defaultProps}
      role="tabpanel"
    />
  );
};

const TabsBase = (props: TabsProps) => {
  return (
    <div
      {...props}
      data-tabs-container
    />
  );
};

const TabsList = (props: TabsListProps) => {
  return (
    <div
      {...props}
      role="tablist"
    >
      {props.children}
    </div>
  );
};

export const Tabs = Object.assign(TabsBase, {
  Tab: Tab,
  TabPanel: TabPanel,
  TabsList: TabsList
});

export default Tabs;