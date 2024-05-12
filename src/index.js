import './style.css';
import showHomePage from './homePage';
import showMenuPage from './menuPage';
import showMediaPage from './mediaPage';
import showBookingPage from './bookingPage';
import shuffleBackground from './background';

const buttons = document.querySelectorAll('button');
const content = document.querySelector(`#content`);

function styleActiveButton(buttonClass){
  buttons.forEach(button => button.classList.remove(`highlight`));
  document.querySelector(buttonClass).classList.add(`highlight`);
};


function navigatePages(){
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
}

setInterval(shuffleBackground,15000);
showHomePage(content);
navigatePages();