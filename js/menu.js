const menu = document.querySelector('.icon-menu')
const menuBody = document.querySelector('.menu__body')

menu.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    menuBody.classList.toggle('active')
})

