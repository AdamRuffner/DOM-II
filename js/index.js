// Your code goes here

//change color on intro with doubleclick
const intro = document.querySelector('.intro')

intro.addEventListener('dblclick', (event) => {
    event.target.style.color = 'blue'
})


//Lets go image resize on mouseover 
const mouse = document.querySelector('.img-content')

mouse.addEventListener('mouseover', (event) => {
    event.target.style.height = '100px'
})

//bus image wheel
const header = document.querySelector('.intro')
const bus = header.querySelector('img')

const zoom = function(event){
    event.preventDefault()
    scale += event.deltaY * -0.01
    scale = Math.min(Math.max(.125, scale),4)
    bus.style.transform = `scale(${scale})`
}

let scale = 1
bus.onwheel = zoom;

const changeColor = document.querySelector('.main-navigation')
changeColor.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'green'
})




