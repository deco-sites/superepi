import { Props } from "deco-sites/superepi/components/header/Header.tsx";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";
import { useId } from "deco-sites/superepi/sdk/useId.ts";

export type MenuProps = {
  lower: Props["lower"];
};

export const Menu = ({
  lower,
}: MenuProps) => {
  const id = useId();

  return (
    <div
      className={clx(
        "drawer drawer-end sm:ml-auto sm:w-fit",
        "lg:hidden",
      )}
    >
      <input
        className="drawer-toggle"
        id={id}
        type="checkbox"
      />

      <div className="drawer-content">
        <label
          className="sm:flex sm:items-center sm:h-12 sm:justify-center sm:w-12"
          htmlFor={id}
        >
          <Icon
            className="sm:h-8 sm:text-black sm:w-8"
            id="Menu"
          />
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"
        >
        </label>

        <div className="menu sm:bg-[#f0f0f0] sm:p-6 sm:max-w-full sm:min-h-full sm:w-64">
          {lower.menus.map(({
            items,
            name,
          }, index) => (
            <div
              className="collapse sm:rounded-none"
              key={index}
            >
              <input type="checkbox" />

              <strong className="collapse-title sm:font-roboto sm:font-black sm:leading-normal sm:min-h-0 sm:p-0 sm:text-black sm:text-base">
                {name}
              </strong>

              <div className="collapse-content sm:flex sm:flex-col sm:gap-6 sm:w-full">
                {items.map(({
                  name,
                  links,
                }, jindex) => (
                  <div
                    className="sm:flex sm:flex-col sm:gap-4 sm:w-full"
                    key={jindex}
                  >
                    <span className="sm:font-roboto sm:font-medium sm:leading-normal sm:min-h-0 sm:p-0 sm:text-black sm:text-sm">
                      {name}
                    </span>

                    <ul className="sm:flex sm:flex-col sm:gap-3 sm:items-start sm:w-full">
                      {links.map(({
                        href,
                        name,
                      }, kindex) => (
                        <li
                          className="sm:flex"
                          key={kindex}
                        >
                          <a
                            className="sm:font-roboto sm:font-normal sm:leading-normal sm:min-h-0 sm:p-0 sm:text-black sm:text-sm"
                            href={href}
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
