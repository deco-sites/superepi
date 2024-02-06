import { NavItemProps } from "$store/components/header/Header.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useSignal } from "@preact/signals";
import Image from "apps/website/components/Image.tsx";

function NavItemAllBrands({ item }: { item: NavItemProps }) {
  const { href, label, children } = item;
  const image = item?.image;
  const indexListItems = useSignal(0);

  return (
    <li class="group flex items-center">
      <a href={href} class="py-3 pb-[6px]">
        <div class="flex gap-2 hover:border-b border-[#F8A531] pb-1 items-center">
          <Icon id="Bars3" size={24} strokeWidth={0.01} />
          <span class="text-[9px] lg:text-[10px] xl:text-xs font-semibold">
            {label}
          </span>
        </div>
      </a>

      {children && children.length > 0 && (
        <div
          class="absolute hidden hover:flex group-hover:flex bg-[#f2f2f2] z-[-1] items-start justify-between gap-6 border-t border-b-2 border-base-200 w-screen transition-all duration-500"
          style={{
            top: "48px",
            left: "0px",
            // marginTop: headerHeight
          }}
        >
          <ul class="py-6 px-6 max-h-[550px] bg-white">
            {children.map((node, index) => (
              <li class="p-1">
                <a
                  class={`hover:underline hover:text-[#F8A531] transition-all duration-500 text-xs ${
                    indexListItems.value === index && "underline text-[#F8A531]"
                  }`}
                  onMouseEnter={() => (indexListItems.value = index)}
                  href={node.href}
                >
                  <span>{node.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div class="flex justify-center items-center max-h-[550px] h-full w-full bg-[#f2f2f2]">
            <ul style={{ columnCount: 3 }} class="py-2">
              {children[indexListItems.value]?.children?.map((node) => (
                <li class="py-3 px-4">
                  <a
                    class="hover:underline transition-all duration-500"
                    href={node.href}
                  >
                    <span class="text-xs font-semibold">{node.label}</span>
                  </a>
                  <ul class="pb-3">
                    {node?.children?.map((leaf) => (
                      <li>
                        <a
                          class="hover:underline transition-all duration-500"
                          href={leaf.href}
                        >
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
        </div>
      )}
    </li>
  );
}

export default NavItemAllBrands;

// {children && children.length > 0 &&
//   (
//     <div
//       class="absolute hidden hover:flex group-hover:flex bg-[#f2f2f2] z-[-1] items-start justify-center gap-6 border-t border-b-2 border-base-200 w-screen transition-all duration-500"
//       style={{
//         top: "50px",
//         left: "0px",
//         // marginTop: headerHeight
//       }}
//       >
//       <ul style={{ columnCount: 3 }} class="max-h-[550px] py-6 px-4">
//         {children.map((node) => (
//           <li class="p-3">
//             <a class="hover:underline transition-all duration-500" href={node.href}>
//               <span>{node.label}</span>
//             </a>

//             <ul class="">
//               {node.children?.map((leaf) => (
//                 <li>
//                   <a class="hover:underline transition-all duration-500" href={leaf.href}>
//                     <span class="text-xs">{leaf.label}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//       {image?.src && (
//         <Image
//           class="p-3"
//           src={image.src}
//           alt={image.alt}
//           width={300}
//           height={332}
//           loading="lazy"
//         />
//       )}
//     </div>
//   )}
