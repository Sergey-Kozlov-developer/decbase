import ScrollReveal from "scrollreveal";

function scrollReveal() {
    // базовые настройки
    ScrollReveal({
        distance: "60px",
        duration: 2800,
    });
    ScrollReveal().reveal(`.home__block, .header, .service__top, .work__project, .wrap, .testimonials__title`, {
        origin: "top",
    });
    ScrollReveal().reveal(`.home__block, .down, .subscribe__input`, {
        origin: "bottom",
    });
    ScrollReveal().reveal(`.about__img, #sliderPrev`, {
        origin: 'left',
    });
    ScrollReveal().reveal(`.about__desc, #sliderNext`, {
        origin: 'right',
    });


    ScrollReveal().reveal(`.heftiba`, {
        scale: 1.1,
    });
}

export default scrollReveal;
