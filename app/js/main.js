$(function(){

    (function () {
      var square = document.querySelector('.animation-block');
    
      var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
            return;
          }
    
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInUp');
          }
        });
      });
    
      observer.observe(square);
    })();


    

      (function () {
      var squareImage = document.querySelector('.about-autor__img');
    
      var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
            return;
          }
    
          if (entry.isIntersecting) {
            entry.target.classList.add('img-animated');
          }
        });
      });
    
      observer.observe(squareImage);
    })();














   $('.menu__btn').on('click', function () {
      $('.menu__items').toggleClass('menu__items--active');
   });
   
   $(".response__rating").rateYo({
      // rating: 3.6,
      starSvg: '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6666 12.1667C9.88826 12.1667 12.4999 9.55499 12.4999 6.33333C12.4999 3.11167 9.88826 0.5 6.6666 0.5C3.44494 0.5 0.833271 3.11167 0.833271 6.33333C0.833271 9.55499 3.44494 12.1667 6.6666 12.1667Z" stroke="#FFCA42"/ background-color: inherit;></svg>',      
      normalFill: "transparent",
      starWidth: "12px",
      spacing: "3px"
    });

    $(".readers__stars").rateYo({
      // rating: 3.6,
      starSvg: '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6666 12.1667C9.88826 12.1667 12.4999 9.55499 12.4999 6.33333C12.4999 3.11167 9.88826 0.5 6.6666 0.5C3.44494 0.5 0.833271 3.11167 0.833271 6.33333C0.833271 9.55499 3.44494 12.1667 6.6666 12.1667Z" stroke="#FFCA42"/ background-color: inherit;></svg>',      
      normalFill: "transparent",
      starWidth: "20px",
      spacing: "5px"
    });

})


