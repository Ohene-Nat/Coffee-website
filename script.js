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

// Initialize Swiper
const swiper = new Swiper('.swiper', {

  loop: true,
    spaceBetween: 25,
    grabCursor: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,    
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});