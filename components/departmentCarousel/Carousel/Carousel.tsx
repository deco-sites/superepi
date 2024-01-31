import { Card, CardProps } from '$store/components/departmentCarousel/Card/Card.tsx'
import Slider from '$store/components/ui/Slider.tsx'

export type CarouselProps = {
    cards: CardProps[]
}

export const Carousel = ({ cards }: CarouselProps) => {
    return (
        <Slider class='carousel sm:gap-3 sm:w-full' role='list'>
            {cards.map((card, index) => (
                <Slider.Item class='sm:carousel-item sm:max-w-full sm:w-[15.625rem]' index={index}>
                    <Card {...card} />
                </Slider.Item>
            ))}
        </Slider>
    )
}

export default Carousel
