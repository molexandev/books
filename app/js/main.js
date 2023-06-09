$(function () {
    // FooterSlideToggle

    $(".footer-top__title-click").on("click", function () {
        $(this).toggleClass("footer-top--active");
        $(this).next().slideToggle();
    });

    // fadeInUp

    (function () {
        var square = document.querySelector(".animation-block");

        var observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (
                    typeof getCurrentAnimationPreference === "function" &&
                    !getCurrentAnimationPreference()
                ) {
                    return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__fadeInUp");
                }
            });
        });

        observer.observe(square);
    })();

    // fadeInRight

    (function () {
        var cupImage = document.querySelector(".get-book__img-box");

        var observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (
                    typeof getCurrentAnimationPreference === "function" &&
                    !getCurrentAnimationPreference()
                ) {
                    return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__fadeInRight");
                }
            });
        });

        observer.observe(cupImage);
    })();

    // fadeInRLeft

    (function () {
        var infoBox = document.querySelector(".get-book__info");

        var observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (
                    typeof getCurrentAnimationPreference === "function" &&
                    !getCurrentAnimationPreference()
                ) {
                    return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__fadeInLeft");
                }
            });
        });

        observer.observe(infoBox);
    })();

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

    // fadeIn

    (function () {
        var fadeIn = document.querySelector(".partners");

        var observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (
                    typeof getCurrentAnimationPreference === "function" &&
                    !getCurrentAnimationPreference()
                ) {
                    return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__animated");
                    entry.target.classList.add("animate__fadeIn");
                }
            });
        });

        observer.observe(fadeIn);
    })();

    // flipX

    (function () {
        var flipChapters1 = document.querySelector(".flip-x__1");
        var flipChapters2 = document.querySelector(".flip-x__2");
        var flipChapters3 = document.querySelector(".flip-x__3");
        var flipChapters4 = document.querySelector(".flip-x__4");
        var subscriptionWrapper = document.querySelector(
            ".subscription__wrapper"
        );

        var observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (
                    typeof getCurrentAnimationPreference === "function" &&
                    !getCurrentAnimationPreference()
                ) {
                    return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__flipInX");
                }
            });
        });

        observer.observe(flipChapters1);
        observer.observe(flipChapters2);
        observer.observe(flipChapters3);
        observer.observe(flipChapters4);
        observer.observe(subscriptionWrapper);
    })();

    $(".menu__btn").on("click", function () {
        $(".menu__items").toggleClass("menu__items--active");
    });

    $(".response__rating").rateYo({
        // rating: 3.6,
        starSvg:
            '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6666 12.1667C9.88826 12.1667 12.4999 9.55499 12.4999 6.33333C12.4999 3.11167 9.88826 0.5 6.6666 0.5C3.44494 0.5 0.833271 3.11167 0.833271 6.33333C0.833271 9.55499 3.44494 12.1667 6.6666 12.1667Z" stroke="#FFCA42"/ background-color: inherit;></svg>',
        normalFill: "transparent",
        starWidth: "12px",
        spacing: "3px",
    });

    $(".readers__stars").rateYo({
        // rating: 3.6,
        starSvg:
            '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6666 12.1667C9.88826 12.1667 12.4999 9.55499 12.4999 6.33333C12.4999 3.11167 9.88826 0.5 6.6666 0.5C3.44494 0.5 0.833271 3.11167 0.833271 6.33333C0.833271 9.55499 3.44494 12.1667 6.6666 12.1667Z" stroke="#FFCA42"/ background-color: inherit;></svg>',
        normalFill: "transparent",
        starWidth: "20px",
        spacing: "5px",
    });
});
