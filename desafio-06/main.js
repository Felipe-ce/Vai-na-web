const btnMobile = document.querySelector("#btn-mobile")

function toggleMenu(params) {
  const nav = document.querySelector("#nav")
  nav.classList.toggle('ativo')
}

btnMobile.addEventListener('click', toggleMenu)