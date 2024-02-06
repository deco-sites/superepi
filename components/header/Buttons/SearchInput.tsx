import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import SearchbarDesktop from "$store/islands/Header/SearchbarDesktop.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { useSignal } from "@preact/signals";

export default function SearchInput(
  { searchbar }: { searchbar?: SearchbarProps },
) {
  const { displaySearchPopup } = useUI();
  const query = useSignal("");
  let widthContainerSearch = 0;

  if (displaySearchPopup.value) {
    widthContainerSearch =
      document.querySelector(".searchbarContainer").clientWidth;
  }

  return (
    <>
      <div class="relative w-full searchbarContainer">
        <input
          class="hidden sm:block w-full p-4 h-full absolute bg-[#F2F2F2] rounded-lg text-[#181212]"
          aria-label="search icon button"
          placeholder={searchbar?.placeholder ?? ""}
          onChange={({ target }) => {
            if (target.value) {
              displaySearchPopup.value = true;
              query.value = target.value;
            } else {
              displaySearchPopup.value = false;
            }
          }}
        />
        <a
          href={`/pesquisa?t=${query.value}`}
          class="absolute right-1 p-1 h-full flex items-center"
        >
          <Icon id="MagnifyingGlass" size={24} strokeWidth={0.1} />
        </a>
        <Button
          type="button"
          class="join-item btn-ghost btn-square hidden sm:inline-flex"
          onClick={() => (displaySearchPopup.value = false)}
        >
          <Icon id="XMark" size={16} strokeWidth={2} />
        </Button>
      </div>
      {query?.value?.length > 0 && (
        <Modal
          loading="lazy"
          open={displaySearchPopup.value}
          onClose={() => (displaySearchPopup.value = false)}
          style={{ backgroundColor: "transparent" }}
        >
          <div
            class={`absolute top-0 bg-base-100 container translate-x-[-60px] `}
            style={{
              marginTop: "90px",
              maxWidth: widthContainerSearch,
            }}
          >
            <SearchbarDesktop searchbar={searchbar} query={query.value} />
          </div>
        </Modal>
      )}
    </>
  );
}
