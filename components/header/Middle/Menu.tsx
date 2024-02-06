import { Props } from "$store/components/header/Header.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { clx } from "$store/sdk/clx.ts";
import { useId } from "$store/sdk/useId.ts";

export type MenuProps = {
  lower: Props["lower"];
};

export const Menu = ({ lower }: MenuProps) => {
  const id = useId();

  return (
    <div class={clx("drawer drawer-end w-fit", "lg:hidden")}>
      <input class="drawer-toggle" id={id} type="checkbox" />

      <div class="drawer-content">
        <label class="flex items-center justify-center translate-y-2" for={id}>
          <Icon
            class="text-black scale-[80%] shrink-0"
            id="Menu"
            width={32}
            height={22}
          />
        </label>
      </div>

      <div class="drawer-side">
        <label for={id} aria-label="close sidebar" class="drawer-overlay" />

        <div class="menu bg-[#f0f0f0] p-6 max-w-full min-h-full w-64">
          {lower.menus.map(({ items, name }, index) => (
            <div class="collapse rounded-none">
              <input type="checkbox" />

              <strong class="collapse-title font-roboto font-black leading-normal min-h-0 p-0 text-black text-base">
                {name}
              </strong>

              <div class="collapse-content flex flex-col gap-6 w-full">
                {items.map(({ name, links }, jindex) => (
                  <div class="flex flex-col gap-4 w-full" key={jindex}>
                    <span class="font-roboto font-medium leading-normal min-h-0 p-0 text-black text-sm">
                      {name}
                    </span>

                    <ul class="flex flex-col gap-3 items-start w-full">
                      {links.map(({ href, name }, kindex) => (
                        <li class="flex" key={kindex}>
                          <a
                            class="font-roboto font-normal leading-normal min-h-0 p-0 text-black text-sm"
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
