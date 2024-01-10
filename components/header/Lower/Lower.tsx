import { Props } from "deco-sites/superepi/components/header/Header.tsx";
import { MenuDropdown } from "deco-sites/superepi/components/header/Lower/MenuDropdown/MenuDropdown.tsx";
import { SuperStores } from "deco-sites/superepi/components/header/Lower/SuperStores/SuperStores.tsx";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export type LowerProps = Props["lower"];

export const Lower = ({
  menus = [],
  nothing,
}: LowerProps) => {
  if (menus.length === 0) return null;

  return (
    <div
      className={clx(
        "carousel sm:hidden sm:gap-4 sm:items-stretch sm:max-w-full sm:min-w-full sm:overflow-y-hidden sm:w-fit",
        "lg:flex lg:gap-[1.875rem]",
      )}
    >
      {menus.map(({
        name,
        href,
        icon,
        ...other
      }) => (
        <div
          className={clx(
            "carousel-item dropdown dropdown-hover",
            "sm:[&_div]:pointer-events-auto",
          )}
          style={{ position: "initial" }}
        >
          <div
            className={clx(
              "sm:flex sm:pb-2",
              "sm:[&_span]:focus:border-b-[#f8a531] sm:[&_span]:hover:border-b-[#f8a531]",
            )}
            role="button"
            tabIndex={0}
          >
            {href === undefined
              ? (
                <span className="sm:border-b-[0.1875rem] sm:border-b-transparent sm:duration-300 sm:ease-in-out sm:flex sm:font-medium sm:font-roboto sm:gap-1 sm:items-center sm:leading-normal sm:pb-1 sm:text-[#000] sm:text-sm sm:transition-colors">
                  {(icon !== undefined && icon !== "ArrowsPointingOut") && (
                    <Icon
                      className="sm:h-4 sm:w-4"
                      id={icon}
                    />
                  )}

                  {name}
                </span>
              )
              : (
                <a
                  className="sm:border-b-[0.1875rem] sm:border-b-transparent sm:duration-300 sm:ease-in-out sm:flex sm:font-medium sm:font-roboto sm:gap-1 sm:items-center sm:leading-normal sm:pb-1 sm:text-[#000] sm:text-sm sm:transition-colors"
                  href={href}
                >
                  {(icon !== undefined && icon !== "ArrowsPointingOut") && (
                    <Icon
                      className="sm:h-4 sm:w-4"
                      id={icon}
                    />
                  )}

                  {name}
                </a>
              )}
          </div>

          <div
            className={clx(
              "sm:bg-[#f0f0f0] dropdown-content sm:absolute sm:bottom-0 sm:h-fit sm:left-0 sm:max-h-[calc(100vh-14.25rem)] sm:top-full sm:overflow-y-auto sm:pointer-events-none sm:px-6 sm:w-full",
              "sm:data-[background=true]:focus:bg-[#00000080]",
            )}
            data-size="large"
            tabIndex={0}
          >
            <MenuDropdown
              {...other}
              name={name}
            />
          </div>
        </div>
      ))}

      <SuperStores />
    </div>
  );
};

export default Lower;
