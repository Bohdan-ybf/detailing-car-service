var swiper = new Swiper(".ourServiceSlider", {
    slidesPerView: 4.5,
    spaceBetween: 30,
    // loop: true,
    // autoplay: {
    //   delay: 4000,
    // },
  });


  var swiper = new Swiper(".prewPictures", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });