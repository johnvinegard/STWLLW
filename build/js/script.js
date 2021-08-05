const burger = document.querySelector(".burger");
const menu = document.querySelector(".header_list");
burger.addEventListener("click", function() {
    burger.classList.toggle("active")
    menu.classList.toggle("active")
    document.body.classList.toggle("lock")
})

const headerLinks = document.querySelectorAll('.header_link[data-goto]');
if (headerLinks.length > 0) {
    headerLinks.forEach(headerLink => {
        headerLink.addEventListener("click", onHeaderLinkClick);
    });

    function onHeaderLinkClick(e) {
        const headerLink = e.target;
        if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)) {
            const gotoBlock = document.querySelector(headerLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

AOS.init();