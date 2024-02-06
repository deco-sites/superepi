import { Props } from "$store/components/header/Header.tsx";
import { Tabs } from "$store/components/ui/Tabs/Tabs.tsx";
import { clx } from "$store/sdk/clx.ts";
import Image from "apps/website/components/Image.tsx";

export type MenuDropdownProps = Props["lower"]["menus"][number];

export const MenuDropdown = (
  { items, name, tabs = false, icon }: MenuDropdownProps,
) => {
  return (
    <div
      class={clx(
        "bg-[#f0f0f0] grid grid-cols-1 max-w-page-container mx-auto w-full",
      )}
    >
      <Tabs
        class={clx("grid grid-cols-1 w-full", "lg:grid-cols-5")}
        defaultValue={0}
      >
        {tabs === true && (
          <Tabs.TabsList
            class={clx(
              "bg-white flex flex-col gap-4 items-center p-4 relative w-full",
              "lg:items-start lg:p-12 lg:pl-0",
            )}
          >
            {items.map(({ name }, index) => (
              <Tabs.Tab
                class={clx(
                  "duration-300 ease-in-out font-medium font-roboto leading-normal max-w-full text-sm text-center text-[#151515] transition-colors",
                  "hover:text-[#f8a531] hover:underline",
                  "lg:text-left",
                )}
                value={index}
              >
                {name}
              </Tabs.Tab>
            ))}

            <div
              class={clx(
                "absolute bg-[#fff] h-full left-1/2 top-0 -translate-x-1/2 w-[100vw]",
                "lg:left-0 lg:-translate-x-full",
              )}
            />
          </Tabs.TabsList>
        )}

        {items.map(({ banner, href, links }, index) => (
          <Tabs.TabPanel
            class={clx(
              "w-full",
              tabs === true && "lg:col-span-4",
              tabs === false && "lg:col-span-5",
            )}
            value={index}
          >
            <div
              class={clx(
                "gap-4 grid grid-cols-1 items-center justify-items-center p-4 w-full",
                "lg:items-start lg:p-12 lg:pr-0",
                tabs === true && "lg:grid-cols-4",
                tabs === false && "lg:grid-cols-5 lg:pl-0",
              )}
            >
              <Image
                alt={banner.alt}
                class={clx(
                  "aspect-[550/330] h-auto max-w-[34.375rem] object-cover w-full",
                  "lg:order-2 lg:col-span-2",
                )}
                height={350}
                src={banner.src}
                width={550}
              />

              <ul
                class={clx(
                  "gap-4 grid grid-cols-1 justify-items-center w-full",
                  "lg:order-1 lg:justify-items-start",
                  tabs === true && "lg:grid-cols-2 lg:col-span-2",
                  tabs === false && "lg:grid-cols-3 lg:col-span-3",
                )}
              >
                {links.map(({ href, name }) => (
                  <li class="flex">
                    <a
                      class={clx(
                        "duration-300 ease-in-out font-medium font-roboto leading-normal max-w-full text-sm text-[#151515] text-center transition-colors",
                        "hover:text-[#f8a531] hover:underline",
                        "lg:text-left",
                      )}
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Tabs.TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default MenuDropdown;
