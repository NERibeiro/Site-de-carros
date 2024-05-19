
let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let incator = document.querySelector('.indicators')
let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')
}

nextButton.onclick = () => {

    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')

}

prevButton.onclick = () => {

    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}