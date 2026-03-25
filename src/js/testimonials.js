import Swiper from 'swiper';
import 'swiper/css/bundle';

const testimonialsLeftArrow = document.getElementById('testimonialsLeftArrow');
const testimonialsRightArrow = document.getElementById(
  'testimonialsRightArrow'
);

let testimonialsSwiper;

testimonialsSwiper = new Swiper('.testimonials-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 12,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  watchOverflow: true,
  breakpoints: {
    1440: {
      centeredSlides: false,
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
  },

  on: {
    init(swiper) {
      document
        .querySelector('.testimonials-swiper-container')
        .classList.add('show');
      updateTestimonialsArrows(swiper);
    },
    slideChange(swiper) {
      updateTestimonialsArrows(swiper);
    },
    reachEnd(swiper) {
      updateTestimonialsArrows(swiper);
    },
    reachBeginning(swiper) {
      updateTestimonialsArrows(swiper);
    },
  },
});

updateTestimonialsArrows(testimonialsSwiper);

function updateTestimonialsArrows(swiper) {
  testimonialsLeftArrow.disabled = swiper.isBeginning;
  testimonialsRightArrow.disabled = swiper.isEnd;
}

testimonialsLeftArrow.addEventListener('click', () => {
  testimonialsSwiper.slidePrev();
});

testimonialsRightArrow.addEventListener('click', () => {
  testimonialsSwiper.slideNext();
});
