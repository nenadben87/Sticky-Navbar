
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if(window.scrollY > 0) {
    navbar.classList.add('active');
    mobileNav.classList.add('active')
  } 
  
  if(window.scrollY < 1){
    navbar.classList.remove('active');
    mobileNav.classList.remove('active');
  }
})

const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLi = document.querySelector('.mobile-nav-li');
const close = document.querySelector('.close');

mobileNav.addEventListener('click', () => {
  mobileNavLi.style.display = 'flex';
})

close.addEventListener('click', () => {
  mobileNavLi.style.display = 'none';
})


   

  


