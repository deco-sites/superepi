import Icon from '$store/components/ui/Icon.tsx'

export const Searchbar = () => {
    return (
        <form action='/pesquisa' class='sm:flex sm:items-center sm:relative sm:w-full'>
            <label class='sm:flex sm:items-center sm:justify-center sm:relative sm:w-full'>
                <span class='sm:absolute sm:flex sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0'>
                    Encontre aqui o produto que você procura...
                </span>

                <input
                    class='sm:bg-[#f0f0f0] sm:border-none sm:flex sm:font-normal sm:font-roboto sm:h-12 sm:leading-normal sm:px-4 sm:pr-12 sm:text-[#999999] sm:text-sm sm:w-full'
                    name='search'
                    placeholder='Encontre aqui o produto que você procura...'
                    type='text'
                />
            </label>

            <button
                aria-label='Pesquisar'
                class='sm:absolute sm:flex sm:right-4 sm:w-fit'
                type='submit'
            >
                <Icon class='sm:h-5 sm:text-[#999999] sm:w-5' id='Search' />
            </button>
        </form>
    )
}

export default Searchbar
