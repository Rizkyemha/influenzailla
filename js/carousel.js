export function carousel() {
  $(".carousel").slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  });
}
