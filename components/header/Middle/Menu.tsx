import { Props } from "$store/components/header/Header.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useId } from "$store/sdk/useId.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type MenuProps = {
  lower: Props["lower"];
  loginIcon: ImageWidget;
};

export const Menu = ({ lower, loginIcon }: MenuProps) => {
  const id = useId();

  return (
    <div class="drawer w-fit lg:hidden font-roboto">
      <input class="drawer-toggle" id={id} type="checkbox" />
      <div class="drawer-content">
        <label class="flex items-center justify-center translate-y-2" for={id}>
          <Icon
            class="text-black scale-[80%] shrink-0"
            id="Menu"
            width={32}
            height={22}
          />
        </label>
      </div>
      <div class="drawer-side z-10">
        <label for={id} aria-label="Fechar menu" class="drawer-overlay" />
        <div class="menu bg-white py-6 px-0 min-h-full w-full max-w-[284px]">
          <div class="h-[70px] px-5 text-[15px] text-black flex items-center w-full gap-1">
            <Image
              alt="Ícone"
              class="h-[30px] object-contain w-[30px]"
              height={30}
              loading="lazy"
              fetchPriority="low"
              src={loginIcon}
              width={30}
            />
            Faça o <a href="/login" class="underline font-bold">Login</a> ou
            {" "}
            <a href="/cadastro" class="underline font-bold">Cadastre-se</a>
          </div>
          <label
            for={id}
            aria-label="Fechar menu"
            class="h-[77px] px-5 text-[#999999] font-bold text-xl w-full flex items-center justify-end"
          >
            X
          </label>
          <a
            href="/super-lojas"
            class="h-[70px] px-2 font-bold text-[15px] text-black flex items-center justify-between w-full"
          >
            Minha conta
            <Icon id="ChevronRight" size={16} />
          </a>
          <a
            href="/super-lojas"
            class="bg-black h-[50px] leading-[30px] px-2.5 font-medium text-sm uppercase text-white flex items-center gap-[5px] w-full"
          >
            <img
              src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/HardCore/Images/selo-epi.png?v=37"
              alt="Selo super lojas"
            />
            Super
            <span class="text-[#F8A531]">lojas</span>
          </a>
          {lower.menus.map(({ items, name }, index) => (
            <div class="collapse rounded-none px-2" key={name + index}>
              <input type="checkbox" class="peer min-h-0 h-[58px]" />

              <strong class="peer-checked:[--rotate:180deg] collapse-title font-black leading-normal min-h-0 p-0 text-black text-base flex items-center justify-between">
                {name}{" "}
                <Icon
                  id="ChevronDown"
                  size={16}
                  class="rotate-[var(--rotate,0deg)] transition-all"
                />
              </strong>

              <div class="collapse-content p-0 flex flex-col gap-6 w-full bg-[#f0f0f0]">
                {items.map(({ name, links }, index) => (
                  <div class="flex flex-col gap-4 w-full" key={name + index}>
                    {
                      /* <span class="font-roboto font-medium leading-normal min-h-0 p-0 text-[#999999] h-[58px] text-sm flex items-center">
                      {name}
                    </span> */
                    }

                    <ul class="flex flex-col gap-3 items-start w-full">
                      {links.map(({ href, name }, index) => (
                        <li class="flex w-full" key={name + index}>
                          <a
                            class="leading-normal min-h-0 p-0 text-[#999999] h-[58px] text-sm flex items-center justify-between font-bold w-full active:!bg-transparent active:!text-[#999999]"
                            href={href}
                          >
                            {name} <Icon id="ChevronRight" size={16} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
