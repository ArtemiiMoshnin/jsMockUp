window.onload = function() {
  if (window.matchMedia('(max-width: 767px)').matches) {
  const swiper = new Swiper('.main-block__nav', {
  
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },
  
  keyboard: {
  enabled: true,
  onlyInViewport: true,
  pageUpDown: true,
  },
  
  mousewheel: {
  sensitivity: 1,
  eventsTarget: '.main-block__nav'
  },
  
  spaceBetween: 16,
  slidesPerView: 'auto',
  watchOverflow: true,

  breakpoints: {
    768: {
    enabled: false,
    },
    }
  });
  }
  };

  let btnMore = document.querySelector( '.main-block__read-more');
  let newItems = document.querySelectorAll( '.hide');

  btnMore.addEventListener( 'click', function () {
  
  if ( btnMore.textContent === 'Показать все' ) {
  btnMore.textContent = 'Скрыть';
  btnMore.classList.add('main-block__read-more-rotated');
  for (let i = 0; i < newItems.length; i++) {
    newItems[i].classList.remove('hide');
  }

  }
  else if ( btnMore.textContent === 'Скрыть' ) {
  btnMore.textContent = 'Показать все';
  btnMore.classList.remove('main-block__read-more-rotated');
  for (let i = 0; i < newItems.length; i++) {
    newItems[i].classList.add('hide');
}
  }
   });

   