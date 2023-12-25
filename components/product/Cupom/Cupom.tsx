import { HTMLWidget } from "apps/admin/widgets.ts";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export interface Props {
  content: HTMLWidget;
  href: string;
}

export const Cupom = ({
  content,
  href,
}: Props) => {
  return (
    <div className="sm:bg-black sm:flex sm:items-center sm:justify-center sm:min-h-16 sm:px-6 sm:py-2 sm:w-full">
      <a
        className={clx(
          "sm:font-roboto sm:font-bold sm:leading-tight sm:max-w-page-container sm:mx-auto sm:text-sm sm:text-center sm:text-white",
          "sm:[&_strong]:bg-[#fffb00] sm:[&_strong]:border-[#00008b] sm:[&_strong]:border-[0.1875rem] sm:[&_strong]:border-dashed sm:[&_strong]:px-3 sm:[&_strong]:text-[#00008b] sm:[&_strong]:text-3xl",
          "sm:[&_em]:bg-[#ffffff] sm:[&_em]:border-[#00008b] sm:[&_em]:border-[0.1875rem] sm:[&_em]:border-dashed sm:[&_em]:px-3 sm:[&_em]:text-[#00008b] sm:[&_em]:text-3xl sm:[&_em]:not-italic",
          "sm:[&_span]:text-[0.625rem] sm:[&_span]:no-underline",
          "lg:text-2xl",
        )}
        dangerouslySetInnerHTML={{ __html: content }}
        href={href}
      />
    </div>
  );
};

export default Cupom;
