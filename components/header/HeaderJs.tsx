import { useEffect } from "preact/hooks";

export default function HeaderJs() {
  useEffect(() => {
    const header = document.querySelector("#main-header") as HTMLElement;
    if (header === null) return;

    const intersection = new IntersectionObserver((event) => {
      const element = event[0];

      element.target.setAttribute(
        "data-micro-header",
        element.isIntersecting ? "false" : "true",
      );
    }, {
      threshold: 0,
    });

    intersection.observe(header);

    return () => intersection.disconnect();
  }, []);

  return null;
}
