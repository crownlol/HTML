const botao = document.getElementById('backToTopButton')
const navigation = document.getElementById('navigation')
window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showbackToTopButtonOnScroll()
 showNavOnScroll()
}

function showbackToTopButtonOnScroll(){


  if (scrollY > 550) {
    botao.classList.add('show')
  } else {
    botao.classList.remove('show')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}



function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)
