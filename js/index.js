const toggleMenuAvailability = () => {
    const navbar = document.querySelector('.hero__content__header__navbar');
    const menuOpenButton = document.querySelector('.hero__content__header__menu-button');
    const burgerMenu = document.querySelector('.hero__content__header__burger-menu');

    if (window.screen.width > 700) {
        navbar.classList.remove('hidden');
        menuOpenButton.classList.add('hidden');
        burgerMenu.classList.add('hidden');
    } else {
        navbar.classList.add('hidden');
        menuOpenButton.classList.remove('hidden');
    }
};

const listenToMenuOpenButton = () => {
    const menuOpenButton = document.querySelector('.hero__content__header__menu-button');
    const burgerMenu = document.querySelector('.hero__content__header__burger-menu');
    const openBurgerMenu = () => {
        burgerMenu.classList.remove('hidden');
        menuOpenButton.classList.add('hidden');
    };
    menuOpenButton.addEventListener('click', openBurgerMenu);
};
const listenToMenuCloseButton = () => {
    const menuCloseButton = document.querySelector('.hero__content__header__burger-menu__cross-container');
    const menuOpenButton = document.querySelector('.hero__content__header__menu-button');
    const burgerMenu = document.querySelector('.hero__content__header__burger-menu');
    const closeBurgerMenu = () => {
        burgerMenu.classList.add('hidden');
        menuOpenButton.classList.remove('hidden');
    };
    menuCloseButton.addEventListener('click', closeBurgerMenu);
}
toggleMenuAvailability();
window.addEventListener('resize', () => {
    toggleMenuAvailability();
});
listenToMenuOpenButton();
listenToMenuCloseButton();
