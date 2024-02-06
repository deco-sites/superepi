/**
 * We use a custom route at /pesquisa?t= to perform the search. This component
 * redirects the user to /pesquisa?t={term} when the user either clicks on the
 * button or submits the form. Make sure this page exists in deco.cx/admin
 * of yout site. If not, create a new page on this route and add the appropriate
 * loader.
 *
 * Note that this is the most performatic way to perform a search, since
 * no JavaScript is shipped to the browser!
 */

import type { Platform } from "$store/apps/site.ts";
import ProductCard from "$store/components/product/ProductCard.tsx";
import { SearchbarCard } from "$store/components/product/SearchbarCard/SearchbarCard.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { clx } from "$store/sdk/clx.ts";
import { useId } from "$store/sdk/useId.ts";
import { useSuggestions } from "$store/sdk/useSuggestions.ts";
import { useUI } from "$store/sdk/useUI.ts";
import { Suggestion } from "apps/commerce/types.ts";
import { Resolved } from "deco/engine/core/resolver.ts";
import { useEffect, useRef } from "preact/compat";

// Editable props
export interface Props {
  /**
   * @title Placeholder
   * @description Search bar default placeholder message
   * @default What are you looking for?
   */
  placeholder?: string;
  /**
   * @title Page path
   * @description When user clicks on the search button, navigate it to
   * @default /s
   */
  action?: string;
  /**
   * @title Term name
   * @description Querystring param used when navigating the user
   * @default q
   */
  name?: string;

  /**
   * @title Suggestions Integration
   * @todo: improve this typings ({query: string, count: number}) => Suggestions
   */
  loader: Resolved<Suggestion | null>;

  platform?: Platform;
}

function Searchbar({
  placeholder = "What are you looking for?",
  action = "/s",
  name = "q",
  loader,
  platform,
}: Props) {
  const id = useId();
  const { displaySearchPopup } = useUI();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { setQuery, payload, loading } = useSuggestions(loader);
  const { products = [], searches = [] } = payload.value ?? {};
  const hasProducts = Boolean(products.length);
  const hasTerms = Boolean(searches.length);

  useEffect(() => {
    if (displaySearchPopup.value === true) {
      searchInputRef.current?.focus();
    }
  }, [displaySearchPopup.value]);

  return (
    <div class="flex flex-col relative w-full justify-center">
      <form class="flex items-center relative w-full" id={id} action={action}>
        <button
          aria-label="Pesquisar"
          class="absolute flex right-4 w-fit"
          for={id}
          tabIndex={-1}
          type="submit"
        >
          <Icon class="h-5 text-[#999999] w-5" id="Search" />
        </button>

        <input
          ref={searchInputRef}
          id="search-input"
          class="bg-[#f0f0f0] border-none flex font-normal font-roboto h-12 leading-normal px-4 pr-12 text-[#999999] text-sm w-full"
          name={name}
          onInput={(e) => {
            const value = e.currentTarget.value;

            if (value) {
              sendEvent({
                name: "search",
                params: { search_term: value },
              });
            }

            setQuery(value);
          }}
          placeholder={placeholder}
          role="combobox"
          aria-controls="search-suggestion"
          autocomplete="off"
        />
      </form>

      <div
        class={clx(
          "dropdown flex h-0 w-full",
          (hasProducts || hasTerms) && "dropdown-open",
        )}
      >
        <div aria-hidden tabIndex={0} role="button" class="hidden" />

        <div
          class="dropdown-content bg-white border-[0.0625rem] border-[#ddd] flex flex-col gap-6 max-h-[calc(100vh-12.5rem)] overflow-y-auto p-6 w-full z-30"
          tabIndex={0}
        >
          {searches.length !== 0 && (
            <ul class="flex flex-col gap-5 w-full">
              {searches.map(({ href, term }, index) => (
                <li class="flex w-full">
                  <a
                    class="font-medium font-roboto text-[#333] text-sm underline"
                    href={`/pesquisa?t=${term}`}
                  >
                    {term}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {products.length !== 0 && (
            <div class="flex flex-col gap-6 w-full">
              <span class="font-bold font-roboto text-black text-base">
                Sugestões de produtos
              </span>

              <ul class="flex flex-col w-full">
                {products.map((product, index) => (
                  <li class="border-t-[0.0625rem] border-t-[#f5f5f5] flex py-2 w-full">
                    <SearchbarCard product={product} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
