import { clx } from "$store/sdk/clx.ts";
import { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  content: HTMLWidget;
  href: string;
}

export const Cupom = ({ content, href }: Props) => {
  return (
    <div class="bg-black flex items-center justify-center min-h-16 px-6 py-2 w-full">
      <a
        class={clx(
          "font-roboto font-bold leading-tight max-w-page-container mx-auto text-sm text-center text-white",
          "[&_strong]:bg-[#fffb00] [&_strong]:border-[#00008b] [&_strong]:border-[0.1875rem] [&_strong]:border-dashed [&_strong]:px-3 [&_strong]:text-[#00008b] [&_strong]:text-3xl",
          "[&_em]:bg-[#ffffff] [&_em]:border-[#00008b] [&_em]:border-[0.1875rem] [&_em]:border-dashed [&_em]:px-3 [&_em]:text-[#00008b] [&_em]:text-3xl [&_em]:not-italic",
          "[&_span]:text-[0.625rem] [&_span]:no-underline",
          "lg:text-2xl",
        )}
        dangerouslySetInnerHTML={{ __html: content }}
        href={href}
      />
    </div>
  );
};

export default Cupom;
