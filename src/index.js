import './style.css';
import Icon from './dibmens.png';

console.log('this is a test');

document.querySelector(`body`).style.backgroundColor = "firebrick";
document.querySelector(`h1`).classList.add(`hello`);

let buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
    alert('testo');
}));

const myIcon = new Image();
myIcon.src = Icon;

document.querySelector(`div`).appendChild(myIcon);