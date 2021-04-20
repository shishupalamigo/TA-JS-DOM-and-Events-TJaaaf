let firstBox = document.querySelector(".first");
let secondBox = document.querySelector(".second");

function randomColorGenrator() {
    return '#'+ Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

firstBox.addEventListener("click", function() {
    firstBox.style.background = randomColorGenrator();
    // console.log(randomColorGenrator());
});

secondBox.addEventListener("mousemove", function() {
    secondBox.style.background = randomColorGenrator();
});