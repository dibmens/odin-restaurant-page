import Menu from './data/menu.json';

export default function showMenuPage(contentDiv){
    Menu.forEach((courseEntry)=> {
    let div = document.createElement(`div`);
    div.className = "course-wrapper";
    contentDiv.append(div);
  
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