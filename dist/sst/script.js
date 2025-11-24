const list = document.querySelector('.slider .slider_container');
const items = document.querySelectorAll('.slider .slider_container .block'); // Получаем все блоки
const prevButton = document.getElementById('left');
const nextButton = document.getElementById('right');
let active = 0;
let lengthItems = items.length - 1; // Количество слайдов минус 1

nextButton.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0; // Возвращаемся к первому слайду
    } else {
        active = active + 1;
    }
    reloadSlider();
};

prevButton.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems; // Переходим к последнему слайду
    } else {
        active = active - 1;
    }
    reloadSlider();
};

function reloadSlider() {
    let checkLeft = items[active].offsetLeft; // Получаем смещение активного слайда
    list.style.left = -checkLeft + 'px'; // Устанавливаем позицию контейнера
}

setInterval(() => {
    nextButton.click();
}, 5000); // Переключает слайд каждые 5 секунд