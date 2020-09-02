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

//header background color change 'click'

const changeColor = document.querySelector('h1.logo-heading')
changeColor.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'green'
})

//'keydown' Escape changes color to lets go paragraph

const p1 =document.querySelector('.text-content')

document.addEventListener('keydown', event => {
    if(event.key === 'Escape') {
        p1.style.color = 'red'
    }
})

//'keydown' changes lets go paragraph back to black using 'a'

// const p2 = document.querySelector('.content-destination')
// const p3 = p2.querySelector('h2')

document.addEventListener('keyup', event =>{
    if(event.key === 'a'){
        p1.style.color = 'black'
    }
})

//alert for when the oage is loaded

// window.addEventListener('load', (event) => {
//     alert('page is fully loaded')
// })

//focus on 'home' nav
const nav = document.querySelector('.nav a')
nav.addEventListener('focus', (event) => {
    event.target.style.background = 'orange'
} )

//context menu event, doesn't allow you to right-click at footer copyright

const noContext = document.querySelector('footer')
noContext.addEventListener('contextmenu', event => {
    event.preventDefault()
})

//blur on home nav when you click off it
nav.addEventListener('blur', (event) => {
    event.target.style.background = 'pink'
} )

