const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidePerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  