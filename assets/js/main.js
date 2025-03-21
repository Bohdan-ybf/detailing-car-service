var swiper = new Swiper(".ourServiceSlider", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    // loop: true,
    // autoplay: {
    //   delay: 4000,
    // },
    breakpoints: {
      // when window width is >= 320px
   
      // when window width is >= 480px
      768: {
          slidesPerView: 3.5,
      },
      // when window width is >= 640px
      991: {
          slidesPerView: 4.5,
      }
  }
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