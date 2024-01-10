import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export type TabsJSProps = {
  defaultValue?: number;
  id: string;
};

export const TabsJS = ({
  defaultValue,
  id,
}: TabsJSProps) => {
  const value = useSignal(0);

  useEffect(() => {
    value.value = defaultValue ?? 0;

    const container = document.querySelector(`#${id}`) as HTMLDivElement;
    if (container === null) return;

    const tablist = container.querySelector(
      '[role="tablist"]',
    ) as HTMLDivElement;
    if (tablist === null) return;

    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));

    tabs.forEach((tab, index) => {
      const element = tab as HTMLButtonElement;

      element.addEventListener("click", () => value.value = index);
    });
  }, []);

  useEffect(() => {
    const container = document.querySelector(`#${id}`) as HTMLDivElement;
    if (container === null) return;

    const tabpanels = Array.from(
      container.querySelectorAll('[role="tabpanel"]'),
    );

    tabpanels.forEach((tabpanel, index) => {
      const element = tabpanel as HTMLDivElement;

      if (value.value === index) element.removeAttribute("hidden");
      else element.setAttribute("hidden", "true");
    });
  }, [value.value]);

  return null;
};

export default TabsJS;
