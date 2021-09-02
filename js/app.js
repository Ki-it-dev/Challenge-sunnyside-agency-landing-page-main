
var bar = document.getElementById('bar-btn');
var listMobileMenu = document.querySelector('.header__lists-mobile');
var i = 0;
bar.addEventListener('click', function () {
    if (i % 2 === 0) {
        listMobileMenu.classList.add('show')
        i = i + 1;
    } else {
        listMobileMenu.classList.remove('show')
        i++;
    }
})