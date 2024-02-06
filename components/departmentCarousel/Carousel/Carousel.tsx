import {
  Card,
  CardProps,
} from "$store/components/departmentCarousel/Card/Card.tsx";
import Slider from "$store/components/ui/Slider.tsx";

export type CarouselProps = {
  cards: CardProps[];
};

export const Carousel = ({ cards }: CarouselProps) => {
  return (
    <Slider class="carousel gap-3 w-full" role="list">
      {cards.map((card, index) => (
        <Slider.Item
          class="carousel-item max-w-full w-[15.625rem]"
          index={index}
        >
          <Card {...card} />
        </Slider.Item>
      ))}
    </Slider>
  );
};

export default Carousel;
