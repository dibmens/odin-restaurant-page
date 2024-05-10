
import Reviews from './data/reviews.json';

export default function showHomePage(contentDiv){
    let div = document.createElement(`div`);
    div.className = "home-wrapper";
    div.innerHTML = 
    `<h3>THE LAST WORD IN HUMAN EXCESS</h3>
    <p>Forget the pursuit of excellence, the golden foils and design cutlery. 
    What we desire can't be found in boutique wine cellars, family butchers' 
    or alpine gardens. The meal is circumstantial. We explore the limits of 
    excess. Seek out the most fragile animals on the planet, steal their most 
    defining feature- their very essence- and feast on it unapologetically.</p>`;
    contentDiv.append(div);
  
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