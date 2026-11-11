// ----------------------------slider----------------------------

const sliderButtons = document.querySelector('.slider-buttons')
const slider = document.querySelector('.slider-example__cards')
const slides = document.querySelectorAll('.slider-example__card')
const Card = document.querySelector('.slider-example__card')
const rightArrow = sliderButtons.querySelector('.arrow-rigth')
const leftArrow = sliderButtons.querySelector('.arrow-left')

let slideIndex = 0
let counter = 0

let slidesMax = 0


function countMax () {
    slidesMax = slider.offsetWidth - Card.offsetWidth
}

countMax ()

window.addEventListener('resize', countMax)

function plusSlide () {
  counter += Card.offsetWidth + 30
  if (counter > 0) {
    leftArrow.classList.remove('arrow--disavled')
  }
  if (counter > slidesMax) {
    counter -= Card.offsetWidth + 30
    rightArrow.classList.add('arrow--disavled')
  } else {
    slider.style.transform = `translateX(-${counter}px)`
    console.log(counter)
  }
}

function minusSlide () {
  counter -= Card.offsetWidth + 30
  if (counter < slidesMax) {
    rightArrow.classList.remove('arrow--disavled')
  }
  if (counter >= 0) {
    slider.style.transform = `translateX(-${counter}px)`
  } else {
    leftArrow.classList.add('arrow--disavled')
    counter += Card.offsetWidth + 30
    return
  }
}

rightArrow.addEventListener('click', () => {
  plusSlide(slideIndex++)
})

leftArrow.addEventListener('click', () => {
  minusSlide(slideIndex--)
})

// -------------------------burger-----------------------

let burger = document.querySelector('.burger')
let burgerConteiner = document.querySelector('.burger-container')
let burgerMenu = document.querySelector('.burger-menu')

burgerConteiner.addEventListener('click', ()=>{
  burger.classList.toggle('burger--active')
  burgerMenu.classList.toggle('invisible')
})

// -------------------------module-window-----------------------


let ModuleWindow = document.querySelector('.Module-window')
let background = document.querySelector('.background')
let button = document.querySelector('.call-button')
const closeFormButton = document.querySelector('.close-form-button')


document.addEventListener('click', (e) => {
  if (e.target.closest('.call-button')) {
    ModuleWindow.classList.toggle('invisible');
    background.classList.toggle('invisible');
  }
});

ModuleWindow.addEventListener('click', (event) => {
  if (event.target === ModuleWindow || event.target === closeFormButton) {
    ModuleWindow.classList.add('invisible')
    background.classList.add('invisible')
  }
})

// --------------------------------------------------------------