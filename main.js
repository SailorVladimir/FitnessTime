window.onload = function () { //Функция отвечающая за загрузку скрипта после загрузки страницы
    var scrolled; //Объявляем переменную с именем scrolled
    var timer; //Объявляем переменную с именем timer

    document.getElementById('backToTop').onclick = function () { //Ищем элемент по id, при клике присваиваем функцию
        scrolled = window.pageYOffset; //Ищем на сколько прокручена страница по вертикали, присваиваем это число scrolled
        scrollToId('body'); //Выполняем функцию scrollToTop
    }

    function scrollToId(targetId) { //Объявляем функцию scrollToTop
        const target = document.getElementById(targetId)
        if (scrolled > target.offsetTop) { //если scrolled больше 0
            window.scrollTo(target.offsetTop, scrolled); //прокрутка страницы до координат X=0, Y=scrolled
            scrolled = scrolled - 100; //scrolled уменьшаем на 100 едениц
            timer = setTimeout(() => {
                scrollToId(targetId)
            }, 10); // Запускаем таймер, через 10мс повторит scrollToTop

        } else { //иначе
            clearTimeout(timer); //останавливаем таймер
            window.scrollTo(0, 0); //прокручиваем до 0
        }
    }
}


document.querySelector('.menuToggle').onclick = function () {
    display = document.querySelector('.menu').style.display;

    if(display == 'block'){
        document.querySelector('.menu').style.display = 'none';
    } else {
        document.querySelector('.menu').style.display = 'block';
    }
}



// window.onload = function () { //Функция отвечающая за загрузку скрипта после загрузки страницы
//     var scrolled; //Объявляем переменную с именем scrolled
//     var timer; //Объявляем переменную с именем timer

//     document.getElementById('top').onclick = function () { //Ищем элемент по id, при клике присваиваем функцию
//         scrolled = window.pageYOffset; //Ищем на сколько прокручена страница по вертикали, присваиваем это число scrolled
//         scrollToTop(); //Выполняем функцию scrollToTop 

//     }

//     function scrollToTop() { //Объявляем функцию scrollToTop
//         if (scrolled > 0) { //если scrolled больше 0
//             window.scrollTo(0, scrolled); //прокрутка страницы до координат X=0, Y=scrolled
//             scrolled = scrolled - 100; //scrolled уменьшаем на 100 едениц
//             timer = setTimeout(scrollToTop, 10); // Запускаем таймер, через 10мс повторит scrollToTop

//         } else { //иначе
//             clearTimeout(timer); //останавливаем таймер
//             window.scrollTo(0, 0); //прокручиваем до 0
//         }
//     }
// }