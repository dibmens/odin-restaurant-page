import './style.css';
import Img1 from './assets/images/backgrounds/1.jpg';
import Img2 from './assets/images/backgrounds/2.jpg';
import Img3 from './assets/images/backgrounds/3.jpg';
import Img4 from './assets/images/backgrounds/4.jpg';
import Img5 from './assets/images/backgrounds/5.jpg';
import Img6 from './assets/images/backgrounds/6.jpg';
import Img7 from './assets/images/backgrounds/7.jpg';

console.log('this is a test');

document.querySelector(`h1`).classList.add(`hello`);

let buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
    // randomizeBackground();
}));

function Menu(){
    
    
};


function randomizeBackground(){
    let body = document.querySelector(`body`);
    let backgrounds = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];
    let randomize = () => {
        return Math.trunc(Math.random()*backgrounds.length);
    } 
    // let number = randomize()
    body.style.backgroundImage = `url(${backgrounds[randomize()]})`;
};

setInterval(randomizeBackground,12000);