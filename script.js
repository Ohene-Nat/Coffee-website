const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
menuOpenButton.addEventListener('click', () => {
    //toggle the class 'show-mobile-menu' on the body element when the menu button is clicked
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener('click', () => {
    //toggle the class 'show-mobile-menu' on the body element when the menu button is clicked
    document.body.classList.toggle("show-mobile-menu");
});