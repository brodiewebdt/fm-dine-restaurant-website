
// Code to check the error states in the contact form
const reservationForm = document.querySelector(".reservation-form");

reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = reservationForm["name"].value;
    const email = reservationForm["email"].value;
    const month = document.querySelector(".month").value;
    const day = document.querySelector(".day").value;
    const year = document.querySelector(".year").value;
    const hour = document.querySelector(".hour").value;
    const minute = document.querySelector(".minute").value;
    const errDateIncomplete = document.querySelector(".error-date-incomplete")
    const errTimeIncomplete = document.querySelector(".error-time-incomplete")

    if (name === "") {
        addErrorTo("name", "This field is required");
    } else {
        removeErrorFrom("name");
    }

    if (email === "") {
        addErrorTo("email", "This field is required");
    } else if (!isValid(email)) {
        addErrorTo("email", "Email is not valid");
    } else {
        removeErrorFrom("email");
    }

    if (month === "" || day === "" || year === "" ) {
        errDateIncomplete.innerText = "This field is incomplete";

    } else {
        errDateIncomplete.innerText = "";
    }

    if (hour === "" || minute === "") {
        errTimeIncomplete.innerText = "This field is incomplete";
    } else {
        errTimeIncomplete.innerText = "";
    }
});


// Adds and removes error message in the reservation form fields
function addErrorTo(field, message) {
    const formControl = reservationForm[field].parentNode;
    formControl.classList.add("error");

    const reservationFormError = formControl.querySelector(
        ".error-msg",
    );
    reservationFormError.innerText = message;
}

function removeErrorFrom(field) {
    const formControl = reservationForm[field].parentNode;
    formControl.classList.remove("error");

    const reservationFormError = formControl.querySelector(
        ".error-msg",
    );
    reservationFormError.innerText = "";
}



// Checks for valid email address
function isValid(email) {
    var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



// Code to increment and decrement the number of people in the reservation form
const btnPeopleMinus = document.querySelector(".btn-people-minus");
const btnPeoplePlus = document.querySelector(".btn-people-plus");
const numOfPeople = document.querySelector(".number-of-people");
let peopleCount = 1;

btnPeopleMinus.addEventListener('click', (e) => {
    e.preventDefault();
    if (peopleCount > 1) {
       peopleCount -= 1;        
    }
    numOfPeople.innerText = peopleCount;
})

btnPeoplePlus.addEventListener("click", (e) => {
    e.preventDefault();
    if (peopleCount < 10) {
        peopleCount += 1;
    }
    numOfPeople.innerText = peopleCount;
});