// Dark Theme 
// Function to apply the theme based on user preference
function applyTheme() {
    var userPreference = localStorage.getItem("theme");
    var icon = document.getElementById("icon");
    var logo = document.getElementById("logo");

    if (userPreference === "dark") {
        document.body.classList.add("dark-theme");
        icon.src = "sun.png";
        logo.src = "Subhransu_logo_dark.png";
        // Add code to update other elements for dark mode here
    } else {
        document.body.classList.remove("dark-theme");
        icon.src = "moon.png";
        logo.src = "Subhransu_logo_light.png";
        // Add code to update other elements for light mode here
    }
}

// Call applyTheme() on page load
document.addEventListener("DOMContentLoaded", function () {
    applyTheme();
});

// Toggle dark mode when clicking the icon
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    var userPreference = localStorage.getItem("theme");

    if (userPreference === "dark") {
        localStorage.setItem("theme", "light");
        icon.src = "moon.png";
        // Add code to update other elements for light mode here
    } else {
        localStorage.setItem("theme", "dark");
        icon.src = "sun.png";
        // Add code to update other elements for dark mode here
    }
};

var icon = document.getElementById("icon");
var logo = document.getElementById("logo");
var footer = document.getElementById("footer");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "sun.png";
        logo.src = "Subhransu_logo_dark.png";
        localStorage.setItem("theme", "dark");
    } else {
        icon.src = "moon.png";
        logo.src = "Subhransu_logo_light.png";
        localStorage.setItem("theme", "light");
    }
}

// side menu 
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
//  tab content 
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
//  show more function 
function toggledetails(contentId, buttonId, iconId) {
    var content = document.getElementById(contentId);
    var button = document.getElementById(buttonId);
    var icon = document.getElementById(iconId);

    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        button.textContent = "See Less";
        icon.classList.remove("fa-arrow-down");
        icon.classList.add("fa-arrow-up");
    } else {
        content.classList.add("hidden");
        button.textContent = "See More";
        icon.classList.remove("fa-arrow-up");
        icon.classList.add("fa-arrow-down");
    }
}

//  link with google sheet 

const scriptURL = 'https://script.google.com/macros/s/AKfycbwbP68kIYD0gN5V0w_RkrcQiBI_YVf43NPufgyokzJ1vt2f6xC0GLYS8qNyLum2EoP7fw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    alert("Your Message has been sent successfully!")
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // msg.innerHTML = "Thank you for your message!"
            setTimeout(function () {
                msg.innerHTML = ""

            }, 5000)
            form.reset()
        }
        )
        .catch(error => console.error('Error!', error.message))
})
