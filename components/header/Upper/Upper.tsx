import { Props } from "$store/components/header/Header.tsx";
import { clx } from "$store/sdk/clx.ts";
import Image from "apps/website/components/Image.tsx";

export type UpperProps = Props["upper"];

export const Upper = (props: UpperProps) => {
  if (props === undefined) return null;

  const { linksWithBackground, linksWithIcons } = props;

  return (
    <div class="flex flex-shrink-0 gap-4 items-center justify-between min-h-[2.5rem] min-w-full w-fit">
      <ul class="flex flex-shrink-0 gap-8 items-center w-fit">
        {linksWithIcons.map(({ color, href, icon, name }, index) => (
          <li class="flex flex-shrink-0">
            <a
              class="flex gap-1 items-center font-bold font-roboto leading-normal text-sm tracking-[0.025rem]"
              href={href}
              style={{ color: color }}
            >
              <Image
                alt=""
                class="h-6 w-6"
                height={24}
                src={icon}
                width={24}
              />

              {name}
            </a>
          </li>
        ))}
      </ul>

      <ul class="flex flex-shrink-0 items-center justify-end w-fit">
        {linksWithBackground.map((
          { backgroundColor, color, href, name },
          index,
        ) => (
          <li class="flex flex-shrink-0">
            <a
              class="border-none flex font-bold font-roboto items-center justify-center leading-normal px-8 text-sm min-h-[2.5rem]"
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
