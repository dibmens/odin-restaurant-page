import './style.css';
import Menu from './data/menu.json';
import Reviews from './data/reviews.json';

import Img1 from './assets/images/backgrounds/1.jpg';
import Img2 from './assets/images/backgrounds/2.jpg';
import Img3 from './assets/images/backgrounds/3.jpg';
import Img4 from './assets/images/backgrounds/4.jpg';


const content = document.querySelector(`#content`);

document.querySelector(`h1`).classList.add(`hello`);

let buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
    if(button.classList.contains("menu")){
      content.innerText = "";
      showMenuPage();
    } else if (button.classList.contains("home")){
      content.innerText = "";
      showHomePage();
    } else if(button.classList.contains("media")){
      content.innerText = "";
      showMediaPage();
    }
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





function showMenuPage(){
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


function showHomePage(){
  let div = document.createElement(`div`);
  div.className = "home-wrapper";
  div.innerHTML = 
  `<h3>THE LAST WORD IN HUMAN EXCESS</h3>
  <p>Forget the pursuit of excellence, the golden foils and design cutlery. 
  What we desire can't be found in boutique wine cellars, family butchers' 
  or alpine gardens. The meal is circumstantial. We explore the limits of 
  excess. Seek out the most fragile animals on the planet, steal their most 
  defining feature- their very essence- and feast on it unapologetically.</p>`;
  content.append(div);

  Reviews.forEach((reviewEntry) => {
    let reviewParagraph = document.createElement(`p`);
    let authorParagraph = document.createElement(`p`);
    reviewParagraph.className = "review";
    reviewParagraph.innerText = `${reviewEntry["review"]}`;
    authorParagraph.innerText = `${reviewEntry["author"]}`;
    div.append(reviewParagraph);
    div.append(authorParagraph);
  });
};

function showMediaPage(){
  let div = document.createElement(`div`);
  div.className = "home-wrapper";
  div.innerHTML = 
  `<h2>
    Just to take what the animal needs to survive. <br>
    That's so f****d up. They need their eyes!
  </h2>
  <h3>PATRICE O'NEAL<br>1969 - 2011</h3>
  <p>A New York native stand-up comedian, Patrice came to prominence for 
    his hilarious guest roles on various comedy shows throughout the 00s. Armed with a 
    sharp tongue, he rarely made fast friends, but those who got to know 
    him well saw a man with a big heart and still miss him. The restaurant 
    menu is inspired by one such guest appearance.
  </p>
  <p>Disclaimer- video contains strong language</p>
  <iframe width="500" height="280" src="https://www.youtube.com/embed/VikTiogGfLs" 
  title="Patrice O&#39;Neal on O&amp;A - Eating Exotic Animals" 
  frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
  encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin">
  </iframe>`;
  content.append(div);
};