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
for(let i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener('click', function(){
        for(let j = 0; j < menuItem.length; j++){
            menuItem[j].classList.remove('diagnostic-item-active');
            content[j].classList.remove('diagnostic-show');
            arrDiagnostic[j].classList.remove('arrow-active-diagnostic');
        }
        menuItem[i].classList.add('diagnostic-item-active');
        content[i].classList.add('diagnostic-show');
        arrDiagnostic[i].classList.add('arrow-active-diagnostic');
    })
}

//slider news
const newsSlider1 = new Swiper('.news_carousel1', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 19,
    pagination: {
      el: '.pag3',
      type: 'fraction',
    },
  
    navigation: {
      nextEl: '.next3',
      prevEl: '.prev3',
    },
});
const newsSlider2 = new Swiper('.news_carousel2', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 19,
    pagination: {
      el: '.pag3',
      type: 'fraction',
    },
  
    navigation: {
      nextEl: '.next3',
      prevEl: '.prev3',
    },
});

//tab news
let newsTab = document.querySelectorAll('.news__wrapper__box__tabs__item');
let newsSlider = document.querySelectorAll('.news_carousel');
 for(let i = 0; i < newsTab.length; i++){
    newsTab[i].addEventListener("click", function(){
        for(let j = 0; j < newsTab.length; j++){
            newsTab[j].classList.remove('tab-news-active');
            newsSlider[j].classList.remove('news-active');
        }
        newsTab[i].classList.add('tab-news-active');
        newsSlider[i].classList.add('news-active');
    })
}

//language change
let lang = document.querySelectorAll('.nav__wrapper__box__lang');

for(let i = 0; i < lang.length; i++){
    lang[i].addEventListener("click", function(){
        for(let j = 0; j < lang.length; j++){
            lang[j].classList.remove('lang-active');
        }
        lang[i].classList.add('lang-active');
    })
}