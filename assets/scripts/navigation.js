const mobileMenuToggle = document.querySelector('.open-menu');
const mobileNav = document.querySelector('.mobile-popup');
const closeMobileMenu = document.querySelector('.close-menu');
const navWrapper = document.querySelector('.nav-wrapper');
const header = document.querySelector('header');

const hideNav = (e) => {
  if(!e.target.closest('.open-menu') && !e.target.closest('.mobile-popup')){
    mobileNav.classList.remove('show');
    document.body.style.overflow = "";
    document.body.classList.remove("overlay");
  }
}

mobileMenuToggle.addEventListener('click', () => {
  mobileNav.classList.add('show');
  document.body.style.overflow = "hidden";
  document.body.classList.add("overlay");
});

document.addEventListener('click', hideNav);

closeMobileMenu.addEventListener('click', (e) =>{
  mobileNav.classList.remove('show');
  document.body.style.overflow = "";
  document.body.classList.remove("overlay");
})

window.addEventListener('scroll', () => {
  if(window.scrollY > header.offsetHeight){
    navWrapper.classList.add('sticky');
    document.querySelector('header + *').style.paddingTop = navWrapper.offsetHeight + "px";
  }
  else{
    navWrapper.classList.remove('sticky');
    document.querySelector('header + *').style.paddingTop = "";
  }
})