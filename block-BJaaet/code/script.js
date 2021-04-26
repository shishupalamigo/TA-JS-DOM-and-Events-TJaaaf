const main = document.querySelector(".main");
const watchList = document.querySelector(".watch-list");
const form = document.querySelector("form");
let movieInput = document.querySelector("#movie"); 


function submitHandler(event) {
    event.preventDefault()
    let formControl = document.createElement("div");
    formControl.classList.add("form-control");
    let label = document.createElement("label");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    let span = document.createElement("span");
    span.classList.add("movie-name");
    span.innerText= movieInput.value;
    label.append(checkbox, span);

    let closeSpan = document.createElement("span");
    closeSpan.innerText = "❌";
    closeSpan.classList.add("close")

    formControl.append(label, closeSpan);
    form.append(formControl);
    watchList.append(form);
    main.append(watchList);
    document.body.append(main);

    closeSpan.addEventListener("click", (event) => {
        event.target.parentElement.remove();
    });
}

form.addEventListener("submit", submitHandler);


