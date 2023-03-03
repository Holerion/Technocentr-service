const btnOpenHeder = document.querySelector('#openHeder')
const header = document.querySelector('nav')
btnOpenHeder.addEventListener('click', ()=>{
    header.classList.toggle('open')
})
