const menu = document.getElementById('js-menu');
const nav = document.getElementById('js-nav');

const toggleMenuIcon = () => {
  if (menu.classList.toggle('active')) {
    nav.style.display = 'block';
    nav.style.animation = 'slideRight 1s ease-in-out forwards';
  } else {
    nav.style.animation = 'slideAway 1s ease-in-out forwards';
  }
};

menu.addEventListener('click', toggleMenuIcon);
