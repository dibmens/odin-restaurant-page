import './style.css';
import homePage from './homePage';
import menuPage from './menuPage';
import mediaPage from './mediaPage';
import bookingPage from './bookingPage';

import Img1 from './assets/images/backgrounds/1.jpg';
import Img2 from './assets/images/backgrounds/2.jpg';
import Img3 from './assets/images/backgrounds/3.jpg';
import Img4 from './assets/images/backgrounds/4.jpg';
import Img5 from './assets/images/backgrounds/5.jpg';
import Img6 from './assets/images/backgrounds/6.jpg';


const content = document.querySelector(`#content`);
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
    if(button.classList.contains("menu")){
      content.innerText = "";
      buttons.forEach(button => button.classList.remove(`highlight`));
      button.classList.add(`highlight`);
      menuPage(content);
    } else if (button.classList.contains("home")){
      content.innerText = "";
      buttons.forEach(button => button.classList.remove(`highlight`));
      button.classList.add(`highlight`);
      homePage(content);
    } else if(button.classList.contains("media")){
      content.innerText = "";
      buttons.forEach(button => button.classList.remove(`highlight`));
      button.classList.add(`highlight`);
      mediaPage(content);
    } else if(button.classList.contains("book")){
      content.innerText = "";
      buttons.forEach(button => button.classList.remove(`highlight`));
      button.classList.add(`highlight`);
      bookingPage(content);
    }
}));

function randomizeBackground(){
    const body = document.querySelector(`body`);
    const backgrounds = [Img1, Img2, Img3, Img4, Img5, Img6];
    const randomize = () => {
        return Math.trunc(Math.random()*backgrounds.length);
    } 
    body.style.backgroundImage = `url(${backgrounds[randomize()]})`;
};

setInterval(randomizeBackground,15000);
homePage(content);