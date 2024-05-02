import './style.css';

console.log('this is a test');

document.querySelector(`h1`).classList.add(`hello`);

let buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
    alert('testo');
}));

