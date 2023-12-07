import { Props } from "deco-sites/superepi/components/header/Header.tsx";
import { MenuDropdown } from "deco-sites/superepi/components/header/Lower/MenuDropdown/MenuDropdown.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export type LowerProps = Props['lower'];

export const Lower = ({
  menus = [],
  nothing
}: LowerProps) => {
  if (menus.length === 0) return null;

  return (
    <div className={clx(
      "sm:flex sm:flex-wrap sm:gap-4 sm:items-center sm:w-full",
      "lg:gap-8"
    )}>
      {menus.map(({
        name,
        ...other
      }, index) => (
        <div
          className="dropdown dropdown-hover"
          style={{ position: "initial" }}
        >
          <div
            className={clx(
              "sm:flex sm:pb-2",
              "sm:[&_span]:focus:border-b-[#f8a531] sm:[&_span]:hover:border-b-[#f8a531]"
            )}
            role="button"
            tabIndex={0}
          >
            <span className="sm:border-b-[0.1875rem] sm:border-b-transparent sm:duration-300 sm:ease-in-out sm:font-medium sm:font-roboto sm:leading-normal sm:pb-1 sm:text-[#000] sm:text-sm sm:transition-colors">
              {name}
            </span>
          </div>

          <div
            className={clx(
              "sm:bg-[#f0f0f0] dropdown-content sm:absolute sm:bottom-0 sm:h-fit sm:left-0 sm:top-full sm:px-6 sm:w-full",
              "sm:data-[background=true]:focus:bg-[#00000080]"
            )}
            tabIndex={0}
          >
            <MenuDropdown
              {...other}
              name={name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lower;