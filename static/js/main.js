const nav = document.querySelector('.navbar');
const navButton = document.querySelector('.hamburger');
const navButtonBox = document.querySelector('.hamburger-box');
const navButtonInner = document.querySelector('.hamburger-inner');
const navItems = document.querySelectorAll('.navbar__item');
const header = document.querySelector('.header');
const optionsForFirstObserver = {
    rootMargin: '-20%'
};



//function that closes navigation after clicking on link or a button
const handleNav = () => {
    nav.classList.toggle('navbar--active');
    navButton.classList.toggle('is-active');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('navbar--active');
            navButton.classList.remove('is-active');
        })
    })
}

navButton.addEventListener('click', handleNav);


//observer function that changes color of burger button depending on a background
const observerOne = new IntersectionObserver(function (entries, observerOne) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navButtonInner.classList.add('hamburger-black');
        } else {
            navButtonInner.classList.remove('hamburger-black');
        }
    })
}, optionsForFirstObserver);

observerOne.observe(header);