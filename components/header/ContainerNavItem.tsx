import useBackToTop from "$store/hooks/useBackToTop.tsx";
import NavItem from "./NavItem.tsx";
import NavItemAllBrands from "./NavItemAllBrands.tsx";
import { NavItemProps } from "deco-sites/superepi/components/header/Header.tsx";
import Icon from "deco-sites/superepi/components/ui/Icon.tsx";

export interface ContainerNavItemProps {
  items: NavItemProps[];
}

export default function ContainerNavItem({ items }: ContainerNavItemProps) {
  const percentageToAppear = 0.3;
  const isVisible = useBackToTop(percentageToAppear);
  return (
    <>
      {!isVisible && (
        <div class="flex-auto flex justify-center items-center gap-3">
          {items.map((item, index) => index > 0 ? <NavItem item={item} /> : <NavItemAllBrands item={item} />)}
          <li class="py-2 flex items-center">
            <button class="bg-black py-1 px-3 flex items-center gap-1">
              <Icon id="Check" size={30} class="text-[#F8A531]" />
              <span class="text-[#FFF] font-bold text-sm">SUPER</span>
              <span class="text-[#F8A531] font-bold text-sm">LOJAS</span>
            </button>
          </li>
        </div>
      )}
    </>
  );
}
