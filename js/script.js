window.addEventListener('scroll', reveal = () => {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
        /*  else {
            reveals[i].classList.remove('active');
         } */
    }
});

// ! Carousel multiSide Function for Bootstrap-5 (start)
let items = document.querySelectorAll('.clients .carousel .carousel-item');

items.forEach((el) => {
    const minPerSlide = 3;
    let next = el.nextElementSibling;
    for (var i = 0; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[1];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
    }
});
// * Carousel multiSide Function for Bootstrap-5 (end)

// ! about area function start___________________________________

about.addEventListener('mouseenter', function () {
    let progressBar = document.querySelectorAll('.progress-bar');
    let myTime = 300;
    progressBar.forEach(function (e) {
        let updateValue = function () {
            let value = +e.getAttribute('aria-valuenow');
            let getValue = +e.innerText;
            let increment = value / myTime;
            let updateWidth = Math.ceil(getValue + increment);

            if (getValue < value) {
                e.style.width = updateWidth + '%';
                e.innerText = updateWidth;
                setTimeout(updateValue, 10);
            } else {
                e.innerText = value + '%';
            }
        };
        updateValue();
    });
});
// * about area function end_____________________________________

// ! Counter area function start___________________________

let oslActivity = document.getElementById('oslActivity');
oslActivity.addEventListener('wheel', () => {
    let counters = document.querySelectorAll('.counter');
    let time = 200;
    counters.forEach(counter => {
        let updateCounter = () => {
            let target = +counter.getAttribute('data-bs-target');
            let count = +counter.innerText;

            let increment = target / time;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        }; updateCounter();
    });
});
// * Counter area function end_______________________________

