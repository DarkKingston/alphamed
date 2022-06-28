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
    breakpoints: {
        320: {
          slidesPerView: 2
        },
        480: {
          slidesPerView: 3
        },
        640: {
          slidesPerView: 5
        },
        940: {
            slidesPerView: 6
        }
      }
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
for (let i = 0; i < streets.length; i++) {
    streets[i].addEventListener('click', function () {
        for (let j = 0; j < streets.length; j++) {
            streets[j].classList.remove('street-active');
        }
        for (let k = 0; k < tab.length; k++) {
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
for (let i = 0; i < details.length; i++) {
    detWrapper[i].addEventListener('click', function () {
        for (let j = 0; j < details.length; j++) {
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
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function () {
        for (let j = 0; j < menuItem.length; j++) {
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
for (let i = 0; i < newsTab.length; i++) {
    newsTab[i].addEventListener("click", function () {
        for (let j = 0; j < newsTab.length; j++) {
            newsTab[j].classList.remove('tab-news-active');
            newsSlider[j].classList.remove('news-active');
        }
        newsTab[i].classList.add('tab-news-active');
        newsSlider[i].classList.add('news-active');
    })
}

//language change
let lang = document.querySelectorAll('.nav__wrapper__box__lang');

for (let i = 0; i < lang.length; i++) {
    lang[i].addEventListener("click", function () {
        for (let j = 0; j < lang.length; j++) {
            lang[j].classList.remove('lang-active');
        }
        lang[i].classList.add('lang-active');
    });
}

//slider contact
const contactSliders = new Swiper('.contact_slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: {
        el: '.pag4',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.next4',
        prevEl: '.prev4',
    },
});

var sliderThumbnail = new Swiper('.slider-thumbnail', {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var slider = new Swiper('.slider', {
    navigation: {
        nextEl: '.next5',
        prevEl: '.prev5',
    },
    thumbs: {
        swiper: sliderThumbnail
    }
});

//infodoc cost menu

let costItem = document.querySelectorAll('.cost__wrapper__box__menu__item');
let costContent = document.querySelectorAll('.cost__wrapper__box__services');
for(let i = 0; i < costItem.length; i++){
    costItem[i].addEventListener('click', function(){
        for(let j = 0; j < costItem.length; j++){
            costItem[j].classList.remove('cost-item-active');
            costContent[j].classList.remove('cost-services-show');
        }
        costItem[i].classList.add('cost-item-active');
        costContent[i].classList.add('cost-services-show');
        
    })
}

//cost carousel in a file infodoc

const costSliderMonth = new Swiper('.cost-carousel-months', {
    direction: 'horizontal',
    slidesPerView: 1,
    navigation: {
        nextEl: '.next6',
        prevEl: '.prev6',
    },
});

const costSliderDay = new Swiper('.cost-carousel-days', {
    direction: 'horizontal',
    slidesPerView: 7,
    navigation: {
        nextEl: '.next7',
        prevEl: '.prev7',
    },
});

//hour select
let hour = document.querySelectorAll('.cost_hours_free');
let hourModal = document.querySelectorAll('.modal_hours_free');
let day = document.querySelectorAll('.slide_day_active');
for(let i = 0; i < day.length; i++){
    day[i].addEventListener('click', function(){
        for(let j = 0; j < day.length; j++){
            day[j].classList.remove('slide-day-show');
        }
        day[i].classList.add('slide-day-show');
    });
}
for(let i = 0; i < hour.length; i++){
    hour[i].addEventListener('click', function(){
        for(let j = 0; j < hour.length; j++){
            hour[j].classList.remove('cost-hour-active');
            hourModal[j].classList.remove('modal-hour-active');
        }
        hourModal[i].classList.add('modal-hour-active');
        hour[i].classList.add('cost-hour-active');
    });
    
}
for(let i = 0; i < hourModal.length; i++){
    hourModal[i].addEventListener('click', function(){
        for(let j = 0; j < hourModal.length; j++){
            hourModal[j].classList.remove('modal-hour-active');
        }
        hourModal[i].classList.add('modal-hour-active');
        
    });
    
}

//modal 
const modalSliderMonth = new Swiper('.modal-carousel-months', {
    direction: 'horizontal',
    slidesPerView: 1,
    navigation: {
        nextEl: '.next8',
        prevEl: '.prev8',
    },
});

const modalSliderDay = new Swiper('.modal-carousel-days', {
    direction: 'horizontal',
    slidesPerView: 7,
    navigation: {
        nextEl: '.next9',
        prevEl: '.prev9',
    },
});

//modal show

let modalShow = document.querySelectorAll('.modal_show');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close');
for(let i = 0; i < modalShow.length; i++){
    modalShow[i].addEventListener('click', function(){
        modal.classList.add('modal-show');
    }) 
    modalClose.addEventListener('click', function(){
        modal.classList.remove('modal-show');
    })
}

//script toggle menu/navbar
$(".menu-btn").click(function () {
    $(".menu").toggleClass("active-menu");
    $(".menu-btn i").toggleClass("active");
});