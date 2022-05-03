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
        if (section.offsetTop - ((0.1 * windowWidth) + 48) < currentSection && section.classList.contains('white-section')) {
            navButtonInner.classList.add('hamburger-black');
            console.log(section);
        } else if (!section.classList.contains('white-section') && section.offsetTop + 0.1*windowWidth - 48  < currentSection) {
            navButtonInner.classList.remove('hamburger-black');
        }
    });
}

window.addEventListener('scroll', buttonColorChange);