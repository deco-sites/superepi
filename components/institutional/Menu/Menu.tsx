import { Article, Props } from "deco-sites/superepi/components/institutional/Institutional.tsx";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";
import { clx } from "../../../sdk/clx.ts";

export type MenuProps = {
  article: Article | undefined;
  articles: Props['articles'];
};

export const Menu = ({
  article,
  articles
}: MenuProps) => {
  return (
    <div className={clx(
      "collapse sm:bg-transparent sm:rounded-md sm:shadow-[0_0_0.375rem_0.0625rem_#0000001A]",
      "lg:collapse-open lg:shadow-none"
    )}>
      <input
        className='peer sm:min-h-0'
        type="checkbox"
      />

      <div className={clx(
        "collapse-title sm:bg-white sm:flex sm:gap-4 sm:h-12 sm:items-center sm:justify-between sm:px-6 sm:py-0 sm:rounded-md sm:shadow-[0_0_0.375rem_0.0625rem_#0000001A] sm:w-full",
        "lg:bg-transparent lg:hidden lg:shadow-none"
      )}>
        <a
          aria-label="Voltar para página inicial"
          className="sm:flex sm:h-4 sm:text-[#151515] sm:w-4"
          href="/"
        >
          <Icon
            className="sm:flex-shrink-0 sm:h-full sm:w-full"
            id="Home"
          />
        </a>

        <span className="sm:flex sm:font-bold sm:font-roboto sm:gap-2 sm:items-center sm:text-[#151515] sm:text-sm">
          <span>
            Menu
          </span>

          <Icon
            className="sm:flex-shrink-0 sm:h-3 sm:w-3"
            id="ChevronDown"
          />
        </span>
      </div>

      <div className="collapse-content sm:peer-checked:pt-4 sm:p-0 sm:!pb-[0rem]">
        <ul className={clx(
          "sm:bg-white sm:flex sm:flex-col sm:px-6 sm:py-5 sm:rounded-md sm:shadow-[0_0_0.375rem_0.0625rem_#0000001A] sm:w-full",
          "lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none"
        )}>
          {articles.map(({
            matcher,
            name
          }, index, array) => {
            const last = matcher.slice(-1);
            const href = last === "$" ? matcher.slice(0, -1) : matcher;

            return (
              <li
                className={clx(
                  "sm:flex sm:w-full",
                  index !== array.length - 1 && "sm:border-b-[0.0625rem] sm:border-b-[#F0F0F0]"
                )}
                key={index}
              >
                <a
                  className={clx(
                    "sm:flex sm:font-normal sm:font-roboto sm:gap-4 sm:items-center sm:justify-between sm:text-[#999999] sm:text-base sm:-tracking-[0.053125rem] sm:min-h-16 sm:w-full",
                    article?.name === name && "sm:!font-medium sm:!text-[#151515]"
                  )}
                  href={href}
                >
                  <span>
                    {name}
                  </span>

                  <Icon
                    className="sm:flex-shrink-0 sm:h-5 sm:text-[#999999] sm:w-5"
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