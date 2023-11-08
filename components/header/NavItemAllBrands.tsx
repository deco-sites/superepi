import Image from "apps/website/components/Image.tsx";
import { headerHeight } from "./constants.ts";
import { NavItemProps } from "$store/components/header/Header.tsx";

function NavItemAllBrands({ item }: { item: NavItemProps }) {
  const { href, label, children } = item;
  const image = item?.image;

  return (
    <li class="group flex items-center">
      <a href={href} class="py-3">
        <span class="group-hover:underline text-[10px] lg:text-xs xl:text-base">
          {label}
        </span>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class="fixed hidden hover:flex group-hover:flex bg-base-100 z-50 items-start justify-center gap-6 border-t border-b-2 border-base-200 w-screen"
            style={{ top: "68px", left: "0px", marginTop: headerHeight }}
            >
            <ul style={{ columnCount: 3 }} class="max-h-[550px] py-6 px-4">
              {children.map((node) => (
                <li class="p-3">
                  <a class="hover:underline" href={node.href}>
                    <span>{node.label}</span>
                  </a>

                  <ul class="">
                    {node.children?.map((leaf) => (
                      <li>
                        <a class="hover:underline" href={leaf.href}>
                          <span class="text-xs">{leaf.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            {image?.src && (
              <Image
                class="p-3"
                src={image.src}
                alt={image.alt}
                width={300}
                height={332}
                loading="lazy"
              />
            )}
          </div>
        )}
    </li>
  );
}

export default NavItemAllBrands;
