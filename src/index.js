import './sass/main.scss';
import menuTemplates from './teamplates/menu.hbs';
import menu from './menu.json';



const menuBoard = document.querySelector('.js-menu');
menuBoard.innerHTML = menuTemplates(menu);
