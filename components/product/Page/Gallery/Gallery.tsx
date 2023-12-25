import { ProductDetailsPage } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { useId } from "deco-sites/superepi/sdk/useId.ts";

export type GalleryProps = {
  page: ProductDetailsPage | null;
};

export const Gallery = ({
  page,
}: GalleryProps) => {
  const id = useId();

  if (page === null) return null;

  const {
    product,
  } = page;

  const { image } = product;

  if (image === undefined) return null;

  return (
    <div className="sm:flex sm:flex-col sm:gap-2 sm:w-full">
      <ul className="carousel sm:border-[#e9e8e8] sm:border-[0.125rem] sm:gap-2 sm:w-full">
        {image.map(({
          url,
        }, index) => (
          <li
            className="carousel-item sm:aspect-square sm:flex sm:w-full"
            id={`${id}-${index}`}
            key={index}
          >
            <Image
              alt=""
              className="sm:h-full sm:object-cover sm:w-full"
              height={450}
              src={url ?? ""}
              width={450}
            />
          </li>
        ))}
      </ul>

      <ul className="carousel sm:gap-2 sm:w-full">
        {image.map(({ url }, index) => (
          <li
            className="carousel-item sm:border-[#e9e8e8] sm:border-[0.125rem] sm:aspect-square sm:flex sm:w-[6.25rem]"
            key={index}
          >
            <a
              className="sm:flex sm:h-full sm:w-full"
              href={`#${id}-${index}`}
            >
              <Image
                alt=""
                className="sm:h-full sm:object-cover sm:w-full"
                height={100}
                src={url ?? ""}
                width={100}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
