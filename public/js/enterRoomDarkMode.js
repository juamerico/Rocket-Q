let darkMode = localStorage.getItem("dark")

const pageContent = document.querySelector("html")
const logo = document.querySelector(".logo")
const moonButton = document.querySelector(".moon-icon")
//const createRoomIcon = document.querySelector(".create-room__btn > .btn--icon")

function enableDarkMode() {
    logo.src="/img/logo-white.svg"
//    createRoomIcon.src="/img/users-white.svg"
    pageContent.classList.add("darkMode")
    moonButton.src="/img/moon-white.svg"

    localStorage.setItem("dark", "on")
}

function disableDarkMode() {
    logo.src="/img/logo.svg"
//    createRoomIcon.src="/img/users.svg"
    pageContent.classList.remove("darkMode")
    moonButton.src="/img/moon.svg"

    localStorage.setItem("dark", "off")
}

if(darkMode === "on") {
    enableDarkMode()
}

moonButton.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark")
    if(darkMode !== "on") {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
})