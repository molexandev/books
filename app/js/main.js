$(function () {
    // FooterSlideToggle

    $(".footer-top__title-click").on("click", function () {
        $(this).toggleClass("footer-top--active");
        $(this).next().slideToggle();
    });


    (function () {
        var squareImage = document.querySelector(".about-autor__img");
        var squareImage2 = document.querySelector(".learning__img");

        var observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (
                    typeof getCurrentAnimationPreference === "function" &&
                    !getCurrentAnimationPreference()
                ) {
                    return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add("img-animated");
                }
            });
        });

        observer.observe(squareImage);
        observer.observe(squareImage2);
    })();


    $(".menu__btn, .menu a").on("click", function () {
        $(".menu__items").toggleClass("menu__items--active");
        $(".menu__btn").toggleClass("menu__btn--active");
        $("body").toggleClass("lock");
    });



    $("#menu").on("click", "a", function (e) {
        e.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 1500);
    });
});

wow = new WOW(
    {
    boxClass:     'wow',      
    animateClass: 'animate__animated', 
    offset:       0,   
    mobile:       true,
    live:         true       
  }
  )
  wow.init();