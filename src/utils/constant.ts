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
  verticalSwiping: true,
  infinite: true,
  slidesToShow: 3,
  centerPadding: "60px",
  cssEase: "linear",
  autoplaySpeed: 0,
  arrows: false,
};

export const SLICK_VERTICAL_SETTING2 = {
  autoplay: true,
  vertical: true,
  verticalSwiping: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: -1,
  centerPadding: "60px",
  cssEase: "linear",
  autoplaySpeed: 0,
  arrows: false,
};
