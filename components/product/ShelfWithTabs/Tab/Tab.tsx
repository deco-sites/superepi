import { IS_BROWSER } from "$fresh/runtime.ts";
import { Product as ProductComponent } from "$store/components/product/ShelfWithTabs/Product/Product.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { invoke } from "$store/runtime.ts";
import { clx } from "$store/sdk/clx.ts";
import { useSignal } from "@preact/signals";
import { Product } from "apps/commerce/types.ts";

/** @titleBy name */
export interface TabProps {
    /** @description Nome da tab */
    name: string;
    /** @description Integração dos produtos */
    productsPath: string;
}

export const Tab = ({ productsPath }: TabProps) => {
    const products = useSignal<Product[]>([]);

    if (IS_BROWSER && !products.value.length) {
        invoke.linx.loaders.product.list({ path: productsPath }).then((i) => {
            products.value = i || [];
        });
    }

    if (!products.value.length) return null;

    return (
        <div
            class={clx(
                "gap-3 grid grid-cols-[auto_1fr_auto] items-center w-full",
                "lg:grid-cols-1",
            )}
        >
            <Slider.PrevButton
                class={clx(
                    "bg-transparent border-[0.125rem] border-[#000] duration-300 ease-in-out flex h-9 items-center justify-center pointer-events-auto transition-colors w-9",
                    "hover:bg-black hover:text-white",
                    "disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black",
                    "lg:hidden",
                )}
            >
                <Icon class="h-4 w-4" id="ChevronLeft" />
            </Slider.PrevButton>

            <Slider class="carousel gap-3 items-stretch w-full" role="list">
                {products.value.map((product, index) => (
                    <Slider.Item
                        class="carousel-item h-auto max-w-full w-[19.75rem]"
                        index={index}
                    >
                        <ProductComponent product={product} />
                    </Slider.Item>
                ))}
            </Slider>

            <Slider.NextButton
                class={clx(
                    "bg-transparent border-[0.125rem] border-[#000] duration-300 ease-in-out flex h-9 items-center justify-center pointer-events-auto transition-colors w-9",
                    "hover:bg-black hover:text-white",
                    "disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black",
                    "lg:hidden",
                )}
            >
                <Icon class="h-4 w-4" id="ChevronRight" />
            </Slider.NextButton>
        </div>
    );
};

export default Tab;
