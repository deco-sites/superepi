import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton, SearchButton } from "$store/islands/Header/Buttons.tsx";
import CartButtonLinx from "$store/islands/Header/Cart/linx.tsx";
import CartButtonShopify from "$store/islands/Header/Cart/shopify.tsx";
import CartButtonVDNA from "$store/islands/Header/Cart/vnda.tsx";
import CartButtonVTEX from "$store/islands/Header/Cart/vtex.tsx";
import CartButtonWake from "$store/islands/Header/Cart/wake.tsx";
import Searchbar from "$store/islands/Header/Searchbar.tsx";
import SearchInput from "$store/islands/Header/SearchInput.tsx";
import ServiceButton from "$store/islands/Header/ServiceButton.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import Image from "apps/website/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import { NavItemProps } from "deco-sites/superepi/components/header/Header.tsx";

function Navbar({ items, searchbar, logo }: {
  items: NavItemProps[];
  searchbar?: SearchbarProps;
  logo?: { src: string; alt: string };
}) {
  const platform = usePlatform();

  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: '75px' }}
        class="md:hidden flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6 gap-2 py-4"
      >
        <MenuButton />

        {logo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center pb-3"
            aria-label="Store logo"
          >
            <Image className="w-full" src={logo.src} alt={logo.alt} width={85} height={25} />
          </a>
        )}

        <div class="flex gap-1">
          <SearchButton />
          <a
              class="btn btn-circle btn-sm btn-ghost flex items-center gap-2"
              href="/login"
              aria-label="Log in"
            >
              <Icon id="Login" size={24} strokeWidth={0.4} />
          </a>
          {platform === "vtex" && <CartButtonVTEX />}
          {platform === "vnda" && <CartButtonVDNA />}
          {platform === "linx" && <CartButtonLinx />}
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-col">
        <div class="flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6">
          <div class="flex-none w-44">
            {logo && (
              <a
                href="/"
                aria-label="Store logo"
                class="block px-4 py-3 w-[160px]"
              >
                <Image className="w-full" src={logo.src} alt={logo.alt} width={85} height={25} />
              </a>
            )}
          </div>
          <div className="w-full mx-2">
            <SearchInput searchbar={searchbar} />
          </div>
          <div class="flex-none flex items-center justify-end gap-4">
            <ServiceButton />
            <a
              class="flex items-center gap-2"
              href="/login"
              aria-label="Log in"
            >
              <Icon id="Login" size={30} strokeWidth={0.4} />
              <div class="flex flex-col gap-2">
                <p class="text-xs font-semibold">Olá, Visitante</p>
                <p class="text-xs">Faça seu login</p>
              </div>
            </a>
            {platform === "vtex" && <CartButtonVTEX />}
            {platform === "vnda" && <CartButtonVDNA />}
            {platform === "wake" && <CartButtonWake />}
            {platform === "linx" && <CartButtonLinx />}
            {platform === "shopify" && <CartButtonShopify />}
          </div>
        </div>
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>
      </div>
    </>
  );
}

export default Navbar;
