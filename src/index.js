import './style.css';
import showHomePage from './homePage';
import showMenuPage from './menuPage';
import showMediaPage from './mediaPage';
import showBookingPage from './bookingPage';

import Img1 from './assets/images/backgrounds/1.jpg';
import Img2 from './assets/images/backgrounds/2.jpg';
import Img3 from './assets/images/backgrounds/3.jpg';
import Img4 from './assets/images/backgrounds/4.jpg';
import Img5 from './assets/images/backgrounds/5.jpg';
import Img6 from './assets/images/backgrounds/6.jpg';

const buttons = document.querySelectorAll('button');
const content = document.querySelector(`#content`);

function styleActiveButton(buttonClass){
  buttons.forEach(button => button.classList.remove(`highlight`));
  document.querySelector(buttonClass).classList.add(`highlight`);
};

function randomizeBackground(){
    const body = document.querySelector(`body`);
    const backgrounds = [Img1, Img2, Img3, Img4, Img5, Img6];
    const randomize = () => {
        return Math.trunc(Math.random()*backgrounds.length);
    } 
    body.style.backgroundImage = `url(${backgrounds[randomize()]})`;
};

(function PageController(){
  
  setInterval(randomizeBackground,15000);
  showHomePage(content);

  buttons.forEach(button => button.addEventListener('click', () => {
    if(button.classList.contains("menu")){
      styleActiveButton(`.menu`);
      showMenuPage(content);
    } else if (button.classList.contains("home")){
      styleActiveButton(`.home`);
      showHomePage(content);
    } else if(button.classList.contains("media")){
      styleActiveButton(`.media`);
      showMediaPage(content);
    } else if(button.classList.contains("book")){
      styleActiveButton(`.book`);
      showBookingPage(content);
    }
  }));
})();