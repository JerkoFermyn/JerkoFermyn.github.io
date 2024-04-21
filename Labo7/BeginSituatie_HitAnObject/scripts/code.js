let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
const setup = () => {
    let div = document.getElementById("playField");
    let p = document.createElement("p");
    p.setAttribute("id","score" );
    const img = document.createElement("img");
    img.setAttribute("id","changePhoto" );
    img.src = "images/0.png";
    img.setAttribute("alt", "foto van een bom");
    img.style.position = "absolute";
    div.appendChild(img);
    let button = document.getElementById("start");
    button.addEventListener("click", clickImage);
};
const clickImage = () => {
    let timeout = setTimeout(clickImage,3000);
    document.getElementById("changePhoto").addEventListener("click", clickImage)
    let aantal = 0;
    let p = document.getElementById("score");
    //p.innerHTML = "U heeft een score van " +aantal;
    let img = document.getElementById("changePhoto");
    let div = document.getElementById("playField");
    let widthvenster = window.innerWidth/2 - 250 - 48;
    img.style.top = div.offsetHeight * Math.random() + 'px';
    img.style.left = widthvenster + div.offsetWidth * Math.random() + 'px';
    let randomPhoto = Math.round(Math.random() * (4));
    switch (randomPhoto){
        case 1:
            img.setAttribute("alt", "foto van een donut" );
            break;
        case 2:
            img.setAttribute("alt", "foto van een fruitgebak" );
            break;
        case 3:
            img.setAttribute("alt", "foto van een vlaai" );
            break;
        case 4:
            img.setAttribute("alt", "foto van een taart" );
            break;
    }
    aantal++;
    clearTimeout(timeout);
}



window.addEventListener("load", setup);


