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
    <div
      className={clx(
        "sm:gap-4 sm:grid sm:grid-cols-1 sm:items-center sm:w-full",
        "lg:flex lg:items-start",
      )}
    >
      <ul
        className={clx(
          "sm:flex sm:flex-wrap sm:gap-8 sm:items-center sm:pt-6 sm:w-full",
          "lg:flex-grow lg:py-2 lg:w-auto",
        )}
      >
        {linksWithIcons.map(({
          color,
          href,
          icon,
          name,
        }, index) => (
          <li
            className="sm:flex"
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

      <ul
        className={clx(
          "sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:w-full",
          "lg:flex-grow lg:w-auto",
        )}
      >
        {linksWithBackground.map(({
          backgroundColor,
          color,
          href,
          name,
        }, index) => (
          <li
            className="sm:flex"
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
