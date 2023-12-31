/*=============== SHOW MENU ===============*/
const navMenu = document.getElementsById('nav-menu'),
      navToggle = document.getElementsById('nav-toggle'),  
      navClose = document.getElementsById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.getElementById('.nav__link')

const linkAction = () =>{
    const navMenu =document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navCloseLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/