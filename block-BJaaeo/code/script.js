let screen = document.querySelector(".calc-screen");

let clear = document.querySelector(".clear");

let result = document.querySelector(".equal");

let allInput = document.querySelectorAll(".btn");

allInput.forEach(input => {
    input.addEventListener("click", () => {
        if ((input.textContent === '0' || input.textContent === '.') && screen.value.length === 0) {
            return 
        }
        screen.value += input.textContent;
    });
    
});
result.addEventListener("click", () => {
    if (screen.value !== "") {
        screen.value = eval(screen.value);
    }
    else {
        alert("Enter Valid Input!");
    }
});

clear.addEventListener("click", () => {
    screen.value = "";
});

screen.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && screen.value !== "") {
        screen.value = eval(screen.value);
    }
});