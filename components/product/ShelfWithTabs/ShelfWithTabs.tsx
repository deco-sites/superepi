import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import {
  Tab,
  TabProps
} from "deco-sites/superepi/components/product/ShelfWithTabs/Tab/Tab.tsx";
import { Tabs } from "deco-sites/superepi/components/ui/Tabs/Tabs.tsx";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";
import Slider from "deco-sites/superepi/components/ui/Slider.tsx";
import SliderJS from "deco-sites/superepi/components/ui/SliderJS.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";
import { useId } from "deco-sites/superepi/sdk/useId.ts";

export interface Props {
  /** @description Ícone que fica ao lado do título */
  icon?: ImageWidget;
  /** @description Título da sessão */
  heading: string;
  /** @description Listagem das tabs */
  tabs?: TabProps[];
};

export const ShelfWithTabs = ({
  icon,
  heading,
  tabs = []
}: Props) => {
  const id = useId();

  if (tabs.length === 0) return null;

  return (
    <div
      className={clx(
        "sm:flex sm:px-6 sm:py-5 sm:w-full",
        "lg:py-7"
      )}
      id={id}
    >
      <div className="sm:flex sm:flex-col sm:gap-8 sm:max-w-page-container sm:mx-auto sm:w-full">
        <div className="sm:flex sm:gap-8 sm:items-center sm:justify-between sm:w-full">
          <div className="sm:flex sm:gap-4 sm:w-full">
            {icon !== undefined && (
              <Image
                alt=""
                className="sm:flex-shrink-0 sm:h-8 sm:object-cover sm:w-8"
                height={32}
                src={icon}
                width={32}
              />
            )}

            <h2 className={clx(
              "sm:font-roboto sm:font-medium sm:leading-normal sm:tracking-[0.125rem] sm:text-[#000000] sm:text-lg sm:uppercase",
              "lg:leading-normal lg:text-xl"
            )}>
              {heading}
            </h2>
          </div>

          <div className={clx(
            "sm:hidden sm:flex-shrink-0 sm:gap-8 sm:items-center w-fit",
            "lg:flex"
          )}>
            <Slider.PrevButton className={clx(
              "sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9",
              "sm:hover:bg-black sm:hover:text-white",
              "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black"
            )}>
              <Icon
                className="sm:h-4 sm:w-4"
                id="ChevronLeft"
              />
            </Slider.PrevButton>

            <Slider.NextButton className={clx(
              "sm:bg-transparent sm:border-[0.125rem] sm:border-[#000] sm:duration-300 sm:ease-in-out sm:flex sm:h-9 sm:items-center sm:justify-center sm:pointer-events-auto sm:transition-colors sm:w-9",
              "sm:hover:bg-black sm:hover:text-white",
              "sm:disabled:cursor-not-allowed sm:disabled:bg-transparent sm:disabled:text-black"
            )}>
              <Icon
                className="sm:h-4 sm:w-4"
                id="ChevronRight"
              />
            </Slider.NextButton>
          </div>
        </div>

        <Tabs
          className="sm:flex sm:flex-col sm:gap-8 sm:w-full"
          defaultValue={0}
        >
          <Tabs.TabsList className="sm:flex sm:flex-wrap sm:gap-[0.5rem_1rem] sm:items-center sm:justify-start sm:w-full">
            {tabs.map(({ name }, index) => (
              <Tabs.Tab
                className={clx(
                  "sm:border-b-[0.125rem] sm:border-b-transparent sm:duration-300 sm:ease-in-out sm:font-bold sm:font-roboto sm:leading-normal sm:outline-none sm:text-center sm:text-sm sm:text-[#999999] sm:-tracking-[0.0625rem] sm:transition-colors sm:uppercase",
                  "sm:focus:text-[#FFAB0080]",
                  "sm:aria-selected:text-[#FFAB00] sm:aria-selected:border-b-[#FFAB00]"
                )}
                key={index}
                value={index}
              >
                {name}
              </Tabs.Tab>
            ))}
          </Tabs.TabsList>

          {tabs.map((tab, index) => (
            <Tabs.TabPanel
              className="sm:w-full"
              key={index}
              value={index}
            >
              <Tab
                {...tab}
                key={index}
              />
            </Tabs.TabPanel>
          ))}
        </Tabs>
      </div>

      <SliderJS rootId={id} />
    </div>
  );
};

export default ShelfWithTabs;