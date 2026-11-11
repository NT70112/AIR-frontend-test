const form = document.querySelector('.Module-window__form')
const nameInput = document.getElementById('name')
const nameError = document.querySelector('.name-error')
const telInput = document.getElementById('tel')
const telError = document.querySelector('.tel-error')
const formButton = document.querySelector('.form-button')

let formPassed = false


const maskOptions = {
mask: '+{7}(000)000-00-00'
};
const mask = IMask(telInput, maskOptions);


function updateButton() {
    const isValid = mask.masked.isComplete && nameInput.value.trim() !== ''
    formButton.classList.toggle('form-button--active', isValid)
    formButton.textContent = 'Отправить заявку'
}

telInput.addEventListener('input', updateButton)
nameInput.addEventListener('input', updateButton)



form.addEventListener('submit', (e)=>{
    e.preventDefault()
    nameValidation()
    if (formPassed !== false){
        if (mask.masked.isComplete) {
            formPassed = true
        } else {
            formPassed = false
            telError.textContent = 'Номер введен некорректно'
        }
        if (formPassed === true){
            formButton.textContent = 'Успешно'
        }
    } else{
        return
    }
})

function nameValidation(){
    nameError.textContent = ''
    let name = nameInput.value.split(' ').join('').trim()
    const isValid = /^\p{L}+$/u
    if (name !== ''){
        if (isValid.test(name)){
            formPassed = true
            return
        }
        else{
            nameError.textContent = 'Имя может содержать только буквы'
            formPassed = false
            return
        }
    } else{
        nameError.textContent = 'Cтрока не может быть пустой'
        formPassed = false
        return
    }
}




