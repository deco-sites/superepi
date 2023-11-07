import useBackToTop from "$store/hooks/useBackToTop.tsx";
import NavItem from "./NavItem.tsx";
import { NavItemProps } from "deco-sites/superepi/components/header/Header.tsx";

export interface ContainerNavItemProps {
  items: NavItemProps[];
}

export default function ContainerNavItem({ items }: ContainerNavItemProps) {
  const percentageToAppear = 0.3;
  const isVisible = useBackToTop(percentageToAppear);
  console.log(isVisible, "ISVISIBLE");
  return (
    <>
      {!isVisible && (
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>
      )}
    </>
  );
}
