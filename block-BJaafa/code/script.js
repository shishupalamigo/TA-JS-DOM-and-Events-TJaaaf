let goal = 0;
let goalInput = document.getElementById("goalInput");
goalInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    goal = goalInput.value;
  }
});

const enteriesWrapper = document.querySelector("#entries");
document.querySelector("#target").innerText = goal;

function addNewEntry(newEntry) {
  enteriesWrapper.removeChild(enteriesWrapper.firstElementChild);
  const listItem = document.createElement("li");
  const listValue = document.createTextNode(newEntry.toFixed(1));
  listItem.append(listValue);
  enteriesWrapper.append(listItem);
}

function resetEntries() {
  enteriesWrapper.innerHTML = `<li>-</li>
  <li>-</li>
  <li>-</li>
  <li>-</li>
  <li>-</li>
  <li>-</li>
  <li>-</li>`
}

function reducer(total, currentValue) {
  return total + currentValue;
}

function calcTotal(entries) {
  const totalValue = entries.reduce(reducer, 0).toFixed(1);
  document.getElementById("total").innerText = totalValue;
  document.getElementById("progressTotal").innerText = totalValue;
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
  let entries = JSON.parse(localStorage.getItem('entries')) || [];
  const entry = Number(document.querySelector("#entry").value);
  if (!entry) return;
  document.querySelector("form").reset();
  if (entries.length < 7) {
    entries.push(entry);
    addNewEntry(entry);
  } else {
    alert("You have completed the weekly run!");
    entries = []; 
    resetEntries();
  }
  localStorage.setItem('entries', JSON.stringify(entries));
  calcTotal(entries);
  calcAverage(entries);
  weeklyHigh(entries);
  calcGoal(entries);
}

const form = document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);
