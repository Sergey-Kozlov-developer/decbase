import Swiper from "swiper/bundle";

import "swiper/css/bundle";

function swiperFunc() {
	// init Swiper:
	const swiper = new Swiper("#testimonials-sw", {
		slidesPerView: 3,
		spaceBetween: 50,
		ally: false,
		freeMode: true, // чтобы могли сами листать
		grabCursor: true,
		speed: 2000,
		loop: true,
		navigation: {
			prevEl: "#sliderPrev",
			nextEl: "#sliderNext",
		},
		autoplay: {
			delay: 0.5,
			disableOnInteraction: false,
		},
	});
}
export default swiperFunc;
