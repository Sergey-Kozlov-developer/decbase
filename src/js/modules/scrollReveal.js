import ScrollReveal from "scrollreveal";

function scrollReveal() {
	// базовые настройки
	ScrollReveal({
		distance: "60px",
		duration: 2800,
	});
	ScrollReveal().reveal(`.home__block, .header`, {
		origin: "top",
	});
	ScrollReveal().reveal(`.home__block`, {
		origin: "bottom",
	});

	ScrollReveal().reveal(`.heftiba`, {
		scale: 1.1,
	});
}
export default scrollReveal;
