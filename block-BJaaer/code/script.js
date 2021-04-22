let form = document.querySelector("form");

let userInfo = {};

function handleSubmit(event) {
    event.preventDefault();
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.timepass = form.elements.timepass.value;
    userInfo.color = form.elements.color.value;
    userInfo.rating = form.elements.rating.value;
    userInfo.genre = form.elements.drone.value;
    userInfo.terms = form.elements.terms.checked;
    
    console.log(userInfo.terms);

    let modal = document.createElement("div");
    modal.classList.add("modal");
    let close = document.createElement("span");
    close.classList.add("close");
    close.innerText = "❌";
    let userDetails = document.createElement("div");
    userDetails.classList.add("user-details");
    let name = document.createElement("h2");
    name.innerText = `Hello ${userInfo.name}`;
    let email = document.createElement("h3")
    email.innerText = `Email: ${userInfo.email}`;
    let love = document.createElement("h3");
    love.innerText = `You love:  ${userInfo.timepass}`;
    let color =  document.createElement("h3");
    color.innerText = `Color: ${userInfo.color}`;
    let rating =  document.createElement("h3");
    rating.innerText = `Rating: ${userInfo.rating}`;
    let book =  document.createElement("h3");
    book.innerText = `Book Genre: ${userInfo.genre}`;
    let terms =  document.createElement("h3");
    terms.classList.add("terms"); 
    if (userInfo.terms === true) {
        terms.innerText = 
        `👉: You Agree to Terms & conditions`;
    } else {
        terms.innerText = "";
    }



    userDetails.append(close, name, email, love, color, rating, 
        book,  terms);
    modal.append(userDetails);
    document.body.append(modal);
    
    
    close.addEventListener("click", () => {
        modal.style.display = "none";
        form.elements.name.value = '';
        form.elements.email.value = '';
        form.elements.timepass.value = 'movies';
        form.elements.color.value = '';
        form.elements.rating.value = '';
        form.elements.drone.value = '';
        form.elements.terms.checked = false;
    });
}

form.addEventListener("submit", handleSubmit);