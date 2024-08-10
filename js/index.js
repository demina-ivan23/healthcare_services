import {toggleMenuAvailability, listenToMenuOpenButton, listenToMenuCloseButton} from './burger-menu.js';
import {listenToCarouselNavigation} from './review-carousel.js';
import {listenToAlertTriggerBtn} from './register-alert.js';



// Burger menu
toggleMenuAvailability();
window.addEventListener('resize', () => {
    toggleMenuAvailability();
});
listenToMenuOpenButton();
listenToMenuCloseButton();

//Register alert
listenToAlertTriggerBtn();

//Review carousel
listenToCarouselNavigation();
