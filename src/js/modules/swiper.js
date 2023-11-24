import Swiper from "swiper/bundle";

import "swiper/css/bundle";

function swiperFunc() {
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
}
export default swiperFunc;
