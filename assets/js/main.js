// Плавный скролл

var timer;

function scrollToId(targetId) {
    const target = document.getElementById(targetId);
    let targetPosition = target.offsetTop - 100 > 0 ? target.offsetTop - 100 : 0;
    if (window.pageYOffset !== targetPosition && window.pageYOffset + window.innerHeight != document.body.clientHeight) {
        let step = 100;
        if (Math.abs(window.pageYOffset - targetPosition) < step) {
            step = Math.abs(window.pageYOffset - targetPosition);
        }
        if (window.pageYOffset > targetPosition) {
            step *= -1;
        }
        window.scrollTo(targetPosition, window.pageYOffset + step);
        timer = setTimeout(() => {
            scrollToId(targetId)
        }, 10);
    } else {
        timer && clearTimeout(timer);
    }
}


// Бургер меню

document.querySelector('.menuToggle').onclick = function () {
    display = document.querySelector('.menu').style.display;

    if (display == 'block') {
        document.querySelector('.menu').style.display = 'none';
    } else {
        document.querySelector('.menu').style.display = 'block';
    }
}

// Слайдеры

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    zindex: 0,
    dots: true,
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
    dots: true,
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

// Валидация формы

function valid(form) {
    var fail = false;
    var name = form.name.value;
    var email = form.email.value;
    var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    var massage = form.massage.value;

    if (name == 0)
        fail = "Вы не ввели свое имя";

    else if (email == 0)
        fail = "Вы не ввели свой email";

    else if (adr_pattern.test(email) == false)
        fail = "Вы ввели email не правильно"

    else if (massage == false)
        fail = "Введите своё сообщение"

    if (fail)
        alert(fail);

    else alert("Ваше сообщение отправленно")
}
