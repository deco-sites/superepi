import Icon from "$store/components/ui/Icon.tsx";
import { clx } from "$store/sdk/clx.ts";
import type { BreadcrumbList } from "apps/commerce/types.ts";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
  home?: boolean;
}

function Breadcrumb({ home, itemListElement = [] }: Props) {
  const items = home === false
    ? [{ name: "Home", item: "/" }, ...itemListElement]
    : [...itemListElement];

  return (
    <ul class="breadcrumbs flex flex-wrap font-roboto font-normal gap-2 items-center justify-start leading-normal text-sm text-[#999999] w-full">
      {items
        .filter(({ name, item }) => name && item)
        .map(({ name, item }, index, array) => (
          <li class="flex gap-2 items-center">
            {index === 0 && <Icon id="Home" width={22} height={18} />}

            <a
              class={clx(
                "leading-none",
                index === array.length - 1 &&
                  "text-[#151515] cursor-text pointer-events-none",
              )}
              href={item}
            >
              {name}
            </a>

            {index !== array.length - 1 && (
              <span>
                <Icon id="BreadcrumbArrow" width={5} height={10} />
              </span>
            )}
          </li>
        ))}
    </ul>
  );
}

export default Breadcrumb;
