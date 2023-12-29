import { CarouselsDepartament } from "deco-sites/superepi/components/search/SearchResult.tsx";

export type DepartamentCarouselProps = {
  carouselDepartament: CarouselsDepartament | undefined;
};

export const DepartamentCarousel = ({
  carouselDepartament
}: DepartamentCarouselProps) => {
  if (carouselDepartament === undefined) return null;

  const { matcher } = carouselDepartament;

  return (
    <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
      <h1>
        {matcher}
      </h1>
    </div>
  );
};

export default DepartamentCarousel;