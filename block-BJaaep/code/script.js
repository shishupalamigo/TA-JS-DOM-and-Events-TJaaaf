
let wrapperOne = document.querySelector(".wrapper1");
let wrapperTwo = document.querySelector(".wrapper2");

// selcect all boxes of wrapper one
let allBoxesOfWrapperOne = wrapperOne.querySelectorAll(".box");

// selcect all boxes of wrapper two
let allBoxesOfWrapperTwo = wrapperTwo.querySelectorAll(".box");



// Genrate random number from 1 to 12.

function getRandomNumber(min = 0, max = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//  Genrate Random color

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// console.log(getRandomNumber(1, 12));

// create EventHandler for Wrapper 1 With event delegation


    allBoxesOfWrapperOne.forEach(box => {
        box.addEventListener("click", function() {
            allBoxesOfWrapperOne.forEach(box => {
                box.innerText = "";
                box.style.background = "#444";
                box.style.transform = "none";
            });
            box.style.background = getRandomColor();
            box.innerText = getRandomNumber(1, 12);
            box.style.color = getRandomColor();
            box.style.transform = "rotateY(360deg)";
            box.style.transition = " 1s ease-in-out"; 
            setTimeout(()=> {
                box.innerText = "";
                box.style.transform = "none";
                box.style.background = "#444";
            },5000 )            
        });
    });


// Create Eventhandler of Wrapper 2 without event Delegation

wrapperTwo.addEventListener("click", function()  {
    allBoxesOfWrapperTwo.forEach(box => {
        box.addEventListener("click", function() {
            allBoxesOfWrapperTwo.forEach(box => {
                box.innerText = "";
                box.style.background = "#444";
                box.style.transform = "none";
            });
            box.style.background = getRandomColor();
            box.innerText = getRandomNumber(1, 12);
            box.style.color = getRandomColor();
            box.style.transform = "rotateX(360deg)";
            box.style.transition = " 1s ease-in-out"; 
            setTimeout(()=> {
                box.innerText = "";
                box.style.transform = "none";
                box.style.background = "#444";
            },5000 );            
        });
    });
});