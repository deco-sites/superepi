import Slider from "$store/components/ui/Slider.tsx";
import { useId } from "preact/hooks";
import Icon from "$store/components/ui/Icon.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import HeaderSections from "$store/components/ui/SectionHeader2.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Category {
  label?: string;
  href?: string;
  image?: ImageWidget;
  buttonText?: string;
  children?: { label: string; href: string }[];
}

export type BorderRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export interface Props {
  header?: {
    title?: string;
    description?: string;
  };
  list?: Category[];
  layout?: {
    headerAlignment?: "center" | "left";
    borderRadius: BorderRadius;
    categoryCard?: {
      textPosition?: "top" | "bottom";
      textAlignment?: "center" | "left";
    };
  };
}

function CardText(
  { label, alignment, children }: {
    label?: string;
    alignment?: "center" | "left";
  },
) {
  return (
    <div
      class={`group flex flex-col min-h-[50px] ${
        alignment === "left" ? "justify-start" : "justify-center"
      }`}
    >
      {label && (
        <h3 class="text-base lg:text-lg font-bold text-white text-center transition-all duration-75">
          {label}
        </h3>
      )}

      {children && children.length > 0 &&
        (
          <div
            class="hidden hover:flex group-hover:flex bg-[#f2f2f2] z-[-1] items-start justify-center gap-6 border-t border-b-2 border-base-200 w-screen"
            style={{
              top: "48px",
              left: "0px",
            }}
          >
            <ul class="max-h-[550px] py-6 px-4 pt-10">
              {children.map((node) => (
                <li class="p-3">
                  <a
                    class="hover:underline transition-all duration-500"
                    href={node.href}
                  >
                    <span class="text-xs font-semibold">{node.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
}

function Buttons() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-1">
        <Slider.PrevButton class="btn btn-circle btn-outline rounded-none bg-base-100 text-[#181212]">
          <Icon
            size={24}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-1">
        <Slider.NextButton class="btn btn-circle btn-outline rounded-none bg-base-100 text-[#181212]">
          <Icon
            size={24}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

function DeparmentList(props: Props) {
  const id = `category-list-${useId()}`;
  const {
    header = {
      title: "",
      description: "",
    },
    list = [
      {
        tag: "10% off",
        label: "Feminino",
        description: "Moda feminina direto de Milão",
        href: "/feminino",
        image:
          "https://ik.imagekit.io/decocx/tr:w-680,h-680/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fdcb3c8f-d629-485e-bf70-8060bd8a9f65",
        buttonText: "Ver produtos",
      },
    ],
    layout = {
      headerAlignment: "center",
      borderRadius: "sm",
      categoryCard: {
        textPosition: "top",
        textAlignment: "center",
      },
    },
  } = props;

  return (
    <div
      id={id}
      class="max-w-[1300px] mx-auto py-4 px-4 md:px-0 flex flex-col gap-4 text-base-content lg:gap-6 lg:py-6"
    >
      <div class="flex justify-between">
        <HeaderSections
          title={header?.title || ""}
          description={header?.description || ""}
          fontSize={"Large"}
          alignment={layout?.headerAlignment || "center"}
        />
        <div class="flex gap-2">
          <Buttons />
        </div>
      </div>

      <Slider class="carousel carousel-start gap-4 lg:gap-6 row-start-2 row-end-5">
        {list.map((
          { tag, label, description, href, image, buttonText },
          index,
        ) => (
          <Slider.Item
            index={index}
            class={`flex flex-col gap-4 carousel-item first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0 rounded-${layout?.borderRadius} overflow-hidden`}
          >
            <a
              href={href}
              class="flex flex-col gap-4 lg:w-[280px] w-40 lg:h-auto relative"
            >
              {label && (
                <div
                  class={`absolute ${
                    layout.categoryCard?.textPosition === "bottom"
                      ? "bottom-0"
                      : "top-0"
                  } 
                ${
                    layout?.categoryCard?.textAlignment === "left"
                      ? "justify-start"
                      : "justify-center"
                  } z-10 text-base flex items-center py-3 w-full bg-[#000000b8]`}
                >
                  <CardText
                    tag={tag}
                    label={label}
                    description={description}
                    alignment={layout?.categoryCard?.textAlignment}
                  />
                </div>
              )}
              {image &&
                (
                  <div
                    class={` bg-white ${
                      layout.categoryCard?.textPosition === "bottom"
                        ? "pb-8"
                        : label && "pt-14"
                    }`}
                  >
                    <figure>
                      <Image
                        class="w-full object-cover"
                        src={image}
                        alt={description || label || tag}
                        width={171}
                        height={172}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                )}
            </a>
            {buttonText &&
              <a href={href} class="btn">{buttonText}</a>}
          </Slider.Item>
        ))}
      </Slider>

      <SliderJS rootId={id} />
    </div>
  );
}

export default DeparmentList;
