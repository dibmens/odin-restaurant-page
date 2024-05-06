import './style.css';
import Menu from './assets/data/menu.json';

import Img1 from './assets/images/backgrounds/1.jpg';
import Img2 from './assets/images/backgrounds/2.jpg';
import Img3 from './assets/images/backgrounds/3.jpg';
import Img4 from './assets/images/backgrounds/4.jpg';


const content = document.querySelector(`#content`);

document.querySelector(`h1`).classList.add(`hello`);

let buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
    button.classList.contains("menu") ? showMenu() : content.innerText = "";
}));



function randomizeBackground(){
    const body = document.querySelector(`body`);
    const backgrounds = [Img1, Img2, Img3, Img4];
    const randomize = () => {
        return Math.trunc(Math.random()*backgrounds.length);
    } 
    body.style.backgroundImage = `url(${backgrounds[randomize()]})`;
};

setInterval(randomizeBackground,15000);





function showMenu(){
  Menu.forEach((courseEntry)=> {
  let div = document.createElement(`div`);
  div.className = "course-wrapper";
  content.append(div);

  let course = document.createElement(`h2`)
  course.innerText = `${courseEntry["course"].toUpperCase()}`;
  div.append(course);

  courseEntry["menuItems"].forEach((itemEntry)=> {
    let item = document.createElement(`h3`);
    let info = document.createElement(`p`);
    item.innerText = `${itemEntry["item"].toUpperCase()}`;
    info.innerText = `${itemEntry["info"]}`;
    div.append(item);
    div.append(info);
  })
});
}