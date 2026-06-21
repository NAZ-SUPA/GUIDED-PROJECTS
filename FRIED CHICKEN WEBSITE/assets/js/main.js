      /*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

    //   Menu Show
      if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
        })
      }

    //    Menu Hidden
    if(navClose){
        navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu')
        })
    }


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(link => link.addEventListener('click',linkAction));


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // Add a class if teh bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') :
                         header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // when we scroll is higher than 3500 veiwpoint height, add teh show-scroll class to the a tag with the scollup class
    this.scrollY >=3500 ? scrollUp.classList.add('show-scroll'): scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelector('section[id]')

const scrrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeigh  = current.offsetHegith,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAtrribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown> sectionTop && scrollDown<=  sectionTop + sectionHeigh){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/