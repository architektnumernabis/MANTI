const nav = document.querySelector('.navbar');
const navButton = document.querySelector('.hamburger');
const navButtonBox = document.querySelector('.hamburger-box');
const navButtonInner = document.querySelector('.hamburger-inner');
const navItems = document.querySelectorAll('.navbar__item');
const header = document.getElementById('header');
const aboutMe = document.querySelector('.about-me');
const whySwim = document.querySelector('.why-swim');
const news = document.querySelector('.news');
var windowWidth = window.innerWidth;
const bestSwimmers = document.querySelector('.best-swimmers');
const closeButton = document.querySelector('.close');
const popUp = document.querySelector('.bg-popup');


const allSections = document.querySelectorAll('.section');

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

//function that changes color of burger-btn depending on section
const buttonColorChange = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {
        if (section.offsetTop - ((0.1 * windowWidth) + 48) < currentSection && section.classList.contains('white-section') && (section.classList.contains('about-me') || section.classList.contains('all-swimmers'))) {
            //this is for about-me section
            navButtonInner.classList.add('hamburger-black');
        } else if (!section.classList.contains('white-section') && !section.classList.contains('best-swimmers') && section.offsetTop + 0.1 * windowWidth - 48 < currentSection) {
            //this is for whi-swim section
            navButtonInner.classList.remove('hamburger-black');
        } else if (section.classList.contains('best-swimmers') && section.offsetTop + section.offsetHeight - 48 < currentSection) {
            //this case is for best-swimmers section
            navButtonInner.classList.add('hamburger-black');
        }
    });
}

window.addEventListener('scroll', buttonColorChange);

//function that opens popup after loading page and closes popup after clicking on X
closeButton.addEventListener('click', function() {
    popUp.style.display = "none";
})

window.addEventListener('load', function() {
    setTimeout(function() {
        popUp.style.display = "flex";
    }, 2000)
})
