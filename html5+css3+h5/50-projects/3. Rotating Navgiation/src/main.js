var openBtn = document.getElementById('open');
var closeBtn = document.getElementById('close');
var container = document.querySelector('.container');
openBtn.addEventListener('click', function () {
    container === null || container === void 0 ? void 0 : container.classList.add('show-nav');
});
closeBtn.addEventListener('click', function () {
    container === null || container === void 0 ? void 0 : container.classList.remove('show-nav');
});
