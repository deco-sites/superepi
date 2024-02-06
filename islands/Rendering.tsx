import { useId } from "$store/sdk/useId.ts";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import { useEffect } from "preact/hooks";

type Props = {
  on: "load" | "visible" | "idle";
  children: ComponentChildren;
};

function waitForElm(selector: string) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

export default function Rendering({ on, children }: Props) {
  const canRender = useSignal(false);
  const id = useId();

  useEffect(() => {
    if (on === "load") {
      addEventListener("load", () => {
        canRender.value = true;
      });
    }

    if (on === "visible") {
      waitForElm(`#${id}`).then(() => {
        const observer = new IntersectionObserver((entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              canRender.value = true;
            }
          }
        });

        observer.observe(document.getElementById(id) as HTMLElement);
      });
    }
  }, []);

  if (!canRender.value) {
    if (on === "visible") {
      return <div id={id} class="min-w-[1px] min-h-[1px] inline-block" />;
    }
  }

  if (on === "idle") {
    if (requestIdleCallback) {
      requestIdleCallback(() => {
        canRender.value = true;
      });
    } else {
      setTimeout(() => {
        canRender.value = true;
      }, 1);
    }
  }

  return <>{children}</>;
}
