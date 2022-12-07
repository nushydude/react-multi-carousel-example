export const NON_MOBILE_VISIBLE_ITEM_COUNT = 3;
export const MOBILE_VISIBLE_ITEM_COUNT = 1;

const config = {
  responsive: {
    desktop: {
      breakpoint: { max: Infinity, min: 1024 },
      items: NON_MOBILE_VISIBLE_ITEM_COUNT,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: NON_MOBILE_VISIBLE_ITEM_COUNT,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      // we really only want to show 1, however, to show previous and next items partially,
      // we need to render 3 and crop them to achieve the same effect.
      items: MOBILE_VISIBLE_ITEM_COUNT,
      partialVisibilityGutter: 30,
    },
  },
  arrows: true,
  draggable: false,
  infinite: true,
  keyBoardControl: false,
  showDots: false,
  slidesToSlide: 1,
  ssr: true,
  swipeable: true,
  partialVisible: true,
};

export default config;
