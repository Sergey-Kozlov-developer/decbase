// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".swiper", {
	slidesPerView: 3,
	spaceBetween: 37,
	navigation: {
		prevEl: "#sliderPrev",
		nextEl: "#sliderNext",
	},
	autoplay: {
		delay: 3000,
	},
});
