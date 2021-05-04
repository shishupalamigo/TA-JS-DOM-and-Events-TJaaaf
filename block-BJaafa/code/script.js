let goal  = 0;
JSON.parse(localStorage.getItem('goal')) || 0;

let entries = [0, 0, 0, 0, 0, 0, 0];

JSON.parse(localStorage.getItem("entries"));


let goalInput = document.getElementById("goalInput");
goalInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && goal === 0) {
    goal = goalInput.value;
    localStorage.setItem('goal', JSON.stringify(goal));
    document.querySelector("#target").innerText = goal;
    goalInput.value = "";
  } else {
    goalInput.removeEventListener("keyup", () => {
        alert("You have Already added the Goal for this week");
    });
  }
});

const enteriesWrapper = document.querySelector("#entries");

function createUI() {
  enteriesWrapper.innerHTML = "";
  localStorage.setItem("entries", JSON.stringify(entries));
  entries.forEach(element => {
     let inputBox = document.createElement("li");
     inputBox.innerText = element;
     enteriesWrapper.append(inputBox);
  });  
}
createUI();


function reducer(total, currentValue) {
  return total + currentValue;
}

function calcTotal(entries) {
  const totalValue = entries.reduce(reducer, 0).toFixed(1);
  console.log(totalValue,"total value")
  document.getElementById("total").innerText = totalValue;
  document.getElementById("progressTotal").innerText = totalValue;
  // if (totalValue >= goal) {
  //     alert("Congratulations on achieving your goal! Keep It up!")
  // }
}

function calcAverage(entries) {
  const average = (entries.reduce(reducer, 0) / (entries.length || 1)).toFixed(1);
  document.getElementById("average").innerText = average;
}

function weeklyHigh(entries) {
  const high = Math.max(...(entries.length ? entries : [0]));
  document.getElementById("high").innerText = high;
}
let completedPercent = 0;
const progressCircle = document.querySelector("#progressCircle");
progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%)`;


function calcGoal(entries) {
  const totalValue = entries.reduce(reducer, 0).toFixed(1);
  completedPercent = totalValue / (goal / 100);
  if (completedPercent > 100) completedPercent === 100;
  progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%)`;
}

function handleSubmit(event) {
  event.preventDefault();
  // let entries = JSON.parse(localStorage.getItem('entries')) || [];
  const entry = Number(document.querySelector("#entry").value);
  if (goal === 0 ) {
      alert("set the weekly goal first!");
  }
  if (!entry || entry < 0 ) return;

  entries.unshift(entry);
  entries.pop();
  localStorage.setItem("entries", JSON.stringify(entries));
  console.log(entries);    
  document.querySelector("form").reset();
  // if (entries.length < 7) {
  //   // entries.push(entry);
  //   // addNewEntry(entry);
  // } else {
  //   alert("You have completed the weekly run!");
  //   // entries = []; 
  //   // resetEntries();
  // }
  localStorage.setItem('entries', JSON.stringify(entries));
  createUI();
  calcTotal(entries);
  calcAverage(entries);
  weeklyHigh(entries);
  calcGoal(entries);
}

const form = document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);
