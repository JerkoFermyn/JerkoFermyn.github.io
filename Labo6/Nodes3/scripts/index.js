const setup = () =>{
    document.getElementById("button").addEventListener("click",nodes);
}
const nodes = () =>{
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Dit is een par';
    const div = document.getElementById('myDIV');
    div.appendChild(paragraph);
}

window.addEventListener("load", setup);