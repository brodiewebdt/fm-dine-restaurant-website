

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

const dropdown = document.querySelector(".dropdown") 
const AmPm = document.querySelector(".default-meridiem"); 

const dropdownAm = document.querySelector(".dropdown-am");  
const dropdownPm = document.querySelector(".dropdown-pm");  
const checkAm = document.querySelector(".check-am"); 
const checkPm = document.querySelector(".check-pm"); 
const arrow = document.querySelector(".arrow");

dropdownAm.addEventListener('click', () => {
    AmPm.textContent = "AM"
    checkAm.style.opacity = "1"
    checkPm.style.opacity = "0";
})

dropdownPm.addEventListener('click', () => {
    AmPm.textContent = "PM"
    checkPm.style.opacity = "1";
    checkAm.style.opacity = "0";
})

dropdown.addEventListener('mouseover', () => {
    arrow.style.transform = "rotate(180deg)"
    arrow.style.transition = "all 0.5s"
})

dropdown.addEventListener("mouseout", () => {
    arrow.style.transform = "rotate(0deg)";
    arrow.style.transition = "transform 0.5s";
});