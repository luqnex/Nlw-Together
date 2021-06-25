import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar todos os botoes com class check
const checkButtons = document.querySelectorAll('.actions a.check') 

checkButtons.forEach(button => {
    button.addEventListener('click', hancleClick)
})

const deleteButton = document.querySelectorAll('.actions .delete')

deleteButton.forEach(button => {
    button.addEventListener('click', (event) => hancleClick(event, false))
})

function hancleClick(event, check = true) {
    event.preventDefault()
    modalTitle.innerHTML = check ? 'Marcar como lido' : 'Excluir está pergunta'
    modalDescription.innerHTML = check ? 'Tem certeza que deseja marcar como lida está pergunta?' : 'Tem certeza que deseja excluir está pergunta?'
    modalButton.innerHTML = check ? 'Sim, marcar como lida' : 'Sim, excluir'
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    modal.open()
}
