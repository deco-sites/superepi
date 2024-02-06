import HeaderJS from "$store/components/header/HeaderJs.tsx";
import { Lower } from "$store/components/header/Lower/Lower.tsx";
import { Middle } from "$store/components/header/Middle/Middle.tsx";
import { Upper } from "$store/components/header/Upper/Upper.tsx";
import { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import { AvailableIcons } from "$store/components/ui/Icon.tsx";
import { clx } from "$store/sdk/clx.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { FnContext } from "deco/types.ts";

export interface Assistance {
  /** @description Icone lateral [***Use uma resolução de 64x64 e formato webp para melhor performace] */
  icon: ImageWidget;
  /** @description Título do card */
  title: string;
  /** @description Conteúdo textual do card */
  content: string;
  /** @description Lista do popover */
  list: AssistanceList;
}

export interface AssistanceList {
  /** @description Título do popover */
  title: string;
  /** @description Lista dos itens de assitência */
  items: AssistanceListItem[];
}

/** @titleBy content */
export interface AssistanceListItem {
  /** @description Conteúdo textual do item */
  content: HTMLWidget;
  /** @description Define se o item vai ter borda */
  border: boolean;
  /** @description Endereço do link */
  href?: string;
}

export interface MiddleType {
  /** @description Imagem da logo */
  logo: Logo;
  /** @description Widget de atendimento ao cliente */
  assistance: Assistance;
  /** @description Widget de login */
  visitant: Visitant;
  /** @description Ícone do carrinho de compras [***Use uma resolução de 64x64 e formato webp para melhor performace] */
  cart: ImageWidget;
}

/** @titleBy name */
export interface LinkWithBackground {
  /** @description Cor do fundo do link */
  backgroundColor: string;
  /** @description Cor do texto do link */
  color: string;
  /** @description Endereço do link */
  href: string;
  /** @description Nome do link */
  name: string;
}

/** @titleBy name */
export interface LinkWithIcons {
  /** @description Cor do texto do link */
  color: string;
  /** @description Ícone do link [***Use uma resolução de 64x64 e formato webp para melhor performace] */
  icon: ImageWidget;
  /** @description Endereço do link */
  href: string;
  /** @description Nome do link */
  name: string;
}

export interface Logo {
  /** @description Texto alternativo da logo */
  alt: string;
  /** @description URL da image [***Use uma resolução de 170x50 e formato webp para melhor performace] */
  src: ImageWidget;
}

export interface Lowers {
  /** @description Lista com os menus */
  menus: Menu[];
  /** @description This does nothing */
  nothing: null;
}

/** @titleBy name */
export interface Menu {
  /** @description Ícone do menu */
  icon?: AvailableIcons;
  /** @description Nome do menu */
  name: string;
  /** @description Link da categoria */
  href?: string;
  /** @description Informa se o menu vai ter tabs [***Deixe em falso caso contrário] */
  tabs: boolean;
  /** @description Lista com os items do menu [***Multiplos items caso tenha tabs] */
  items: MenuItem[];
}

/** @titleBy name */
export interface MenuItem {
  /** @description Banner do item menu */
  banner: MenuItemBanner;
  /** @description Nome do item menu */
  name: string;
  /** @description Link do item [***Apenas usados em caso de tabs] */
  href: string;
  /** @description Lista com os links */
  links: MenuItemLink[];
}

export interface MenuItemBanner {
  /** @description Texto alternativo do banner */
  alt: string;
  /** @description URL da imagem [***Use uma resolução de 550x350 e formato webp para melhor performace] */
  src: ImageWidget;
}

/** @titleBy name */
export interface MenuItemLink {
  /** @description Endereço do link */
  href: string;
  /** @description Nome do link */
  name: string;
}

export interface UpperType {
  /** @description Lista com os links preenchidos */
  linksWithBackground: LinkWithBackground[];
  linksWithIcons: LinkWithIcons[];
}

export interface Visitant {
  /** @description Icone lateral [***Use uma resolução de 64x64 e formato webp para melhor performace] */
  icon: ImageWidget;
  /** @description Título do card */
  title: string;
  /** @description Conteúdo textual do card */
  content: string;
}

export interface Props {
  /** @ignore */
  isMobile: boolean;
  /** @description Barra de cima do header */
  upper: UpperType;
  /** @description Barra do meio do header */
  middle: MiddleType;
  /** @description Barra de baixo do header */
  lower: Lowers;
  /** @title Search Bar */
  searchbar?: Omit<SearchbarProps, "platform">;
}

function Header(
  { isMobile, upper, middle, lower, searchbar }: ReturnType<typeof loader>,
) {
  const platform = usePlatform();

  return (
    <>
      <header class="group flex pt-[171.4px] w-full" id="main-header">
        <div class="duration-300 ease-in-out h-fit flex flex-col fixed shadow-[0_0_0.25rem_0_#00000040] top-0 transition-[grid-template] w-full z-50">
          <div class="group-data-[micro-header=true]:hidden bg-[#f0f0f0] flex overflow-x-auto px-6 w-full">
            <div class="flex max-w-page-container mx-auto w-full">
              <Upper {...upper} />
            </div>
          </div>

          <div class="bg-[#fff] flex px-6 w-full">
            <div class="flex max-w-page-container mx-auto w-full">
              <Middle
                lower={lower}
                middle={middle}
                searchbar={searchbar && { ...searchbar, platform }}
                isMobile={isMobile}
              />
            </div>
          </div>

          <div
            class={clx(
              "bg-[#fff] hidden max-h-full px-6 relative w-full",
              "lg:flex",
            )}
          >
            <div class="flex max-w-page-container mx-auto w-full">
              <Lower {...lower} />
            </div>
          </div>
        </div>
      </header>

      <HeaderJS />
    </>
  );
}

export const loader = (props: Props, _req: Request, ctx: FnContext) => {
  const device = ctx.device;
  const isMobile = device === "mobile" || device === "tablet";

  return {
    ...props,
    device: device || "desktop",
    isMobile,
  };
};

export default Header;
