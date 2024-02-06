import {
  Tab,
  TabProps,
} from "$store/components/product/ShelfWithTabs/Tab/Tab.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import Tabs from "$store/components/ui/Tabs/Tabs.tsx";
import Rendering from "$store/islands/Rendering.tsx";
import SliderJS from "$store/islands/ui/SliderJS.tsx";
import { clx } from "$store/sdk/clx.ts";
import { useId } from "$store/sdk/useId.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /** @description Ícone que fica ao lado do título */
  icon?: ImageWidget;
  /** @description Título da sessão */
  heading: string;
  /** @description Listagem das tabs */
  tabs?: TabProps[];
}

export const ShelfWithTabs = ({ icon, heading, tabs = [] }: Props) => {
  const id = useId();

  if (tabs.length === 0) return null;

  return (
    <div class={clx("flex px-6 py-5 w-full", "lg:py-7")} id={id}>
      <div class="flex flex-col gap-8 max-w-page-container mx-auto w-full">
        <div class="flex gap-8 items-center justify-between w-full">
          <div class="flex gap-4 w-full">
            {icon !== undefined && (
              <Image
                alt=""
                class="flex-shrink-0 h-8 object-cover w-8"
                height={32}
                src={icon}
                width={32}
              />
            )}

            <h2
              class={clx(
                "font-roboto font-medium leading-normal tracking-[0.125rem] text-[#000000] text-lg uppercase",
                "lg:leading-normal lg:text-xl",
              )}
            >
              {heading}
            </h2>
          </div>

          <div
            class={clx(
              "hidden flex-shrink-0 gap-8 items-center w-fit",
              "lg:flex",
            )}
          >
            <Slider.PrevButton
              class={clx(
                "bg-transparent border-[0.125rem] border-[#000] duration-300 ease-in-out flex h-9 items-center justify-center pointer-events-auto transition-colors w-9",
                "hover:bg-black hover:text-white",
                "disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black",
              )}
            >
              <Icon class="h-4 w-4" id="ChevronLeft" />
            </Slider.PrevButton>

            <Slider.NextButton
              class={clx(
                "bg-transparent border-[0.125rem] border-[#000] duration-300 ease-in-out flex h-9 items-center justify-center pointer-events-auto transition-colors w-9",
                "hover:bg-black hover:text-white",
                "disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black",
              )}
            >
              <Icon class="h-4 w-4" id="ChevronRight" />
            </Slider.NextButton>
          </div>
        </div>

        <Tabs class="flex flex-col gap-8 w-full" defaultValue={0}>
          <Tabs.TabsList class="flex flex-wrap gap-[0.5rem_1rem] items-center justify-start w-full">
            {tabs.map(({ name }, index) => (
              <Tabs.Tab
                class={clx(
                  "border-b-[0.125rem] border-b-transparent duration-300 ease-in-out font-bold font-roboto leading-normal outline-none text-center text-sm text-[#999999] -tracking-[0.0625rem] transition-colors uppercase",
                  "focus:text-[#FFAB0080]",
                  "aria-selected:text-[#FFAB00] aria-selected:border-b-[#FFAB00]",
                )}
                value={index}
              >
                {name}
              </Tabs.Tab>
            ))}
          </Tabs.TabsList>

          {tabs.map((tab, index) => (
            <Tabs.TabPanel class="w-full" value={index}>
              <Tab {...tab} />
            </Tabs.TabPanel>
          ))}
        </Tabs>
      </div>

      <SliderJS rootId={id} />
    </div>
  );
};

export default function (props: Props) {
  return (
    <Rendering on="visible">
      <ShelfWithTabs {...props} />
    </Rendering>
  );
}
