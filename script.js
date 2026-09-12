const menuButton = document.querySelector('.menu-button');
const topNav = document.querySelector('.top-nav');

if (menuButton && topNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = topNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  topNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      topNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
