function classToggle() {
  const navs = document.querySelectorAll('.item')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.item-toggle')
  .addEventListener('click', classToggle);