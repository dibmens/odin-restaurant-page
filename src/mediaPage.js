export default function showMediaPage(contentDiv){
    contentDiv.innerText = "";
    let div = document.createElement(`div`);
    div.className = "home-wrapper";
    div.innerHTML = 
    `<h2>
      Just to take what the animal needs to survive. <br>
      That's so f****d up. They need their eyes!
    </h2>
    <h3>PATRICE O'NEAL<br>1969 - 2011</h3>
    <p>A New York native and a stand-up comedian, Patrice came to prominence for 
      his many guest spots on various comedy shows throughout the 00s. Armed with a 
      sharp tongue, he rarely made fast friends, but those who got to know 
      him, saw a man with a big heart and strong principles. The restaurant 
      menu is inspired by one such guest appearance.
    </p>
    <p>Disclaimer- video contains strong language</p>
    <iframe width="500" height="280" src="https://www.youtube.com/embed/VikTiogGfLs" 
    title="Patrice O&#39;Neal on O&amp;A - Eating Exotic Animals" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin">
    </iframe>`;
    contentDiv.append(div);
  };