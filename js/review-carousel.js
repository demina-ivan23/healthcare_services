export const listenToCarouselNavigation = () => {
    const track = document.querySelector('.review__content__carousel-container__track-container__track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.review-navigation__left-arrow-container__icon');
    const nextButton = document.querySelector('.review-navigation__right-arrow-container__icon');
    const indicators = document.querySelectorAll('.review-card-indicator');
    const addIdsToElements = () => {
        let i = 1;
        let percent = 0;
        slides.forEach(slide => {
            //giving id's to slides
            slide.id = 'review-card-container-' + i;
            i++;
            //setting slides' position
            slide.style.left = percent + '%';
            percent += 100;
        });
        let k = 1;
        indicators.forEach(indicator => {
            //'binding' indicators with slides by giving indicator.slideId a 
            // value of slide.id
            indicator.slideId = 'review-card-container-' + k;
            k++;
        });
    }
    const getActiveSlide = () => track.querySelector('.active');
    const setActiveSlide = (activeSlide = null) => {
        if (!activeSlide) {
            activeSlide = track.querySelector(sessionStorage.getItem('activeCarouselSlide')) ?? slides[0];
        }

        const currentSlide = getActiveSlide();
        if (currentSlide) {
            currentSlide.classList.remove('active');
        }
        console.log(activeSlide);
        activeSlide.classList.add('active');
        sessionStorage.setItem('activeCarouselSlide', `#${activeSlide.id}`);

        document.querySelector('.review-card-indicator.active')?.classList.remove('active');
        const newActiveIndicator = Array.from(indicators).find(indicator => indicator.slideId === activeSlide.id);
        newActiveIndicator.classList.add('active');
    };

    const toPrevSlide = () => {
        let currentSlide = getActiveSlide();
        let prevSlide = currentSlide.previousElementSibling ?? track.lastElementChild;
        setActiveSlide(prevSlide);
        const moveBy = prevSlide.style.left;
        track.style.transform = 'translateX(-' + moveBy + ')';
        console.log(prevSlide);
    }
    const toNextSlide = () => {
        let currentSlide = getActiveSlide();
        let nextSlide = currentSlide.nextElementSibling ?? track.firstElementChild;
        setActiveSlide(nextSlide);
        const moveBy = nextSlide.style.left;
        track.style.transform = 'translateX(-' + moveBy + ')';
        console.log(currentSlide, nextSlide);
    }
    const toSlideByIndicator = (target) => {
        let currentSlide = getActiveSlide();
        let slideToJumpTo =  track.querySelector('#' + target.slideId);
        setActiveSlide(slideToJumpTo);
        const moveBy = slideToJumpTo.style.left;
        track.style.transform = 'translateX(-' + moveBy + ')';
        console.log(target.slideId);
    }
    //add ids to elements
    addIdsToElements();
    //set the active slide
    setActiveSlide();

    prevButton.addEventListener('click', toPrevSlide);
    nextButton.addEventListener('click', toNextSlide);
    for (let indicator of indicators) {
        indicator.addEventListener('click', event => toSlideByIndicator(event.target))
    }
}