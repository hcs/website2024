import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};
export default function CustomCarousel({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      containerClass="my-5 sm:my-10"
      itemClass="sm:min-h-52 mx-2"
      partialVisible={false}
      infinite={true}
      centerMode={true}
    >
      {children}
    </Carousel>
  );
}
