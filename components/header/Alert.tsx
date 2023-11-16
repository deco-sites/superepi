import { useId } from "$store/sdk/useId.ts";
import { AlertInfos } from "deco-sites/superepi/components/header/Header.tsx";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";

function Alert({ alerts: { column1, column2 } }: { alerts: AlertInfos }) {
  const id = useId();

  return (
    <div id={id} class="bg-[#f0f0f0] hidden md:block px-4">
      <div class="max-w-[1440px] mx-auto flex justify-center md:justify-between">
        <div class="flex gap-3 items-center">
          {column1?.map(({ labelIcon, link, text }) => (
            <a
              href={link ?? "#"}
              class="flex items-center gap-1 text-[#8f8f8f] first:text-[#f8a531]"
            >
              <Icon id={labelIcon} size={30} />
              <p class="font-bold md:text-[10px] lg:text-xs xl:text-sm">
                {text}
              </p>
            </a>
          ))}
        </div>
        <div class="hidden md:flex">
          {column2?.map(({ text, link }) => (
            <a
              href={link ?? "#"}
              class="bg-[#8f8f8f] hover:bg-[#f2f2f2] text-[#FFF] hover:text-[#8f8f8f] font-bold md:text-[10px] md:py-2 md:px-4 lg:text-xs lg:py-4 lg:px-6 transition-all duration-500"
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Alert;
