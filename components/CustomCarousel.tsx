import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
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
      ssr={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="my-5 sm:my-20"
      itemClass="min-h-52 mx-2"
      partialVisible={false}
    >
      {children}
    </Carousel>
  );
}
