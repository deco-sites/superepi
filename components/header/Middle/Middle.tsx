import Image from "apps/website/components/Image.tsx";
import { Props } from "deco-sites/superepi/components/header/Header.tsx";
import { Searchbar } from "deco-sites/superepi/components/header/Middle/Searchbar/Searchbar.tsx";
import { Widget } from "deco-sites/superepi/components/header/Middle/Widget/Widget.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export type MiddleProps = Props["middle"] & {};

export const Middle = ({
  assistance,
  cart,
  logo,
  visitant,
}: MiddleProps) => {
  return (
    <div
      className={clx(
        "sm:gap-4 sm:grid sm:grid-cols-[auto_1fr] sm:items-center sm:min-h-[6rem] sm:py-5 sm:w-full",
        "lg:gap-8 lg:grid-cols-[auto_1fr_auto]",
      )}
    >
      <Image
        alt={logo.alt}
        className="sm:h-[3.125rem] sm:max-w-full sm:object-contain sm:order-1 sm:w-auto"
        height={50}
        loading="eager"
        fit="contain"
        src={logo.src}
        width={170}
      />

      <div
        className={clx(
          "sm:col-span-2 sm:flex sm:order-3 sm:w-full",
          "lg:col-span-1 lg:order-2",
        )}
      >
        <Searchbar />
      </div>

      <div
        className={clx(
          "sm:flex sm:flex-wrap sm:gap-[1rem_1rem] justify-end sm:order-2 sm:w-full",
          "lg:gap-[1rem_2rem] lg:order-3",
        )}
      >
        <Widget
          {...assistance}
          aria-label="Abrir modal de atendimento"
        />

        <Widget
          {...visitant}
          aria-label="Ir para página de login"
          href="/login"
        />

        <Widget
          content="R$ 0,00"
          icon={cart}
          title="0 items"
        />
      </div>
    </div>
  );
};

export default Middle;
