import Image from "apps/website/components/Image.tsx";
import { NavItemProps } from "$store/components/header/Header.tsx";

function NavItem({ item }: { item: NavItemProps }) {
  const { href, label, children } = item;
  const image = item?.image;

  return (
    <li class="group flex items-center h-full">
      <a href={href} class="h-full flex">
        <span class="hover:border-b border-[#F8A531] py-3 h-full items-center text-[10px] lg:text-[11px] xl:text-xs font-semibold transition-all duration-75">
          {label}
        </span>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class="absolute hidden hover:flex group-hover:flex bg-[#f2f2f2] z-[-1] items-start justify-center gap-6 border-t border-b-2 border-base-200 w-screen"
            style={{ 
              top: "48px",
              left: "0px", 
              // marginTop: headerHeight 
            }}
            >
            <ul style={{ columnCount: 3 }} class="max-h-[550px] py-6 px-4 pt-10">
              {children.map((node) => (
                <li class="p-3">
                  <a class="hover:underline transition-all duration-500" href={node.href}>
                    <span class="text-xs font-semibold">{node.label}</span>
                  </a>

                  <ul class="">
                    {node.children?.map((leaf) => (
                      <li>
                        <a class="hover:underline transition-all duration-500" href={leaf.href}>
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

export default NavItem;
