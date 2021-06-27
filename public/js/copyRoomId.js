const button = document.querySelector(".create-room__btn")

button.addEventListener("click", () => {
    const roomIdText = document.querySelector(".create-room__btn--textarea")
    roomIdText.select()
    roomIdText.setSelectionRange(0, 99999)

    document.execCommand("copy")
})