export const slider = () => {
	if(document.querySelector('.js-slider')) {
		const slides = document.querySelectorAll('.js-slide');
		const prevButton = document.querySelector('.js-btn-prev');
		const nextButton = document.querySelector('.js-btn-next');
		const slidesLength = slides.length - 1;

		let activeSlide = 0;

		slides[activeSlide + 1].classList.add('section__slide--next');
		slides[activeSlide].classList.add('section__slide--active');

		const slideHandler = (evt) => {
			const addClass = () => slides[(activeSlide + 1) % slides.length].classList.add('section__slide--next');

			if(evt.target === prevButton) {
				activeSlide > 0 ? activeSlide-- : activeSlide = slidesLength;
			} else {
				activeSlide < slidesLength ? activeSlide++ : activeSlide = 0;
			}

			slides.forEach(el => {
				el.classList.remove('section__slide--active');
				el.classList.remove('section__slide--next');
			})

			slides[activeSlide].classList.add('section__slide--active')

			setTimeout(addClass, 500);
		}

		nextButton.addEventListener('click', slideHandler);
		prevButton.addEventListener('click', slideHandler);
	}
}
