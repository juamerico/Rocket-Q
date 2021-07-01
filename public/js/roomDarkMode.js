let darkMode = localStorage.getItem("dark")

const pageContent = document.querySelector("html")
const logo = document.querySelector(".logo")
//const copyIcon = document.querySelector(".create-room__btn--icon")
const moonButton = document.querySelector(".moon-icon")

function enableDarkMode() {
//    copyIcon.src="/img/copy-white.svg"
    logo.src="/img/logo-white.svg"
    pageContent.classList.add("darkMode")
    moonButton.src="/img/moon-white.svg"

    localStorage.setItem("dark", "on")
}

function disableDarkMode() {
//    copyIcon.src="/img/copy.svg"
    logo.src="/img/logo.svg"
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
