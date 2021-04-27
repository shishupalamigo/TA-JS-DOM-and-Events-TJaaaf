function main() {
const main = document.querySelector(".main");
let todoInput = document.querySelector("#input"); 
let rootElm = document.querySelector(".list"); 

let leftItems = document.querySelector(".left-items")
let allItems = document.querySelector(".all-items");
let activeItems = document.querySelector(".active-items");
let completedItems = document.querySelector(".completed-items");
let clearAll = document.querySelector(".clear-all");
let leftItemsCount = document.querySelector(".count"); 

let allTodos = JSON.parse (localStorage.getItem("todos")) || [];   

function filterActive() {
    let allTodoLeft = []; 
    allTodos.filter (todo => {
        if (todo.isDone === false) {
            allTodoLeft.push(todo);
        }
    });
   return createUI(allTodoLeft);
}

function count() {
    let allTodoLeft = []; 
    allTodos.filter (todo => {
        if (todo.isDone === false) {
            allTodoLeft.push(todo);
        }
    });
   return allTodoLeft.length;
}
leftItemsCount.innerText=  count();

function filterCompleted() {
    let completedTodos = [];
    allTodos.filter(todo => {
        if (todo.isDone === true) {
            completedTodos.push(todo);
        }
    });
   return createUI(completedTodos);
}

function allTodosFilter() {
    createUI(allTodos);
}


function inputHandler(event) {
    event.preventDefault()
    let todo = {
        name: event.target.value,
        isDone: false
    }
    if (event.keyCode === 13 && event.target.value !== "") {
        allTodos.push(todo);
        // console.log(allTodos);
        createUI(allTodos);
        todoInput.value = "";
    }
    let leftTodoCount = allTodos.length;
    leftItemsCount.innerText = `${leftTodoCount}`;
    localStorage.setItem("todos", JSON.stringify(allTodos));
}
function deleteTodo(event) {
    let id = event.target.dataset.id;
    allTodos.splice(id, 1);
    createUI(allTodos);
    leftItemsCount.innerText = count();
    localStorage.setItem("todos", JSON.stringify(allTodos));
}
function deleteAllTodo() {
    allTodos.splice(0, allTodos.length);
    createUI(allTodos);
    leftItemsCount.innerText = count();
    localStorage.setItem("todos", JSON.stringify(allTodos));
}

function handleChange(event) {
   let id = event.target.id;
   allTodos[id].isDone = !allTodos[id].isDone;
   
   leftItemsCount.innerText = count();
   localStorage.setItem("todos", JSON.stringify(allTodos));
}


todoInput.addEventListener("keyup", inputHandler);

function createUI(allTodos) {
    rootElm.innerHTML = "";

  allTodos &&  allTodos.forEach((todo, i) => {
        let li = document.createElement("li");
        li.classList.add("list-items");
        let label = document.createElement("label");
        label.for = i;
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = i;
        checkbox.checked = todo.isDone; 
        checkbox.classList.add("checkbox");
        checkbox.addEventListener("change", handleChange);

        let span = document.createElement("span");
        span.classList.add("todo-name");
        span.innerText= todo.name;
        span.id = i;
        label.append(checkbox, span);
        span.addEventListener("dblclick", (event) => {
            let updateInput = document.createElement("input");
                updateInput.classList.add("update-box");
                updateInput.type = "text";
                updateInput.value = span.innerText;
                span.style.display = "none";
                label.append(updateInput); 
                updateInput.addEventListener("keyup", (event) =>  {
                if (event.keyCode === 13) {
                    span.innerText = event.target.value;
                    span.style.display = "inline";
                    updateInput.style.display = "none";
                    todo.name = event.target.value;
                    createUI(allTodos);
                    localStorage.setItem("todos", JSON.stringify(allTodos)); 
                }
                
            });
        })

        let closeSpan = document.createElement("span");
        closeSpan.innerText = "❌";
        closeSpan.classList.add("close");
        closeSpan.setAttribute("data-id", i);
    
        li.append(label, closeSpan);
        rootElm.append(li);

        closeSpan.addEventListener("click", deleteTodo);      
       });
    }
    
    createUI(allTodos);
        
    allItems.addEventListener("click", allTodosFilter)
    activeItems.addEventListener("click", filterActive);    
    clearAll.addEventListener("click", deleteAllTodo);
    completedItems.addEventListener("click", filterCompleted);

};
main();