export const SLICK_SETTING = {
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1.5,
      },
    },
  ],
};

export const SLICK_VERTICAL_SETTING = {
  autoplay: true,
  vertical: true,
  infinite: true,
  verticalSwiping: true,
  slidesPerRow: 5,
  slidesToShow: 5,
  asNavFor: ".slider-preview",
  focusOnSelect: true,
};
