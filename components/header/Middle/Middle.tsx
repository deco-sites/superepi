import { Props } from "$store/components/header/Header.tsx";
import { Assistance } from "./Assistance.tsx";
import { Cart } from "./Cart.tsx";
import { Menu } from "./Menu.tsx";
/* import { Searchbar } from "$store/components/header/Middle/Searchbar/Searchbar.tsx"; */
import { Widget } from "./Widget.tsx";
import Searchbar, {
  Props as SearchbarProps,
} from "$store/components/search/Searchbar.tsx";
import { clx } from "$store/sdk/clx.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export type MiddleProps = {
  lower: Props["lower"];
  middle: Props["middle"];
  searchbar?: SearchbarProps;
  isMobile: boolean;
};

export const Middle = ({ lower, middle, searchbar, isMobile }: MiddleProps) => {
  const { assistance, cart, logo, visitant } = middle;

  return (
    <div
      class={clx(
        "gap-4 flex flex-col min-h-[6rem] py-2 w-full",
        "lg:grid lg:gap-8 lg:grid-cols-[auto_1fr_auto]",
      )}
    >
      <div class="flex justify-between items-center">
        <Menu lower={lower} />

        <a class="/" href="/">
          <Image
            alt={logo.alt}
            height={46}
            loading="eager"
            src={logo.src}
            width={163}
          />
        </a>

        {isMobile && (
          <div class="flex items-center gap-2">
            <Icon id="Search" width={24} height={24} />
            <Cart content="" icon={cart} title="" isMobile />
          </div>
        )}
      </div>

      {searchbar && (
        <div
          class={clx(
            "col-span-2 flex order-3 w-full",
            "lg:col-span-1 lg:order-2",
          )}
        >
          <Searchbar {...searchbar} />
        </div>
      )}

      <div
        class={clx(
          "flex flex-wrap gap-[1rem_1rem] items-center justify-end order-2 w-full",
          "lg:flex lg:gap-[1rem_2rem] lg:order-3",
        )}
      >
        {!isMobile && (
          <>
            <Assistance assistance={assistance} />
            <Widget
              {...visitant}
              aria-label="Ir para página de login"
              href="/login"
            />
            <Cart content="R$ 0,00" icon={cart} title="0 itens" />
          </>
        )}
      </div>
    </div>
  );
};

export default Middle;
