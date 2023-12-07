import Icon from "deco-sites/superepi/components/ui/Icon.tsx";

export const Searchbar = () => {
  return (
    <form
      action="/pesquisa"
      className="sm:flex sm:items-center sm:relative sm:w-full"
    >
      <label className="sm:flex sm:items-center sm:justify-center sm:relative sm:w-full">
        <span className="sm:absolute sm:flex sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0">
          Encontre aqui o produto que você procura...
        </span>

        <input
          className="sm:bg-[#f0f0f0] sm:border-none sm:flex sm:font-normal sm:font-roboto sm:h-12 sm:leading-normal sm:px-4 sm:pr-12 sm:text-[#999999] sm:text-sm sm:w-full"
          name="search"
          placeholder="Encontre aqui o produto que você procura..."
          type="text"
        />
      </label>

      <button
        aria-label="Pesquisar"
        className="sm:absolute sm:flex sm:right-4 sm:w-fit"
        type="submit"
      >
        <Icon
          className="sm:h-4 sm:w-4"
          id="Search"
        />
      </button>
    </form>
  );
};

export default Searchbar;