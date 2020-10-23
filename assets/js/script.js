const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});



const container = document.querySelector('.container-galeri');
const main_img = document.querySelector('.main-img');

container.addEventListener('click', function (e) {

    if (e.target.className == 'thumb') {

        main_img.src = e.target.src;

    }

});