const main = document.querySelector(".main");
const watchList = document.querySelector(".watch-list");
const form = document.querySelector("form");
let movieInput = document.querySelector("#movie"); 
let rootElm = document.querySelector(".list"); 

let allmovies = JSON.parse (localStorage.getItem("movies")) || [];   


function submitHandler(event) {
    event.preventDefault()
    let movie = {
        name: movieInput.value,
        watched: false
    }
    allmovies.push(movie);
    // console.log(allmovies);
    createMovieUI();
    movieInput.value = "";
  
    localStorage.setItem("movies", JSON.stringify(allmovies));
}
function deleteMovie(event) {
    let id = event.target.dataset.id;
    allmovies.splice(id, 1);
    createMovieUI();
    localStorage.setItem("movies", JSON.stringify(allmovies));
}

function handleChange(event) {
   let id = event.target.id;
   allmovies[id].watched = !allmovies[id].watched;
   localStorage.setItem("movies", JSON.stringify(allmovies));
}

form.addEventListener("submit", submitHandler);

function createMovieUI() {
    rootElm.innerHTML = "";

    allmovies.forEach((movie, i) => {
        let li = document.createElement("li");
        let formControl = document.createElement("div");
        formControl.classList.add("form-control");
        let label = document.createElement("label");
        label.for = i;
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = i;
        checkbox.checked = movie.watched; 
        checkbox.classList.add("checkbox");
        checkbox.addEventListener("change", handleChange);
        let span = document.createElement("span");
        span.classList.add("movie-name");
        span.innerText= movie.name;
        label.append(checkbox, span);
    
        let closeSpan = document.createElement("span");
        closeSpan.innerText = "❌";
        closeSpan.classList.add("close");
        closeSpan.setAttribute("data-id", i);
    
        formControl.append(label, closeSpan);
        li.append(formControl);
        rootElm.append(li);
        form.append(rootElm);
        watchList.append(form);
        main.append(watchList);
        document.body.append(main);

        closeSpan.addEventListener("click", deleteMovie);

       });
}

createMovieUI();

