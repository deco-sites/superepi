import Image from "apps/website/components/Image.tsx";
import { Props } from "deco-sites/superepi/components/header/Header.tsx";
import { Tabs } from "deco-sites/superepi/components/ui/Tabs/Tabs.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export type MenuDropdownProps = Props["lower"]["menus"][number];

export const MenuDropdown = ({
  items,
  name,
  tabs = false,
  icon,
}: MenuDropdownProps) => {
  console.log(items.length);

  return (
    <div
      className={clx(
        "sm:bg-[#f0f0f0] sm:grid sm:grid-cols-1 sm:max-w-page-container sm:mx-auto sm:w-full",
      )}
    >
      <Tabs
        className={clx(
          "sm:grid sm:grid-cols-1 sm:w-full",
          "lg:grid-cols-5",
        )}
        defaultValue={0}
      >
        {tabs === true && (
          <Tabs.TabsList
            className={clx(
              "sm:bg-white sm:flex sm:flex-col sm:gap-4 sm:items-center sm:p-4 sm:relative sm:w-full",
              "lg:items-start lg:p-12 lg:pl-0",
            )}
          >
            {items.map(({ name }, index) => (
              <Tabs.Tab
                className={clx(
                  "sm:duration-300 sm:ease-in-out sm:font-medium sm:font-roboto sm:leading-normal sm:max-w-full sm:text-sm sm:text-center sm:text-[#151515] sm:transition-colors",
                  "sm:hover:text-[#f8a531] sm:hover:underline",
                  "lg:text-left",
                )}
                value={index}
              >
                {name}
              </Tabs.Tab>
            ))}

            <div
              className={clx(
                "sm:absolute sm:bg-[#fff] sm:h-full sm:left-1/2 sm:top-0 sm:-translate-x-1/2 sm:w-[100vw]",
                "lg:left-0 lg:-translate-x-full",
              )}
            />
          </Tabs.TabsList>
        )}

        {items.map(({
          banner,
          href,
          links,
        }, index) => (
          <Tabs.TabPanel
            className={clx(
              "sm:w-full",
              tabs === true && "lg:col-span-4",
              tabs === false && "lg:col-span-5",
            )}
            value={index}
          >
            <div
              className={clx(
                "sm:gap-4 sm:grid sm:grid-cols-1 sm:items-center sm:justify-items-center sm:p-4 sm:w-full",
                "lg:items-start lg:p-12 lg:pr-0",
                tabs === true && "lg:grid-cols-4",
                tabs === false && "lg:grid-cols-5 lg:pl-0",
              )}
            >
              <Image
                alt={banner.alt}
                className={clx(
                  "sm:aspect-[550/330] sm:h-auto sm:max-w-[34.375rem] sm:object-cover sm:w-full",
                  "lg:order-2 lg:col-span-2",
                )}
                height={350}
                src={banner.src}
                width={550}
              />

              <ul
                className={clx(
                  "sm:gap-4 sm:grid sm:grid-cols-1 sm:justify-items-center sm:w-full",
                  "lg:order-1 lg:justify-items-start",
                  tabs === true && "lg:grid-cols-2 lg:col-span-2",
                  tabs === false && "lg:grid-cols-3 lg:col-span-3",
                )}
              >
                {links.map(({
                  href,
                  name,
                }) => (
                  <li className="sm:flex">
                    <a
                      className={clx(
                        "sm:duration-300 sm:ease-in-out sm:font-medium sm:font-roboto sm:leading-normal sm:max-w-full sm:text-sm sm:text-[#151515] sm:text-center sm:transition-colors",
                        "sm:hover:text-[#f8a531] sm:hover:underline",
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
