"use client";

import Icon from "$store/components/ui/Icon.tsx";
import { useUI } from "$store/sdk/useUI.ts";

export default function SearchButton() {
  const { displaySearchPopup } = useUI();

  return (
    <button onClick={() => displaySearchPopup.value = true}>
      <Icon id="Search" width={30} height={30} />
    </button>
  );
}
