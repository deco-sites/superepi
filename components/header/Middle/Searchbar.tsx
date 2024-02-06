import Icon from "$store/components/ui/Icon.tsx";

export const Searchbar = () => {
  return (
    <form
      action="/pesquisa"
      class="flex items-center relative w-full"
    >
      <label class="flex items-center justify-center relative w-full">
        <span class="absolute flex h-0 opacity-0 overflow-hidden w-0">
          Encontre aqui o produto que você procura...
        </span>

        <input
          class="bg-[#f0f0f0] border-none flex font-normal font-roboto h-12 leading-normal px-4 pr-12 text-[#999999] text-sm w-full line-clamp-1 text-ellipsis"
          name="search"
          placeholder="Encontre aqui o produto que você procura..."
          type="text"
        />
      </label>

      <button
        aria-label="Pesquisar"
        class="absolute flex right-4 w-fit"
        type="submit"
      >
        <Icon class="h-5 text-[#999999] w-5" id="Search" />
      </button>
    </form>
  );
};

export default Searchbar;
