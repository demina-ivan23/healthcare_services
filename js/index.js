import {toggleMenuAvailability, listenToMenuOpenButton, listenToMenuCloseButton} from './burger-menu.js';
import {listenToCarouselNavigation} from './review-carousel.js';




toggleMenuAvailability();
window.addEventListener('resize', () => {
    toggleMenuAvailability();
});
listenToMenuOpenButton();
listenToMenuCloseButton();

listenToCarouselNavigation();
