import Modal from "./modal.js"

const modal = Modal()
const checkButtons = document.querySelectorAll(".question__actions--check")
const deleteButtons = document.querySelectorAll(".question__actions--delete")
const cancelButton = document.querySelector(".modal__form--cancel-btn")
const modalTitle = document.querySelector(".modal__title")
const modalDescription = document.querySelector(".modal__description")
const confirmButton = document.querySelector(".modal__form--confirm-btn")

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

deleteButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        handleClick(e, false)
    })
})

cancelButton.addEventListener("click", () => {
    modal.close()
})

function handleClick(e, check = true) {
    e.preventDefault()

    const form = document.querySelector(".modal__form")
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = e.currentTarget.dataset.id
    const slug = check ? "check" : "delete"
    
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)
    
    const text = check ? "Marcar como lida" : "Excluir"
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`

    confirmButton.innerHTML = `Sim, ${text.toLowerCase()}`
    const confirmButtonColor = getComputedStyle(document.documentElement).getPropertyValue("--modal-check")
    const deleteButtonColor = getComputedStyle(document.documentElement).getPropertyValue("--modal-delete")
    check ? confirmButton.style.backgroundColor = confirmButtonColor : confirmButton.style.backgroundColor = deleteButtonColor

    modal.open()
}