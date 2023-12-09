import {
  Card,
  CardProps,
} from "deco-sites/superepi/components/departmentCarousel/Card/Card.tsx";
import Slider from "deco-sites/superepi/components/ui/Slider.tsx";

export type CarouselProps = {
  cards: CardProps[];
};

export const Carousel = ({
  cards,
}: CarouselProps) => {
  return (
    <Slider
      className="carousel sm:gap-3 sm:w-full"
      role="list"
    >
      {cards.map((card, index) => (
        <Slider.Item
          className="sm:carousel-item sm:max-w-full sm:w-[15.625rem]"
          index={index}
          key={index}
        >
          <Card {...card} />
        </Slider.Item>
      ))}
    </Slider>
  );
};

export default Carousel;
