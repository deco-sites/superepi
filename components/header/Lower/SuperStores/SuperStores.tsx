import Image from "apps/website/components/Image.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export const SuperStores = () => {
  return (
    <div
      className={clx(
        "carousel-item dropdown dropdown-hover sm:ml-auto",
        "sm:[&_div]:pointer-events-auto",
      )}
      style={{ position: "initial" }}
    >
      <div
        className="sm:bg-[#000] sm:flex sm:flex-shrink-0 sm:gap-1 sm:h-8 sm:items-center sm:px-2"
        role="button"
        tabIndex={0}
      >
        <Image
          alt=""
          className="sm:h-4 sm:object-contain sm:w-4"
          height={16}
          src="/selo-epi.png"
          width={0}
        />

        <span className="sm:font-medium sm:font-roboto sm:leading-normal sm:text-white sm:text-sm sm:whitespace-nowrap">
          Super <span className="sm:text-[#F8A531]">Lojas</span>
        </span>
      </div>

      <div
        className={clx(
          "dropdown-content sm:absolute sm:bottom-0 sm:h-fit sm:left-0 sm:top-full sm:pointer-events-none sm:px-6 sm:w-full",
          "sm:data-[background=true]:focus:bg-[#00000080]",
        )}
        data-size="large"
        tabIndex={0}
      >
        <div className="sm:flex sm:justify-end sm:max-w-page-container sm:mx-auto sm:relative sm:w-full">
          <a
            className="sm:flex sm:w-fit"
            href="/super-lojas"
          >
            <Image
              alt=""
              className="sm:aspect-[300/200] sm:max-w-[18.75rem] sm:object-cover sm:w-full"
              height={200}
              src="/seal.webp"
              width={0}
            />
          </a>

          <div className="sm:absolute sm:bg-[#000000bf] sm:h-[100vh] sm:left-1/2 sm:top-0 sm:-translate-x-1/2 sm:w-[100vw] sm:-z-10" />
        </div>
      </div>
    </div>
  );
};

export default SuperStores;
