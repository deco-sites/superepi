import { clx } from "$store/sdk/clx.ts";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export type LayoutControlProps = {
  id: string;
};

export const LayoutControl = ({ id }: LayoutControlProps) => {
  const grid4 = useSignal(false);

  useEffect(() => {
    const shelf = document.querySelector(`#${id}`);
    if (shelf === null) return;

    const classGrid3 = clx("lg:!grid-cols-3");
    const classGrid4 = clx("lg:!grid-cols-4");
    const value = grid4.value;

    switch (value) {
      case true:
        shelf.classList.remove(classGrid3);
        shelf.classList.add(classGrid4);
        break;
      case false:
        shelf.classList.add(classGrid3);
        shelf.classList.remove(classGrid4);
        break;
    }

    shelf.classList.add(grid4.value === true ? classGrid4 : classGrid3);
  }, [grid4.value]);

  return (
    <div class="sm:flex sm:gap-3 sm:items-center">
      <button
        class="sm:gap-[0.125rem] sm:grid sm:grid-cols-[repeat(3,0.75rem)]"
        onClick={() => (grid4.value = false)}
      >
        {new Array(6).fill(0).map(({}, index) => (
          <span
            class={clx(
              "sm:flex sm:h-3 sm:w-full",
              grid4.value === true ? "sm:bg-white" : "sm:bg-[#151514]",
            )}
          />
        ))}
      </button>

      <button
        class="sm:gap-[0.125rem] sm:grid sm:grid-cols-[repeat(4,0.75rem)]"
        onClick={() => (grid4.value = true)}
      >
        {new Array(8).fill(0).map(({}, index) => (
          <span
            class={clx(
              "sm:flex sm:h-3 sm:w-full",
              grid4.value === true ? "sm:bg-[#151514]" : "sm:bg-white",
            )}
          />
        ))}
      </button>
    </div>
  );
};

export default LayoutControl;
