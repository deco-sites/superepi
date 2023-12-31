import Image from "apps/website/components/Image.tsx";
import { Props } from "deco-sites/superepi/components/header/Header.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export type UpperProps = Props["upper"];

export const Upper = (props: UpperProps) => {
  if (props === undefined) return null;

  const {
    linksWithBackground,
    linksWithIcons,
  } = props;

  return (
    <div className="sm:flex sm:flex-shrink-0 sm:gap-4 sm:items-center sm:justify-between sm:min-h-[2.5rem] sm:min-w-full sm:w-fit">
      <ul className="sm:flex sm:flex-shrink-0 sm:gap-8 sm:items-center sm:w-fit">
        {linksWithIcons.map(({
          color,
          href,
          icon,
          name,
        }, index) => (
          <li
            className="sm:flex sm:flex-shrink-0"
            key={index}
          >
            <a
              className="sm:flex sm:gap-1 sm:items-center sm:font-bold sm:font-roboto sm:leading-normal sm:text-sm sm:tracking-[0.025rem]"
              href={href}
              style={{ color: color }}
            >
              <Image
                alt=""
                className="sm:h-6 sm:w-6"
                height={24}
                src={icon}
                width={24}
              />

              {name}
            </a>
          </li>
        ))}
      </ul>

      <ul className="sm:flex sm:flex-shrink-0 sm:items-center sm:justify-end sm:w-fit">
        {linksWithBackground.map(({
          backgroundColor,
          color,
          href,
          name,
        }, index) => (
          <li
            className="sm:flex sm:flex-shrink-0"
            key={index}
          >
            <a
              className="sm:border-none sm:flex sm:font-bold sm:font-roboto sm:items-center sm:justify-center sm:leading-normal sm:px-8 sm:text-sm sm:min-h-[2.5rem]"
              href={href}
              style={{
                backgroundColor: backgroundColor,
                color: color,
              }}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Upper;
