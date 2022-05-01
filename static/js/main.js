const nav = document.querySelector('.navbar');
const navButton = document.querySelector('.hamburger');
const navButtonBox = document.querySelector('.hamburger-box');
const navButtonInner = document.querySelector('.hamburger-inner');
const navItems = document.querySelectorAll('.navbar__item');
const header = document.getElementById('header');
const aboutMe = document.querySelector('.about-me');
const news = document.querySelector('.news');
const windowWidth = window.innerWidth;

var optionsObserverOne = {
    rootMargin: '-10% 0px 0px 0px'
};

var optionsAboutMe = {
    rootMargin: '10% 0px -90% 0px',
};

const optionsNews = {

};

//BREAKPOINTS
if (windowWidth > 413) {
    optionsAboutMe = {
        rootMargin: '5% 0px 0px 0px'
    };
}

if (windowWidth > 575) {
    optionsAboutMe = {
        rootMargin: '2% 0px 0px 0px'
    };
}

if (windowWidth > 631) {
    optionsAboutMe = {
        rootMargin: '15% 0px 0px 0px'
    };
}

if (windowWidth > 739) {
    optionsObserverOne = {
        rootMargin: '-15% 0px 0px 0px'
    };
    optionsAboutMe = {
        rootMargin: '2% 0px 0px 0px'
    };
}

if (windowWidth > 992) {
    optionsAboutMe = {
        rootMargin: '5% 0px 0px 0px'
    };
}

if (windowWidth > 1200) {
    optionsObserverOne = {
        rootMargin: '-20% 0px 0px 0px'
    };
    optionsAboutMe = {
        rootMargin: '10% 0px 0px 0px'
    };
}

if (windowWidth > 1400) {
    optionsObserverOne = {
        rootMargin: '-30% 0px 0px 0px'
    };
    optionsAboutMe = {
        rootMargin: '10% 0px 0px 0px'
    };
}




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

//observer function that changes color of burger button afters crolling down from header
const observerOne = new IntersectionObserver(function (entries, observerOne) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navButtonInner.classList.remove('hamburger-black');
        } else {
            navButtonInner.classList.add('hamburger-black');
        }
    })
}, optionsObserverOne);

observerOne.observe(header);

//observer that changes nav color after leaving about-me section
const observerAboutMe = new IntersectionObserver(function (entries, observerAboutMe) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navButtonInner.classList.add('hamburger-black');
        } else {
            navButtonInner.classList.remove('hamburger-black');
        }
    })
}, optionsAboutMe)

observerAboutMe.observe(aboutMe);

//
const observerNews = new IntersectionObserver(function (entries, observerNews) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {

        } else {

        }
    })
}, optionsNews)

observerNews.observe(news);

//scripts that pops down menu items in subsite called best-swimmers

//arrow -strzałka
//navbarTitle tytul

