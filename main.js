var addBlacks = document.querySelectorAll('.fill-red');
addBlacks.forEach(function (addBlack) {
    addBlack.addEventListener('click', function () {
        addBlack.classList.toggle('fill-red');
        addBlack.classList.toggle('fill-black');
    });
})


var addReds = document.querySelectorAll('.fill-black');
addReds.forEach(function (addRed) {
    console.log('addRed', addRed)
    addRed.addEventListener('click', function () {
        addRed.classList.toggle('fill-red');
        addRed.classList.toggle('fill-black');
    });
})
