import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Lower } from "deco-sites/superepi/components/header/Lower/Lower.tsx";
import { Middle } from "deco-sites/superepi/components/header/Middle/Middle.tsx";
import { Upper } from "deco-sites/superepi/components/header/Upper/Upper.tsx";
import { AvailableIcons } from "deco-sites/superepi/components/ui/Icon.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

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
};

/** @titleBy content */
export interface AssistanceListItem {
  /** @description Conteúdo textual do item */
  content: HTMLWidget;
  /** @description Define se o item vai ter borda */
  border: boolean;
  /** @description Endereço do link */
  href?: string;
};

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
  /** @description Barra de cima do header */
  upper: UpperType;
  /** @description Barra do meio do header */
  middle: MiddleType;
  /** @description Barra de baixo do header */
  lower: Lowers;
}

function Header({
  upper,
  middle,
  lower,
}: Props) {
  const fixed = useSignal(false);
  const padding = useSignal<undefined | number>(undefined);

  const refContainer = useRef<HTMLDivElement>(null);
  const refHeader = useRef<HTMLElement>(null);
  const refUpper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = refContainer.current;
    const upper = refUpper.current;

    if (
      container === null ||
      upper === null
    ) return;

    const resize = new ResizeObserver((event) => {
      padding.value = event[0].contentRect.height;
    });

    resize.observe(container);

    return () => resize.disconnect();
  }, []);

  useEffect(() => {
    const header = refHeader.current;
    if (header === null) return;

    const intersection = new IntersectionObserver((event) => {
      const element = event[0];

      if (element.isIntersecting === true) fixed.value = false;
      else fixed.value = true;
    }, {
      root: null,
      rootMargin: `0px 0px 0px 0px`,
      threshold: 0,
    });

    intersection.observe(header);

    return () => intersection.disconnect();
  }, []);

  return (
    <header
      className="sm:flex sm:w-full"
      ref={refHeader}
      style={{
        paddingTop: padding.value === undefined
          ? undefined
          : `${padding.value}px`,
      }}
    >
      <div
        className={clx(
          "sm:bg-[#fff] sm:duration-300 sm:ease-in-out sm:h-fit sm:grid sm:shadow-[0_0_0.25rem_0_#00000040] sm:top-0 sm:transition-[grid-template] sm:w-full sm:z-50",
          fixed.value === true && "sm:grid-rows-[0fr_0fr_0fr]",
          fixed.value === false && "sm:grid-rows-[auto_auto_auto]",
        )}
        ref={refContainer}
        style={{
          position: padding.value === undefined ? undefined : "fixed",
        }}
      >
        <div
          className="sm:bg-[#f0f0f0] sm:flex sm:overflow-x-auto sm:px-6 sm:w-full"
          ref={refUpper}
          style={{
            overflow: fixed.value === true ? "hidden" : undefined,
          }}
        >
          <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
            <Upper {...upper} />
          </div>
        </div>

        <div className="sm:bg-[#fff] sm:flex sm:px-6 sm:w-full">
          <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
            <Middle
              lower={lower}
              middle={middle}
            />
          </div>
        </div>

        <div
          className="sm:bg-[#fff] sm:flex sm:max-h-full sm:px-6 sm:relative sm:w-full"
          style={{
            overflow: fixed.value === true ? "hidden" : undefined,
          }}
        >
          <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
            <Lower {...lower} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
