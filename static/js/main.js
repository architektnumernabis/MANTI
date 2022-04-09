const nav = document.querySelector('.navbar');
const navButton = document.querySelector('.burger-btn');
const navItems = document.querySelectorAll('.navbar__item');



//function that closes navigation after clicking on link or a button
const handleNav = () => {
    nav.classList.toggle('navbar--active');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('navbar--active');
        })
    })
}

navButton.addEventListener('click', handleNav);

//function that closes navigation after clicking outside of the navigation
document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('navbar') && !event.target.classList.contains('burger-btn__box') && !event.target.classList.contains('burger-btn')) {
        nav.classList.remove('navbar--active');
    }
})