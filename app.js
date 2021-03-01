var mainbutton = document.querySelector('.main-icon');
var icons = document.querySelectorAll('.icon');
mainbutton.addEventListener('click', function (e) {
    icons.forEach(function (icon) {
        icon.classList.toggle('invisible');
    });
});
