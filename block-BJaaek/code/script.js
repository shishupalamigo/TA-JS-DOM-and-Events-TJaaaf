let firstBox = document.querySelector(".first");
let secondBox = document.querySelector(".second");

// function randomColorGenrator() {
//     return '#'+ Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
// }

function generateRandomColor() {
    let hexCharacters = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
    ];

    let color = "#";
    for (let i =  0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 16);
        color = color + hexCharacters[randomNumber];
    }

    return color;
}

firstBox.addEventListener("click", function() {
    firstBox.style.background = generateRandomColor();
    // console.log(generateRandomColor());
});

secondBox.addEventListener("mousemove", function() {
    secondBox.style.background = generateRandomColor();
});