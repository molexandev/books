$(function () {
    // FooterSlideToggle

    $(".footer-top__title-click").on("click", function () {
        $(this).toggleClass("footer-top--active");
        $(this).next().slideToggle();
    });

    // fadeInUp

    // (function () {
    //     var square = document.querySelector(".animation-block");

    //     var observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (
    //                 typeof getCurrentAnimationPreference === "function" &&
    //                 !getCurrentAnimationPreference()
    //             ) {
    //                 return;
    //             }

    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add("animate__fadeInUp");
    //             }
    //         });
    //     });

    //     observer.observe(square);
    // })();

    // // fadeInRight

    // (function () {
    //     var cupImage = document.querySelector(".get-book__img-box");

    //     var observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (
    //                 typeof getCurrentAnimationPreference === "function" &&
    //                 !getCurrentAnimationPreference()
    //             ) {
    //                 return;
    //             }

    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add("animate__fadeInRight");
    //             }
    //         });
    //     });

    //     observer.observe(cupImage);
    // })();

    // // fadeInRLeft

    // (function () {
    //     var infoBox = document.querySelector(".get-book__info");

    //     var observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (
    //                 typeof getCurrentAnimationPreference === "function" &&
    //                 !getCurrentAnimationPreference()
    //             ) {
    //                 return;
    //             }

    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add("animate__fadeInLeft");
    //             }
    //         });
    //     });

    //     observer.observe(infoBox);
    // })();

    // img-animated

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

    // // fadeIn

    // (function () {
    //     var fadeIn = document.querySelector(".partners");

    //     var observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (
    //                 typeof getCurrentAnimationPreference === "function" &&
    //                 !getCurrentAnimationPreference()
    //             ) {
    //                 return;
    //             }

    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add("animate__animated");
    //                 entry.target.classList.add("animate__fadeIn");
    //             }
    //         });
    //     });

    //     observer.observe(fadeIn);
    // })();

    // // flipX

    // (function () {
    //     var flipChapters1 = document.querySelector(".flip-x__1");
    //     var flipChapters2 = document.querySelector(".flip-x__2");
    //     var flipChapters3 = document.querySelector(".flip-x__3");
    //     var flipChapters4 = document.querySelector(".flip-x__4");
    //     var subscriptionWrapper = document.querySelector(
    //         ".subscription__wrapper"
    //     );

    //     var observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (
    //                 typeof getCurrentAnimationPreference === "function" &&
    //                 !getCurrentAnimationPreference()
    //             ) {
    //                 return;
    //             }

    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add("animate__flipInX");
    //             }
    //         });
    //     });

    //     observer.observe(flipChapters1);
    //     observer.observe(flipChapters2);
    //     observer.observe(flipChapters3);
    //     observer.observe(flipChapters4);
    //     observer.observe(subscriptionWrapper);
    // })();

    $(".menu__btn, .menu a").on("click", function () {
        $(".menu__items").toggleClass("menu__items--active");
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