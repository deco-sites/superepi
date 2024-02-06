import { NavItemProps } from "$store/components/header/Header.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import useBackToTop from "$store/hooks/useBackToTop.tsx";
import { useSignal } from "@preact/signals";
import NavItem from "./NavItem.tsx";
import NavItemAllBrands from "./NavItemAllBrands.tsx";

export interface ContainerNavItemProps {
  items: NavItemProps[];
}

export default function ContainerNavItem({ items }: ContainerNavItemProps) {
  const openPopUp = useSignal(false);
  const percentageToAppear = 0.3;
  const isVisible = useBackToTop(percentageToAppear);
  return (
    <>
      {!isVisible && (
        <div class="flex-auto flex justify-between items-center gap-3 max-w-[1300px] w-full h-full mx-auto md:px-4">
          {items.map((item, index) =>
            index > 0
              ? <NavItem item={item} />
              : <NavItemAllBrands item={item} />
          )}
          <div class="relative flex flex-col">
            <li class="py-2 flex items-center">
              <button
                class="bg-black py-1 px-3 flex items-center gap-1"
                onMouseEnter={() => (openPopUp.value = true)}
                onMouseLeave={() => (openPopUp.value = false)}
              >
                <Icon id="Check" size={30} class="text-[#F8A531]" />
                <span class="text-[#FFF] font-bold text-sm">SUPER</span>
                <span class="text-[#F8A531] font-bold text-sm">LOJAS</span>
              </button>
            </li>
            {openPopUp.value && (
              <div
                class="popUpSuperLojas flex absolute"
                style={{
                  backgroundImage:
                    "url(https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/HardCore/Images/background-loja.png)",
                }}
                onMouseEnter={() => (openPopUp.value = true)}
                onMouseLeave={() => (openPopUp.value = false)}
              >
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/HardCore/Images/trabalhadora-epi.png"
                  alt="Image"
                />
                <div class="flex flex-col">
                  <p class="conhecanossaslojas">conheça nossa lojas</p>
                  <span class="containerSuperLojas">
                    SUPER <br /> LOJAS
                  </span>

                  <button class="bg-[#F8A531] text-white font-semibold">
                    Conheça
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
