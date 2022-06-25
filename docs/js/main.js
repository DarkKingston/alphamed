const swiper = new Swiper('.slider-bg', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
  
const swiperStreet = new Swiper('.streets', {
    direction: 'horizontal',
    slidesPerView: 6,
});


let streets = document.querySelectorAll('.street_wrapper');
let tab = document.querySelectorAll('.tab__info');
for(let i = 0; i < streets.length; i++){
    streets[i].addEventListener('click', function(){
        for(let j = 0; j < streets.length; j++){
            streets[j].classList.remove('street-active');
        }
        for(let k = 0; k < tab.length; k++){
            tab[k].classList.remove('tab-active');
        }
        streets[i].classList.add('street-active');
        tab[i].classList.add('tab-active');
    });
};