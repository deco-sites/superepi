import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

function useBackToTop(percentageToAppear: number) {
  const isVisible = useSignal(false);
  

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const positionToAppear = documentHeight * percentageToAppear;
      isVisible.value = scrollY + windowHeight >= positionToAppear;
    }

    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, [percentageToAppear]);

  return isVisible.value;
}

export default useBackToTop;