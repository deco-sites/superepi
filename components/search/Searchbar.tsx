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

import ProductCard from "$store/components/product/ProductCard.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { useId } from "$store/sdk/useId.ts";
import { useSuggestions } from "$store/sdk/useSuggestions.ts";
import { useUI } from "$store/sdk/useUI.ts";
import { Suggestion } from "apps/commerce/types.ts";
import { Resolved } from "deco/engine/core/resolver.ts";
import { useEffect, useRef } from "preact/compat";
import type { Platform } from "$store/apps/site.ts";
import { SearchbarCard } from "deco-sites/superepi/components/product/SearchbarCard/SearchbarCard.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

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
    <div className="sm:flex sm:flex-col sm:relative sm:w-full">
      <form
        className="sm:flex sm:items-center sm:relative sm:w-full"
        id={id}
        action={action}
      >
        <Button
          aria-label="Pesquisar"
          className="sm:absolute sm:flex sm:right-4 sm:w-fit"
          for={id}
          tabIndex={-1}
          type="submit"
        >
          <Icon
            className="sm:h-5 sm:text-[#999999] sm:w-5"
            id="Search"
          />
        </Button>

        <input
          ref={searchInputRef}
          id="search-input"
          className="sm:bg-[#f0f0f0] sm:border-none sm:flex sm:font-normal sm:font-roboto sm:h-12 sm:leading-normal sm:px-4 sm:pr-12 sm:text-[#999999] sm:text-sm sm:w-full"
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
        className={clx(
          "dropdown sm:flex sm:h-0 sm:w-full",
          (hasProducts || hasTerms) && "dropdown-open",
        )}
      >
        <div
          aria-hidden
          tabIndex={0}
          role="button"
          className="sm:hidden"
        />

        <div
          className="dropdown-content sm:bg-white sm:border-[0.0625rem] sm:border-[#ddd] sm:flex sm:flex-col sm:gap-6 sm:max-h-[calc(100vh-12.5rem)] sm:overflow-y-auto sm:p-6 sm:w-full sm:z-30"
          tabIndex={0}
        >
          {searches.length !== 0 && (
            <ul className="sm:flex sm:flex-col sm:gap-5 sm:w-full">
              {searches.map(({
                href,
                term,
              }, index) => (
                <li className="sm:flex sm:w-full">
                  <a
                    className="sm:font-medium sm:font-roboto sm:text-[#333] sm:text-sm sm:underline"
                    href={`/pesquisa?t=${term}`}
                  >
                    {term}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {products.length !== 0 && (
            <div className="sm:flex sm:flex-col sm:gap-6 sm:w-full">
              <span className="sm:font-bold sm:font-roboto sm:text-black sm:text-base">
                Sugestões de produtos
              </span>

              <ul className="sm:flex sm:flex-col sm:w-full">
                {products.map((product, index) => (
                  <li className="sm:border-t-[0.0625rem] sm:border-t-[#f5f5f5] sm:flex sm:py-2 sm:w-full">
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
