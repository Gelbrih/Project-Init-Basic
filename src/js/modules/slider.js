//import Swiper from 'swiper/bundle';
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel } from "swiper";

export const slider = new Swiper('.swiper', {
   modules: [Navigation, Pagination, Mousewheel, Autoplay],
   spaceBetween: 10,
   direction: 'horizontal',
   loop: true,
   flipEffect: {
      slideShadows: false,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   mousewheel: false,
   autoplay: {
      delay: 3000,
   },
});
