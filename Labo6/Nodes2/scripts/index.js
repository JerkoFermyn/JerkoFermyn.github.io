
const nodes = () =>{
    let style = document.createElement("style");
    style.textContent = `
     .listitem {
       color: red;
     }
   `;
    document.head.appendChild(style);

    let listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.classList.add('listitem');
    });

    let img = document.createElement('img');
    img.src = 'images/kuikentjepiep.jpg';
    document.body.appendChild(img);
}

window.addEventListener("load", nodes);