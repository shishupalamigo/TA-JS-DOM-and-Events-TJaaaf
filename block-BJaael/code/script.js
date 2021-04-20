let discoGrid = document.querySelector(".disco-grid");

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum is inclusive.
  }

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16); 
  
  }

for (let i = 1; i <= 500; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid"); 
    discoGrid.append(grid);
    discoGrid.addEventListener("mousemove",  function () {
        grid.style.background = getRandomColor();
        grid.innerText =  getRandomNumber(1, 500);
        grid.style.color = getRandomColor();
    });
};






