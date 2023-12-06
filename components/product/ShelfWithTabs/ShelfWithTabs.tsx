import { TabProps } from "deco-sites/superepi/components/product/ShelfWithTabs/Tab/Tab.tsx";
import { Tabs } from "deco-sites/superepi/components/ui/Tabs/Tabs.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";
import TabPanel from "../../ui/Tabs/TabPanel/TabPanel.tsx";

export interface Props {
  /** @description Título da sessão */
  heading: string;
  /** @description Listagem das tabs */
  tabs?: TabProps[];
};

export const ShelfWithTabs = ({
  heading,
  tabs = []
}: Props) => {
  if (tabs.length === 0) return null;

  return (
    <div className="sm:flex sm:px-6 sm:w-full">
      <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
        <h2 className={clx(
          "sm:font-roboto sm:font-medium sm:leading-normal sm:tracking-[0.125rem] sm:text-[#000000] sm:text-lg sm:uppercase",
          "lg:leading-normal lg:text-xl"
        )}>
          {heading}
        </h2>

        <Tabs defaultValue={0}>
          <Tabs.TabsList>
            {tabs.map(({ name }, index) => (
              <Tabs.Tab
                key={index}
                value={index}
              >
                {name}
              </Tabs.Tab>
            ))}
          </Tabs.TabsList>

          {tabs.map((tab, index) => (
            <TabPanel
              key={index}
              value={index}
            >
              {index} Tab
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ShelfWithTabs;