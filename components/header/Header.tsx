import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Drawers from "$store/islands/Header/Drawers.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";
import { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface AlertInfos {
  column1: Column1[];
  column2: Column2[];
}

export interface Column1 {
  labelIcon: AvailableIcons;
  text: string;
  link: string;
}

export interface Column2 {
  text: string;
  link: string;
}

export interface NavItemProps {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
      children?: Array<{
        label: string;
        href: string;
      }>;
    }>;
  }>;
  image?: {
    src?: ImageWidget;
    alt?: string;
  };
}

export interface Props {
  alerts?: AlertInfos;

  /** @title Search Bar */
  searchbar?: Omit<SearchbarProps, "platform">;

  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItemProps[];

  /** @title Logo */
  logo?: { src: ImageWidget; alt: string };
}

function Header({
  alerts = { column1: [], column2: [] },
  searchbar,
  navItems,
  logo,
}: Props) {
  const platform = usePlatform();
  const items = navItems ?? [];

  return (
    <>
      <header class="h-[80px] md:h-[150px]">
        <Drawers
          menu={{ items }}
          searchbar={searchbar}
          platform={platform}
        >
          <div class="bg-base-100 fixed w-full z-50">
            <Navbar
              items={items}
              searchbar={searchbar && { ...searchbar, platform }}
              logo={logo}
              alerts={alerts}
            />
          </div>
        </Drawers>
      </header>
    </>
  );
}

export default Header;
