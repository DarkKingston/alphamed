const swiper = new Swiper('.slider-bg', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.pag1',
      type: 'bullets',
    },
  
    navigation: {
      nextEl: '.next1',
      prevEl: '.prev1',
    },
});
  
const swiperStreet = new Swiper('.streets', {
    direction: 'horizontal',
    slidesPerView: 6,
});

const diagnosticSlider = new Swiper('.diagnostic_slider', {
    direction: 'horizontal',
    slidesPerView: 5,
    pagination: {
      el: '.pag2',
      type: 'fraction',
    },
  
    navigation: {
      nextEl: '.next2',
      prevEl: '.prev2',
    },
});

//tab streets
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

//tab sliders diagnostics
let detWrapper = document.querySelectorAll('.det__wrapper');
let details = document.querySelectorAll('.det__wrapper__img');
let hoverOff = document.querySelectorAll('.hover_off');
let hover = document.querySelectorAll('.hover');
let menu = document.querySelectorAll('.diagnostic__info');
let title = document.querySelectorAll('.det__wrapper__title');
for(let i = 0; i < details.length; i++){
    detWrapper[i].addEventListener('click', function(){
        for(let j = 0; j < details.length; j++){
            details[j].classList.remove('det-active');
            hoverOff[j].classList.remove('hover-off-active');
            hover[j].classList.remove('hover-active');
            title[j].classList.remove('det-active-title');
            menu[j].classList.remove('diagnostic-info-show');
        }
        details[i].classList.add('det-active');
        hoverOff[i].classList.add('hover-off-active');
        menu[i].classList.add('diagnostic-info-show');
        hover[i].classList.add('hover-active');
        title[i].classList.add('det-active-title');
    })
}

// tab diagnostic content
let content = document.querySelectorAll('.tab_diagnostic');
let arrDiagnostic = document.querySelectorAll('.arrow_diagnostic');
let menuItem = document.querySelectorAll('.diagnostic__info__box__menu__item');
for(let i = 0; i < menu.length; i++){
    menuItem[i].addEventListener('click', function(){
        for(let j = 0; j < menu.length; j++){
            menuItem[j].classList.remove('diagnostic-item-active');
            content[j].classList.remove('diagnostic-show');
            arrDiagnostic[j].classList.remove('arrow-active-diagnostic');
        }
        menuItem[i].classList.add('diagnostic-item-active');
        content[i].classList.add('diagnostic-show');
        arrDiagnostic[i].classList.add('arrow-active-diagnostic');
    })
}