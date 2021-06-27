import './sass/main.scss';
import menuTemplates from './teamplates/menu.hbs';
import menu from './menu.json';



const menuBoard = document.querySelector('.js-menu');
menuBoard.innerHTML = menuTemplates(menu);


 const checkBoxRef = document.querySelector('#theme-switch-toggle')
const bodyRef = document.querySelector('body')


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
checkBoxRef.checked = JSON.parse(localStorage.getItem('checkbox'))
changeTheme()

function changeTheme() {
  if (checkBoxRef.checked) {
    bodyRef.classList.add(Theme.DARK)
  }else if(!checkBoxRef.checked)
   
   
   {bodyRef.classList.remove(Theme.LIGHT)}
    
}
 checkBoxRef.addEventListener('change', onChange)
function onChange (e) {
  if(e.currentTarget.checked)
  {
    bodyRef.classList.add(Theme.DARK)
    bodyRef.classList.remove(Theme.LIGHT)
localStorage.setItem('checkbox', checkBoxRef.checked)
  } else {
    bodyRef.classList.add(Theme.LIGHT)
    bodyRef.classList.remove(Theme.DARK)
localStorage.setItem('checkbox', checkBoxRef.checked)
  }
}