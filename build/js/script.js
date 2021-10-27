var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');

}

const burger = document.querySelector(".burger");
const menu = document.querySelector(".header-list");
burger.addEventListener("click", function() {
    burger.classList.toggle("active")
    menu.classList.toggle("active")
    document.body.classList.toggle("lock")
})

const headerLinks = document.querySelectorAll('.header-link[data-goto]');
if (headerLinks.length > 0) {
    headerLinks.forEach(headerLink => {
        headerLink.addEventListener("click", onHeaderLinkClick);
    });

    function onHeaderLinkClick(e) {
        const headerLink = e.target;
        if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)) {
            const gotoBlock = document.querySelector(headerLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (burger.classList.contains('active')) {
                burger.classList.remove("active")
                menu.classList.remove("active")
                document.body.classList.remove("lock")
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

var swiper1 = new Swiper(".coins_products", {
    spaceBetween: 80,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     320: {
    //         spaceBetween: 15,
    //         slidesPerView: 1,
    //     },
    //     776: {
    //         // spaceBetween: 100,
    //     },
    //     // 992: {
    //     //     spaceBetween: 35,
    //     //     slidesPerView: 2,
    //     //     slidesPerView: 'auto',
    //     // }
    // },
});