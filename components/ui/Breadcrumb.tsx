import type { BreadcrumbList } from "apps/commerce/types.ts";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
}

function Breadcrumb({ itemListElement = [] }: Props) {
  const items = [{ name: "Home", item: "/" }, ...itemListElement];

  return (
    <ul className="breadcrumbs sm:flex sm:flex-wrap sm:font-roboto sm:font-normal sm:gap-2 sm:items-center sm:justify-start sm:leading-normal sm:text-sm sm:text-[#999999] sm:w-full">
      {items
        .filter(({ name, item }) => name && item)
        .map(({ name, item }, index, array) => (
          <li
            className="sm:flex sm:gap-2 sm:items-center"
            key={index}
          >
            {index === 0 && (
              <Icon
                className="sm:h-6 sm:w-6"
                id="Home"
              />
            )}

            <a
              className={clx(
                index === array.length - 1 && "sm:text-[#151515] sm:cursor-text sm:pointer-events-none"
              )}
              href={item}
            >
              {name}
            </a>

            {index !== array.length - 1 && (
              <span>
                {">"}
              </span>
            )}
          </li>
        ))}
    </ul>
  );
};

export default Breadcrumb;
