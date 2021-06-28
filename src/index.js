import './sass/main.scss';
import menuTemplates from './teamplates/menu.hbs';
import menu from './menu.json';



const menuBoard = document.querySelector('.js-menu');
menuBoard.innerHTML = menuTemplates(menu);


const checkBoxRef = document.querySelector('#theme-switch-toggle')
const bodyColorRef = document.querySelector('body')


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


bodyColorRef.classList.add(localStorage.getItem('theme'));

if (localStorage.getItem('theme') === Theme.DARK) {
    checkBoxRef.checked = true;
} else bodyColorRef.setAttribute('class', 'light-theme');

bodyColorRef.addEventListener('change', handleChange);

function handleChange() {
    if (checkBoxRef.checked) {
        localStorage.setItem('theme', Theme.DARK);
        bodyColorRef.setAttribute('class', 'dark-theme');
    } else {
        localStorage.setItem('theme', Theme.LIGHT);
        bodyColorRef.setAttribute('class', 'light-theme');
    }
}