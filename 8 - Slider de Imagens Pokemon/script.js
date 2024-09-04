new Swiper('.slider', {
    loop: true,
    spaceBetween: 30,
  
    // Pagination circles
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

    // Responsiviness 
    breakpoints: {
        0: {
            slidesPerView: 1 
        },

        768: {
            slidesPerView: 2 
        },

        1024: {
            slidesPerView: 3 
        }
        
    }
  
  });
  