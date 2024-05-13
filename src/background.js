import Img1 from './assets/images/backgrounds/1.jpg';
import Img2 from './assets/images/backgrounds/2.jpg';
import Img3 from './assets/images/backgrounds/3.jpg';
import Img4 from './assets/images/backgrounds/4.jpg';
import Img5 from './assets/images/backgrounds/5.jpg';
import Img6 from './assets/images/backgrounds/6.jpg';

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

function preloadBackgrounds(preloadDiv){
    const div = document.querySelector(preloadDiv);
    div.style.opacity = `0`;
    images.forEach((image) => {
        const stagingDiv = document.createElement(`div`);
        stagingDiv.style.backgroundImage = `url(${image})`;
        div.append(stagingDiv);
    });
}

function shuffleBackground(){
    const background = document.querySelector("body");
    const randomize = () => Math.trunc(Math.random()*images.length);
    background.style.backgroundImage = `url(${images[randomize()]})`;
};

export {preloadBackgrounds,shuffleBackground};