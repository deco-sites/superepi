import {
  Article,
  Props,
} from "$store/components/institutional/Institutional.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { clx } from "../../../sdk/clx.ts";

export type MenuProps = {
  article: Article | undefined;
  articles: Props["articles"];
};

export const Menu = ({ article, articles }: MenuProps) => {
  return (
    <div
      class={clx(
        "collapse bg-transparent rounded-md shadow-[0_0_0.375rem_0.0625rem_#0000001A]",
        "lg:collapse-open lg:shadow-none",
      )}
    >
      <input class="peer min-h-0" type="checkbox" />

      <div
        class={clx(
          "collapse-title bg-white flex gap-4 h-12 items-center justify-between px-6 py-0 rounded-md shadow-[0_0_0.375rem_0.0625rem_#0000001A] w-full",
          "lg:bg-transparent lg:hidden lg:shadow-none",
        )}
      >
        <a
          aria-label="Voltar para página inicial"
          class="flex h-4 text-[#151515] w-4"
          href="/"
        >
          <Icon class="flex-shrink-0 h-full w-full" id="Home" />
        </a>

        <span class="flex font-bold font-roboto gap-2 items-center text-[#151515] text-sm">
          <span>Menu</span>

          <Icon class="flex-shrink-0 h-3 w-3" id="ChevronDown" />
        </span>
      </div>

      <div class="collapse-content peer-checked:pt-4 p-0 !pb-[0rem]">
        <ul
          class={clx(
            "bg-white flex flex-col px-6 py-5 rounded-md shadow-[0_0_0.375rem_0.0625rem_#0000001A] w-full",
            "lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none",
          )}
        >
          {articles.map(({ matcher, name }, index, array) => {
            const last = matcher.slice(-1);
            const href = last === "$" ? matcher.slice(0, -1) : matcher;

            return (
              <li
                class={clx(
                  "flex w-full",
                  index !== array.length - 1 &&
                  "border-b-[0.0625rem] border-b-[#F0F0F0]",
                )}
              >
                <a
                  class={clx(
                    "flex font-normal font-roboto gap-4 items-center justify-between text-[#999999] text-base -tracking-[0.053125rem] min-h-16 w-full",
                    article?.name === name &&
                    "!font-medium !text-[#151515]",
                  )}
                  href={href}
                >
                  <span>{name}</span>

                  <Icon
                    class="flex-shrink-0 h-5 text-[#999999] w-5"
                    id="ChevronRight"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
