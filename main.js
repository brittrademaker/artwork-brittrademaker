var addBlacks = document.querySelectorAll('.fill-red');
addBlacks.forEach(function (addBlack) {
    addBlack.addEventListener('click', function () {
        addBlack.classList.toggle('fill-red');
        addBlack.classList.toggle('fill-black');
    });
});

var addReds = document.querySelectorAll('.fill-black');
addReds.forEach(function (addRed) {
    console.log('addRed', addRed)
    addRed.addEventListener('click', function () {
        addRed.classList.toggle('fill-red');
        addRed.classList.toggle('fill-black');
    });
});

var moveLeft = document.querySelector('.item-1');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 65) {
        moveLeft.classList.toggle('move_left');
    }
});

var moveRight = document.querySelector('.item-1');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 68) {
        moveRight.classList.toggle('move_right');
    }
});

var moveLeft2 = document.querySelector('.item-2');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 65) {
        moveLeft2.classList.toggle('move_left');
    }
});

var moveRight2 = document.querySelector('.item-2');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 68) {
        moveRight2.classList.toggle('move_right');
    }
});

var moveLeft3 = document.querySelector('.item-16');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 65) {
        moveLeft3.classList.toggle('move_left');
    }
});

var moveRight3 = document.querySelector('.item-16');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 68) {
        moveRight3.classList.toggle('move_right');
    }
});

var moveLeft4 = document.querySelector('.item-3');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 65) {
        moveLeft4.classList.toggle('move_left');
    }
});

var moveRight4 = document.querySelector('.item-3');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 68) {
        moveRight4.classList.toggle('move_right');
    }
});

var moveLeft5 = document.querySelector('.item-4');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 65) {
        moveLeft5.classList.toggle('move_left');
    }
});

var moveRight5 = document.querySelector('.item-4');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 68) {
        moveRight5.classList.toggle('move_right');
    }
});

var moveLeft6 = document.querySelector('.item-6');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 65) {
        moveLeft6.classList.toggle('move_left');
    }
});

var moveRight6 = document.querySelector('.item-6');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 68) {
        moveRight6.classList.toggle('move_right');
    }
});

var moveLeft7 = document.querySelector('.item-17');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 65) {
        moveLeft7.classList.toggle('move_left');
    }
});

var moveRight7 = document.querySelector('.item-17');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 68) {
        moveRight7.classList.toggle('move_right');
    }
});

var moveLeft8 = document.querySelector('.item-8');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 65) {
        moveLeft8.classList.toggle('move_left');
    }
});

var moveRight8 = document.querySelector('.item-8');
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 68) {
        moveRight8.classList.toggle('move_right');
    }
});
