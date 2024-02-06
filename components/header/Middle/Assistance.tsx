import { Props } from "$store/components/header/Header.tsx";
import { Widget, WidgetProps } from "./Widget.tsx";
import { clx } from "$store/sdk/clx.ts";

export type AssistanceProps = {
  assistance: Props["middle"]["assistance"];
};

export const Assistance = ({ assistance }: AssistanceProps) => {
  const { content, icon, list, title } = assistance;

  return (
    <div class="dropdown dropdown-hover w-fit">
      <div class="flex" role="button" tabIndex={0}>
        <Widget content={content} icon={icon} title={title} />
      </div>

      <div
        class="dropdown-content bg-white border-[0.0625rem] border-[#f1f1f1] flex flex-col gap-3 left-1/2 max-w-[18.75rem] p-6 text-center -translate-x-1/2 w-[100vw] z-50"
        tabIndex={0}
      >
        <strong class="font-bold font-roboto leading-normal text-xl text-[#151515]">
          {list.title}
        </strong>

        <ul class="flex flex-col gap-3 w-full">
          {list.items.map(({ border, content, href }, index) => (
            <li class="flex w-full">
              <a
                class={clx(
                  "font-roboto font-normal leading-tight p-3 text-[#333] text-sm w-full",
                  "[&_strong]:font-bold",
                  border === true &&
                  "border-[#808080] border-[0.0625rem]",
                  href === undefined && "cursor-text",
                  href !== undefined && "cursor-pointer",
                )}
                dangerouslySetInnerHTML={{ __html: content }}
                href={href}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Assistance;
