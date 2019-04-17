//Плавный скролл backToTop

window.onload = function () {
    var scrolled;
    var timer;

    document.getElementById('backToTop').onclick = function () {
        scrolled = window.pageYOffset;
        scrollToId('body');
    }

    function scrollToId(targetId) {
        const target = document.getElementById(targetId)
        if (scrolled > target.offsetTop) {
            window.scrollTo(target.offsetTop, scrolled);
            scrolled = scrolled - 100;
            timer = setTimeout(() => {
                scrollToId(targetId)
            }, 10);

        } else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}

//Бургер меню

document.querySelector('.menuToggle').onclick = function () {
    display = document.querySelector('.menu').style.display;

    if (display == 'block') {
        document.querySelector('.menu').style.display = 'none';
    } else {
        document.querySelector('.menu').style.display = 'block';
    }
}

//Слайдеры

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    zindex: 0,
    responsive: [{
        breakpoint: 992,
        settings: {
            arrows: false
        }
    }]
});

$('.slider--partners').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});

//Валидация формы

function valid(form) {
    var fail = false;
    var name = form.name.value;
    var email = form.email.value;
    var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

    if (name == 0)
        fail = "Вы не ввели свое имя";

    else if (email == 0)
        fail = "Вы не ввели свой email";

    else if (adr_pattern.test(email) == false)
        fail = "Вы ввели email не правильно"
        
    if (fail)
        alert(fail);
}