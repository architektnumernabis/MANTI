const nav = document.querySelector('.navbar');
const navButton = document.querySelector('.burger-btn');

const handleNav = () => {
    nav.classList.toggle('navbar--active');
}

navButton.addEventListener('click', handleNav);